const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Subcategory = require('./Subcategory');

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subcategories: [{ type: Schema.Types.ObjectId, ref: Subcategory }]
});

module.exports = Category = mongoose.model('category', CategorySchema);
