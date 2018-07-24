const Client = require('../models/Client')

class ClientController {
  find() {
    return Client.find()
  }
  create(guest) {
    return Client.create(guest)
  }
  findById(id) {
    return Client.findById(id)
  }
  removeById(id) {
    return Client.findByIdAndRemove(id)
  }
  updateById(id, guest) {
    return Client.findByIdAndUpdate(id, guest, { new: true })
  }
}

module.exports = new ClientController()