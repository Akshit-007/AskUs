const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    id: { type: String }
});

const user = mongoose.model('User', userSchema);

module.exports = user;