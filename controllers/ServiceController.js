const Service = require('../models/Service')

class ServiceController {
  find() {
    return Service.find()
  }
  create(service) {
    return Service.create(service)
  }
  findById(id) {
    return Service.findById(id)
  }
  removeById(id) {
    return Service.findByIdAndRemove(id)
  }
  updateById(id, service) {
    return Service.findByIdAndUpdate(id, service, { new: true })
  }
}

module.exports = new ServiceController()