const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type:String,
        required: true
    },
    Cookie: {
        type: String,
        required: true
    }
});
const User = module.exports = mongoose.model('User',UserSchema);