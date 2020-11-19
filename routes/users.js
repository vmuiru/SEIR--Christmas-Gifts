const router = require('express').Router();
const usersCtrl = require('../controllers/users');

router.get('/users', usersCtrl.index);
router.post('/gifts',isLoggedIn, usersCtrl.addGift);
router.delete('/gifts/:id', isLoggedIn, usersCtrl.delGift);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;
