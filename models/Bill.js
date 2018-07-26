const {serviceSchema} = require('./Service')
// const clientSchema = require('./Client')
const mongoose = require('mongoose');

const countTotal = (billServices) => {
    let total = 0;
    total = billServices.forEach((service,index)=>{
       total += service.price * service.category.discount.amount
    });
    return total
};

const BillSchema = new mongoose.Schema({
    billClientId: {type: String, required: true},
    billServices: {type:[serviceSchema]},//, required: true},
    total: {type: Number, required: true},
    createdAt: {type:Date, default: Date.now()}
});

const Bill = mongoose.model('Bill', BillSchema, 'bills')

module.exports = Bill
module.exports.countTotal = countTotal