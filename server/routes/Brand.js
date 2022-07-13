const express = require("express");
const router = express.Router();
const { Brand } = require("../models");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/brand", async (req, res, next) => {
  try {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message,
      })
    );
  }
});
router.get("/brand", async (req, res, next) => {
  try {
    let { ...params } = req.query;
    const brands = await Brand.findAll({
      where: {
        ...params,
      },
    });
    return res.json(brands);
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message,
      })
    );
  }
});
// , checkRole("ADMIN")
module.exports = router;
