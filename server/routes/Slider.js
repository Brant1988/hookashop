const express = require("express");
const router = express.Router();
const { Slider } = require("../models");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/slider", async (req, res, next) => {
  try {
    const { title, img } = req.body;
    const slider = await Slider.create({ title, img });
    return res.json(slider);
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message,
      })
    );
  }
});
router.get("/slider", async (req, res, next) => {
  try {
    const slider = await Slider.findAll();
    return res.json(slider);
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
