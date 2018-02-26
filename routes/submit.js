var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
/* GET home page. */


router.post('/', function(req, res, next) {
  console.log(req.body);
  var formsubmit = {
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email
  };
  fs.readFile(path.join(__dirname, '../contact.txt'),function(err, data){
    var jsonparse =  JSON.parse(data);
    jsonparse.push(formsubmit);
    var jsonstringify = JSON.stringify(jsonparse);

    fs.writeFile('contact.txt', jsonstringify, function(err) {
      res.redirect('/');
    });
  });
});

module.exports = router;
