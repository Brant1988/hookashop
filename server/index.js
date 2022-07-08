require('dotenv').config()
const express = require('express')
const sequelize = require('./database')
const models = require('./models')
const cors = require('cors')
const fileUpload = require('express-fileUpload')
const router = require('./routes/routes')
const errorHandler = require('./middleware/errorMiddleware')
const path = require('path')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/', router)

app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (err) {
    console.log(err)
  }
}

start()
