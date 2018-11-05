const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubcategorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = Subcategory = mongoose.model('subcategory', SubcategorySchema)