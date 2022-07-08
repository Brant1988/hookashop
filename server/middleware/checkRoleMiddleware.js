const token = require('jsonwebtoken')

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next()
    }
    try {
      const jwt = req.headers.authorization.split(' ')[1]
      if (!jwt) {
        res.status(401).json({ messge: 'Not authorized' })
      }
      const decodedToken = token.verify(jwt, process.env.SECRET_KEY)
      if (decodedToken.role !== role) {
        res.status(403).json({ messge: 'Not allowed' })
      }
      req.user = decodedToken
      next()
    } catch (err) {
      res.status(401).json({ messge: 'Not authorized' })
    }
  }
}
