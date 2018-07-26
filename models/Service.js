const mongoose = require('mongoose')
const {categorySchema} = require('./Category')

const ServiceSchema = new mongoose.Schema({
  name: {type: String, required: true},
  price: {type: Number},
  category: categorySchema,
  createdAt: {type: Date, default: Date.now }
})

const Service = mongoose.model('Service', ServiceSchema, 'services')

module.exports = Service
module.exports.serviceSchema = ServiceSchema