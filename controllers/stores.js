const Store = require('../models/store')
const User = require('../models/user');

function newStore(req, res) {
        res.render('stores/new', { title: 'Add New Store', giftId: req.params.id})
}

function create(req, res){
    Store.create(req.body, function(err, store) {
        console.log(err, store)  
        const gift = req.user.gifts.id(req.params.id)
        gift.storeIds.push(store._id)
        req.user.save(function(err) {
            res.redirect(`/users/${req.user._id}`)
        })
    });
}

module.exports = {
    new: newStore,
    create,
    
}