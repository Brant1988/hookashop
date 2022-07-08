const express = require('express')
const router = express.Router()
const { Product } = require('../models')
const { ProductInfo } = require('../models')
const uuid = require('uuid')
const path = require('path')
const checkRole = require('../middleware/checkRoleMiddleware')
const { Op } = require('sequelize')
const sequelize = require('sequelize')

router.post('/product', checkRole('ADMIN'), async (req, res, next) => {
  try {
    let { name, price, isOnSale, brandId, categoryId, info } = req.body
    const { img } = req.files
    let fileName = uuid.v4() + '.jpg'
    img.mv(path.resolve(__dirname, '..', 'static', fileName))

    const product = await Product.create({
      name,
      price,
      isOnSale,
      brandId,
      categoryId,
      img: fileName
    })

    if (info) {
      info = JSON.parse(info)
      info.forEach(element => {
        ProductInfo.create({
          title: element.title,
          description: element.title,
          productId: product.id
        })
      })
    }
    return res.json(product)
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message
      })
    )
  }
})

router.get('/product', async (req, res, next) => {
  try {
    let { isOnSale, brandId, categoryId, limit, page } = req.query
    let name = req.query
    page = page || 1
    limit = limit || 12
    let offset = page * limit - limit
    let products
    if (isOnSale) {
      products = await Product.findAndCountAll({
        where: { isOnSale: true },
        limit,
        offset
      })
    }
    // if (name) {
    //   products = await Product.findAndCountAll({
    //     where: { [Op.match]: sequelize.fn('to_tsquery', name) },
    //     limit,
    //     offset
    //   })
    // }
    if (!brandId && !categoryId) {
      products = await Product.findAndCountAll({ limit, offset })
    }
    if (brandId && !categoryId) {
      products = await Product.findAndCountAll({
        where: { brandId },
        limit,
        offset
      })
    }
    if (!brandId && categoryId) {
      products = await Product.findAndCountAll({
        where: { categoryId },
        limit,
        offset
      })
    }
    if (brandId && categoryId) {
      products = await Product.findAndCountAll({
        where: { brandId, categoryId },
        limit,
        offset
      })
    }
    return res.json(products)
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message
      })
    )
  }
})

router.get('/product/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await Product.findOne({
      where: { id },
      include: [{ model: ProductInfo, as: 'info' }]
    })
    return res.json(product)
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message
      })
    )
  }
})

module.exports = router
