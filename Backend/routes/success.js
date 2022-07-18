const path = require('path');
const adminController = require('../controllers/admin');
const express = require('express');
const router1 = express.Router();
const rootdir = require('../util/path');
// /admin/add-product => GET
router1.get('/success', adminController.successmessage)
// /admin/add-product => POST


module.exports = router1;
