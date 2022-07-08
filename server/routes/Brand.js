const express = require('express')
const router = express.Router()
const { Brand } = require('../models')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/brand', checkRole('ADMIN'), async (req, res, next) => {
  try {
    const { name } = req.body
    const brand = await Brand.create({ name })
    return res.json(brand)
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message
      })
    )
  }
})
router.get('/brand', async (req, res, next) => {
  try {
    const brands = await Brand.findAll()
    return res.json(brands)
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
