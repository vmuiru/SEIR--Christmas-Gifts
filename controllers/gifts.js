//const Gift = require('../models/gift')
const User = require('../models/user');

function newGift(req, res) {
    const userId = req.params.id
        res.render('users/new', {
            title: 'Add Gift',
            userId
           // gifts
        });
}

function create(req, res){
    User.findById(req.params.id, function(err, user) {
        user.gifts.push(req.body)
        user.save(function(err) {
            res.redirect(`/users/${user._id}`)
        })
    })
}

module.exports = {
    new: newGift,
    create
}


