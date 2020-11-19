const Store = require('../models/store');
const User = require('../models/user');

function newStore(req, res) {
        res.render('stores/new', { title: 'Add New Store', storeId: req.params.id})
}

function create(req, res){
    req.body.user = req.params.id;
    Store.create(req.body, function(err, store){
        store.save(function(err){
        res.redirect(`/users/${req.params.id}`)
    });
    })
}

module.exports = {
    new: newStore,
    create,
    
}