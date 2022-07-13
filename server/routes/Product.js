const express = require("express");
const router = express.Router();
const { Product } = require("../models");
const { ProductInfo } = require("../models");
const uuid = require("uuid");
const path = require("path");
const checkRole = require("../middleware/checkRoleMiddleware");
const { Op } = require("sequelize");
const sequelize = require("../database");

router.post("/product", async (req, res, next) => {
  try {
    let { name, price, oldPrice, isOnSale, brandId, categoryId, info } =
      req.body;
    const { img } = req.files;
    let fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "static", fileName));

    const product = await Product.create({
      name,
      price,
      oldPrice,
      isOnSale,
      brandId,
      categoryId,
      img: fileName,
    });

    if (info) {
      info = JSON.parse(info);
      info.forEach((element) => {
        ProductInfo.create({
          title: element.title,
          description: element.title,
          productId: product.id,
        });
      });
    }
    return res.json(product);
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message,
      })
    );
  }
});
// , checkRole("ADMIN"),
router.get("/product", async (req, res, next) => {
  try {
    let { what = "", limit = 12, page = 1, price, ...restParams } = req.query;
    let products;
    console.log(what);
    if (what) {
      products = await Product.findAll({
        where: {
          name: {
            [Op.like]: `%${what}%`,
          },
        },
        limit,
        page,
      });
    } else if (price) {
      products = await Product.findAndCountAll({
        price: {
          [Op.between]: [price, price],
        },
        limit,
        page,
      });
    } else {
      products = await Product.findAndCountAll({
        where: {
          ...restParams,
        },
        limit,
        page,
      });
    }
    return res.json(products);
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message,
      })
    );
  }
});

router.get("/product/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: [{ model: ProductInfo, as: "info" }],
    });
    return res.json(product);
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
