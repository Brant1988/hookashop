const errorHandler = (err, req, res, next) => {
  res.json({
    status: err.status,
    message: err.message
  })
  next(err)
}
module.exports = errorHandler
