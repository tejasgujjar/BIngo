var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/post/uri', function(req,res){
  	fs.appendFile('GeneratedNumber.txt', 'Number ' + req.body.number + ' : is ' + req.body.suggest + '\n', function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The file was saved!");
	});
});

module.exports = router;
