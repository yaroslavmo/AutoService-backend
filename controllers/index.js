const services = require('./ServiceController')
const clients = require('./ClientController')
const categories = require('./CategoryController')
const discounts = require('./DiscountController')
const journal = require('./JournalController')

module.exports = {
  services,
  clients,
  categories,
  discounts,
  journal,
}