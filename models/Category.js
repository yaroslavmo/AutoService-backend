const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    categoryName: {type: String, required: true},
    categoryServices: Array,
    discounts: Array,
});

const Category = mongoose.model('Category', CategorySchema, 'categories')

module.exports = Category