const mongoose = require('mongoose')
const ServiceSchema = new mongoose.Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  categoryName: {type: String, required: true},
  createdAt: {type: Date, default: Date.now }
})

const Service = mongoose.model('Service', ServiceSchema, 'services')

module.exports = Service