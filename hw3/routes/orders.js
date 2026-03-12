/**
 * CS341
 * JavaScript orders route for Cheesecake Order Form
 * Author: Megan Ou
 * Version: Feb. 2026
 */

var dbms = require("./dbms.js");
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
router.get('/', async(req, res, next) => {
    var query = "SELECT * FROM orders"
    dbms.dbquery(query, function(err,results){
        if (err) {
            res.send('Bad bad things happened');
        } 
        else {
            res.render('orders', {records: results});
        }
    })
});

//Handle post request
router.post('/', function(req, res, next) {
    var query = "SELECT month, SUM(quantity) AS total_quantity FROM orders WHERE month = " + month +
        " GROUP BY month"
    dbms.dbquery(query, function(err,rows){
        if (err) {
            res.send('Bad bad things happened');
        } 
        else {
            res.render('orders',{records: rows});
        }
    })
});

module.exports = router;