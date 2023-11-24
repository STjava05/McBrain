const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
       
    },
    description: {
        type: String,
        required: true,
        
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 32
    },
    category: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number
    },
    url: {
        type: String,
        required: true
    },
   
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);