const mongoose = require('mongoose')
const GuestSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  createdAt: {type: Date, default: Date.now }
})

const Client = mongoose.model('Client', GuestSchema, 'guests')

module.exports = Client