const User = require('../models/user');
const Store = require('../models/store');

module.exports = {
  index,
  addGift,
  delGift, 
  show,
  new: newGift
};

function index(req, res) {
  User.find({}, function(err, users) {
    res.render('users/index', { 
      users,
    user: req.user
   });
  });
}

function newGift(req, res) {
  res.render('users/new');
}

function addGift(req, res) {
  req.user.gifts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/users');
  });
}

function show(req, res) {
    User.findById(req.params.id, function(err, users) {
      console.log(users);
      Store.find({}, function(err, stores) {
      res.render('users/show', { users, stores });
    });
  });
}

function delGift(req, res) {

}
