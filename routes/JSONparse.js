var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
/* GET home page. */


var obj = JSON.parse(path.join(__dirname, '../contact.txt'));

console.log(obj);

module.exports = router;
