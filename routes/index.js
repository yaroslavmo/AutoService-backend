const express = require('express')
const router = express.Router();

const clients = require('./clients')
const services = require('./services')
const journal = require('./journal')
const categories = require('./categories')
const discounts = require('./discounts')

router
    .use('/clients', clients)
    .use('/services', services)
    .use('/journal', journal)
    .use('/categories', categories)
    .use('/discounts', discounts)

module.exports = router