var express = require('express');
var app = express();
var router = express.Router();

//hardcode json data
const orderList = [
    { topping: 'plain', quantity: 1 },
    { topping: 'cherry', quantity: 2 },
    { topping: 'chocolate', quantity: 3 }
];

/* GET order page. */
router.get('/', function(req, res, next) {
    //Create JSON list to be displayed.
    res.json(orderList);
});

//Handle post request
router.post('/', function(req, res, next) {
    //Send the order list
    res.json(orderList);
});

module.exports = router;