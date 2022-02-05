var mongoose = require('mongoose');
const db = require('../config/connection');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    photo_url: String,
    role: { type: String, default: 'editor' },
    active: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date()
    },
});
module.exports = mongoose.model('User',userSchema);