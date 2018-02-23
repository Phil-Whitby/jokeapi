var express = require('express');
var router = express.Router();

var items = [{
  "id": 1,
  "joke": "What is Benoit B. Mandelbrot's middle name?",

}, {
  "id": 2,
  "joke": "Benoit B. Mandelbrot",

},
];
/* GET home page. */
router.get('/', function(req, res, next) {

  res.header('Content-Type', 'application/json');
  res.json(items);
});

router.post('/', function(req, res, next){
  console.log(req.body);
  items.push(req.body);
  res.send("we've received your POST request.");
});

router.put('/', function(req, res, next){
  console.log(req.body);
  for(var i = 0;i < items.length; i++) {
    // CHeck if ID matches PUT id
    if(items[i].id == req.body.id) {
      items[i] = req.body;
      //We've found our record, so stop the loop
      break;
    }
  }

  res.send("we've received your PUT request.");
});
module.exports = router;
