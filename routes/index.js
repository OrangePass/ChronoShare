var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  sess = req.session;

	if(sess.email){
		res.render('index', {loggedin: true});
	}else{
	  res.render('index');
	}
});

module.exports = router;