var mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String,
    inProduct: Number,
    outProduct: Number,
    image: String,
    user_id: mongoose.ObjectId,
    created_at: {
        type: Date,
        default: new Date()
    },
})

module.exports = mongoose.model('Product', ProductSchema);