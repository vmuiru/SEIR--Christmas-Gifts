const User = require('../models/user');
const Store = require('../models/store');
const Gifts = require('./gifts');

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
  res.render('users/new'
  )};

function addGift(req, res) {
  req.user.gifts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/users');
  });
}


function show(req, res) {
  User.findById(req.user.id).populate({path:'gifts', populate:{path:'storeIds'}}).exec(function(err, user) {
      let currentGift;
      user.gifts.forEach(function(gift) {
        if(gift._id == req.params.id) {
          currentGift = gift
          console.log(`current gift:${currentGift}`);
        }else{
          console.log(gift)
        } 
      });
      res.render('users/show', { user, currentGift });
  })
}






  

function delGift(req, res) {
  User.findByIdAndDelete(req.user.id, function(err, user) {
    if(err){console.log(err)}
    else{console.log(gifts)}
  }),
  res.redirect('/users');
}

