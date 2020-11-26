const User = require('../models/user');
const Store = require('../models/store');
const Gifts = require('./gifts');
const gifts = require('./gifts');
const user = require('../models/user');

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
  let gifts;
  let storeList = []
    User.findById(req.user.id, function(err, users) {
      users.gifts.forEach(function(gift) {
        if (gift.id === req.params.id) {
          gifts = gift 
        }else{
          console.log(gift);
        }
      })
        Store.find({}, function(err, stores) {
          gifts.storeIds.forEach(function(id) {
           stores.forEach(function(s) {
            console.log(`store: ${s}` + `id: ${id}`);
             if(id == s._id) {
               storeList.push(s)
               console.log(s); 
             } else {
               console.log(storeList)
             }
           })
          })
          res.render('users/show', 
          { users, storeList, gifts });
    });
  });
}

function delGift(req, res) {
  User.findByIdAndDelete(req.user.id, function(err, user) {
    if(err){console.log(err)}
    else{console.log(gifts)}
  }),
  res.redirect('/users');
}

