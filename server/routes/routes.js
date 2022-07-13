const express = require("express");
const router = express.Router();
const userRouter = require("./User");
const categoryRouter = require("./Category");
const brandRouter = require("./Brand");
const productRouter = require("./Product");
const sliderRouter = require("../routes/Slider");

router.use("/", userRouter);
router.use("/", categoryRouter);
router.use("/", brandRouter);
router.use("/", productRouter);
router.use("/", sliderRouter);

module.exports = router;
