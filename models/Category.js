const { serviceSchema } = require('./Service')
const { discountSchema } = require('./Discount')

const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true },
    discount: discountSchema,
});

const Category = mongoose.model('Category', CategorySchema, 'categories')

module.exports = Category
module.exports.categorySchema = CategorySchema