const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,  
        enum: ['Nordstrom', 'Macys', 'Apple', 'Amazon', 'Target', 'Walmart'],
        storeId: String 
    },
    location: {
        type: String,
        enum: ['SoldOut', 'Americas', 'Online', 'Europe', 'Asia', 'Africa']   
    },
    price: {
        type: Number,
        min: 0
    }, 

    }, {timestamps: true});

module.exports = mongoose.model('Store', storeSchema);