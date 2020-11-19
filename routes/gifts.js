const express = require('express');
const router = express.Router();
const giftsCtrl = require('../controllers/gifts');

router.post('/users/:id/gifts', giftsCtrl.create);

module.exports = router;
