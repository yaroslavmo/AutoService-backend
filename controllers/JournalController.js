const Journal = require('../models/Journal')

class JournalController {
  find() {
    return Journal.find()
  }
  create(bill) {
    return Journal.create(bill)
  }
  findById(id) {
    return Journal.findById(id)
  }
  removeById(id) {
    return Journal.findByIdAndRemove(id)
  }
  updateById(id, bill) {
    return Journal.findByIdAndUpdate(id, bill, { new: true })
  }
}

module.exports = new JournalController()