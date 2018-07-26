const router = require('express').Router()

const controller = require('../controllers/CategoryController')
const RestfulRoutes = require('./RestfulRoutes')

RestfulRoutes(router, controller)
  .crud()

module.exports = router
