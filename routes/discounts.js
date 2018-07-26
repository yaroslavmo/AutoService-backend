const router = require('express').Router()

const controller = require('../controllers/DiscountController')
const RestfulRoutes = require('./RestfulRoutes')

RestfulRoutes(router, controller)
  .crud()

module.exports = router
