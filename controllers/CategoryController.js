const Category = require('../models/Category')

class CategoryController {
  find() {
    return Category.find()
  }
  create(category) {
    return Category.create(category)
  }
  findById(id) {
    return Category.findById(id)
  }
  removeById(id) {
    return Category.findByIdAndRemove(id)
  }
  updateById(id, category) {
    return Category.findByIdAndUpdate(id, category, { new: true })
  }
}

module.exports = new CategoryController()