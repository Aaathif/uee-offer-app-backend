const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    originalPrice: {
        type: String,
        required: true
    },
    offerRate: {
        type: String,
        required: true
    },
    displayedPrice: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true
    },

},
    {
        timestamps: true
    });

module.exports = mongoose.model('Product', ProductSchema);
