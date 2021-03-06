const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftSchema = new mongoose.Schema({
  gift: {
    type: String,
},
storeIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Store'
}] 
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