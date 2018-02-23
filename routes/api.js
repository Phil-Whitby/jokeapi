var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

  res.header('Content-Type', 'application/json');
  res.json(data);
});

router.post('/', function(req, res, next){
  console.log(req.body);
  data.push(req.body);
  res.send("we've received your POST request.");
});

router.put('/', function(req, res, next){
  console.log(req.body);
  for(var i = 0;i < data.length; i++) {
    // CHeck if ID matches PUT id
    if(data[i].id == req.body.id) {
      data[i] = req.body;
      //We've found our record, so stop the loop
      break;
    }
  }
  res.send("we've received your PUT request.");
});

router.delete('/', function(req, res, next){
  data.push(req.body);
  for(var i = 0;i < data.length; i++) {
    // CHeck if ID matches PUT id
    if(data[i].id == req.body.id) {
      data[i] = req.body;
      //We've found our record, so stop the loop
      break;
    }
  }
  res.send("we've received your DELETE request.");
});

module.exports = router;
var data = [{
  "id": 1,
  "first_name": "Ardra",
  "last_name": "Mathon",
  "email": "amathon0@drupal.org"
}, {
  "id": 2,
  "first_name": "Lian",
  "last_name": "Pechold",
  "email": "lpechold1@blinklist.com"
}, {
  "id": 3,
  "first_name": "Aland",
  "last_name": "Burr",
  "email": "aburr2@live.com"
}, {
  "id": 4,
  "first_name": "Aurelie",
  "last_name": "Doubleday",
  "email": "adoubleday3@intel.com"
}, {
  "id": 5,
  "first_name": "Sheff",
  "last_name": "De Caroli",
  "email": "sdecaroli4@ted.com"
}];
