const mongoose = require('mongoose');
// service use schema

const BillSchema = new mongoose.Schema({
    billClientId: {type: String, required: true},
    billServices: {type:Array, required: true},
    total: {type: Number, required: true},
    createdAt: {type:Date, default: Date.now()}
});

const Journal = mongoose.model('Journal', BillSchema, 'bills')

module.exports = Journal