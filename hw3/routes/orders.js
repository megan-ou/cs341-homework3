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
router.get('/', function(req, res, next) {
    //Create JSON list to be displayed.
    //res.json(orderList);
    dbms.dbquery('SELECT * FROM orders;', function(err,results){
        if (err) {
            res.send(err);
        } 
        else {
            res.json({topping: 'bullshit'});
            //res.json({records: results});
        }
    })
});

//Handle post request
router.post('/', function(req, res, next) {
    /** 
    dbms.dbquery('SELECT * FROM orders;', function(err,results){
        if (err) {
            res.send('Bad bad things happened');
        } 
        else {
            res.json({topping: 'bullshit'});
            //res.json({records: results});
        }
    })
    */
});

module.exports = router;