const express = require("express");
const router = express.Router();
const bcypt = require("bcrypt");
const { User } = require("../models");
const token = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

const generateJwt = (id, email, role) => {
  return token.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "12h",
  });
};

router.post("/registration", async (req, res, next) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(
        res.json({
          status: 403,
          message: "Wrong email or password",
        })
      );
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        res.json({
          status: 409,
          message: `User with email: ${email} exist`,
        })
      );
    }
    const hashedPassword = await bcypt.hash(password, 4);

    const user = await User.create({
      email,
      role,
      password: hashedPassword,
    });

    const jwt = generateJwt(user.id, email, user.role);
    return res.json(jwt);
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message,
      })
    );
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(
        res.json({
          status: 404,
          message: "User not found",
        })
      );
    }
    let comparePassword = bcypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(
        res.json({
          status: 403,
          message: "Wrong password",
        })
      );
    }
    const jwt = generateJwt(user.id, user.email, user.role);
    return res.json({ jwt });
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message,
      })
    );
  }
});
router.get("/auth", authMiddleware, async (req, res, next) => {
  try {
    const jwt = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json(jwt);
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message,
      })
    );
  }
});

module.exports = router;
