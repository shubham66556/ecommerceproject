const path = require('path');

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
// const rootdir = require('../util/path');
const adminData = require('./admin');
router.get('/Contactus', adminController.getContact);



// router.get('/Contactus', (req, res, next) => {
//   res.sendFile(path.join(rootdir, 'views', 'Contactus.html'));
// });

router.post('/Contactus', adminController.postcontact);

module.exports = router;
