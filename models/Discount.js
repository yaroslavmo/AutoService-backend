const mongoose = require('mongoose');
const DiscountSchema = new mongoose.Schema({
    name: {type: String, required: true},
    amount: {type: Number, required: true},
});

const Discount = mongoose.model('Discount', DiscountSchema, 'discounts')

module.exports = Discount