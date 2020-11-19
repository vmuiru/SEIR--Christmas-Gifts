const express = require('express');
const router = express.Router();
const storesCtrl = require('../controllers/stores');

router.get('/users/:id/stores/new', storesCtrl.new);
router.post('/users/:id/stores', storesCtrl.create);
module.exports = router;