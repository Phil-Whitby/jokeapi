var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
/* GET home page. */


router.post('/', function(req, res, next) {
  console.log(req.body);

  var string =
    "{ \"first_name\" :" + req.body.firstname + "," +  "\"last_name\" :" + "\"" + req.body.lastname + ","  + "\"email\" :" + req.body.email + "}," + '\n';

  fs.appendFile('contact.txt', string, function(err) {

    console.log('The "contact data" was appended to the file!');
    res.redirect('/');
  });

});

module.exports = router;
