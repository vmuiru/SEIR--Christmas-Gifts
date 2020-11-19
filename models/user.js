const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
  gift: {
    text: String
},
location: {
    type: String,
    ref: 'Store'
}, {
  timestamps: true
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarURL: String,
  gifts: [giftSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);