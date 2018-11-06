const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubcategorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Subcategory', SubcategorySchema);
