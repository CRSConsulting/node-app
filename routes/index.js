var express = require('express');
var router = express.Router();
const mobileService = require('../mobile/mobile.service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express HELLO' });
});



router.get('/mobiles', (req, res) => {
  mobileService.getManyObjs(req, res);
});

router.post('/mobile', (req, res) => {
  mobileService.insertManyObjs(req, res)
  
});

module.exports = router;
