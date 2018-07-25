const Discount = require('../models/Discount')

class DiscountController {
  find() {
    return Discount.find()
  }
  create(discount) {
    return Discount.create(discount)
  }
  findById(id) {
    return Discount.findById(id)
  }
  removeById(id) {
    return Discount.findByIdAndRemove(id)
  }
  updateById(id, discount) {
    return Discount.findByIdAndUpdate(id, discount, { new: true })
  }
}

module.exports = new DiscountController()