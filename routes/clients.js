const router = require('express').Router()

const controller = require('../controllers/ClientController')
const RestfulRoutes = require('./RestfulRoutes')

RestfulRoutes(router, controller)
  .crud()

module.exports = router
