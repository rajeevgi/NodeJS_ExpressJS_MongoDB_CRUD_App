const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },

    email : {
        type: String,
        required: true
    },

    age : {
        type: Number,
        required: true,
    },

}, { timestamps: true });

module.exports = mongoose.model('Users', userSchema);