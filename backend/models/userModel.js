const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' ,required: true},
   
}, {
    timestamps: true
})

const User = mongoose.model('User', userModel);
module.exports = User;