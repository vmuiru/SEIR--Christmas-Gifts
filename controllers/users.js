const User = require('../models/user');

module.exports = {
  index,
  addGift,
  delGift
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
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/users');
  });
}

function delGift(req, res) {

}
