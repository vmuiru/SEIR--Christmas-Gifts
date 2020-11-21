const express = require('express');
const router = express.Router();
const giftsCtrl = require('../controllers/gifts');

router.post('/gifts/:id/stores', giftsCtrl.create);
router.get('/users/:id/new', giftsCtrl.new);

module.exports = router;
