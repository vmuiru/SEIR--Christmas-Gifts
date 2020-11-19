const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,   
    },
    location: {
        type: String,
        enum: ['SoldOut', 'Americas', 'Online', 'Europe', 'Asia', 'Africa']   
    },
    price: {
        type: Number,
        min: 0
    }, 
    user: [{type:Schema.Types.ObjectId,ref:'user'}]

    }, {timestamps: true});

module.exports = mongoose.model('Store', storeSchema);