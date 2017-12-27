var express = require('express');
var router = express.Router();
var login_controller = require('../controllers/loginController');
var register_controller = require('../controllers/registerController');
/* GET home page. */
router.get('/', function(req,res){
  res.render('index',{title:'EXPRESSJS'});
});
router.get('/register',register_controller.get_register);
router.post('/register',register_controller.post_register);

router.get('/login',login_controller.get_login);
router.post('/login',login_controller.post_login);

module.exports = router;
