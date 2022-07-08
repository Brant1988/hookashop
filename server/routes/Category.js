const express = require('express')
const router = express.Router()
const { Category } = require('../models')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/category', checkRole('ADMIN'), async (req, res, next) => {
  try {
    const { name } = req.body
    const category = await Category.create({ name })
    return res.json(category)
  } catch (err) {
    return next(
      res.json({
        status: err.status,
        message: err.message
      })
    )
  }
})
router.get('/category', async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    return res.json(categories)
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
