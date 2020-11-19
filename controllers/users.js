const User = require('../models/user');
const Store = require('../models/store');

module.exports = {
  index,
  addGift,
  delGift, 
  show
};

function index(req, res) {
  User.find({}, function(err, users) {
    res.render('users/index', { 
      users,
    user: req.user
   });
  });
}

function addGift(req, res) {
    console.log(req.body);
  req.user.gifts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/users');
  });
}

function show(req, res) {
    User.findById(req.params.id, function(err, users) {
      Store.find({user: users._id}, function(err, users) {
      res.render('users/show', { users, stores });
    });
    });
  }

function delGift(req, res) {

}
