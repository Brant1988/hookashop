const express = require('express')
const router = express.Router()
const userRouter = require('./User')
const categoryRouter = require('./Category')
const brandRouter = require('./Brand')
const productRouter = require('./Product')

router.use('/', userRouter)
router.use('/', categoryRouter)
router.use('/', brandRouter)
router.use('/', productRouter)

module.exports = router
