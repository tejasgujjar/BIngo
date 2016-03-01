var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log('fs',fs);
	console.log("Going to open file!");
	fs.open('input.txt', 'r+', function(err, fd) {
	if (err) {
	   return console.error(err);
	}
		onsole.log("File opened successfully!");     
	});
  res.send('respond with a resource');
});

module.exports = router;
