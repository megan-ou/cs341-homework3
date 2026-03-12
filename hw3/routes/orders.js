/**
 * CS341
 * JavaScript orders route for Cheesecake Order Form
 * Author: Megan Ou
 * Version: Feb. 2026
 */

const { concat } = require("async");
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
    //change month into a number for the query
    month = req.body.month;

    console.log(month);

    /** 
    var month_num = -1;

    if (month = "Jan") {
        month_num = 1;
    } else if (month = "Feb") {
        month_num = 2;
    } else if (month = "Mar") {
        month_num = 3;
    } else if (month = "Apr") {
        month_num = 4;
    } else if (month = "May") {
        month_num = 5;
    } else if (month = "Jun") {
        month_num = 6;
    } else if (month = "Jul") {
        month_num = 7;
    } else if (month = "Aug") {
        month_num = 8;
    } else if (month = "Sep") {
        month_num = 9;
    } else if (month = "Oct") {
        month_num = 10;
    } else if (month = "Nov") {
        month_num = 11;
    } else if (month = "Dec") {
        month_num = 12;
    }

    var query = "SELECT month, SUM(quantity) AS total_quantity FROM orders WHERE month = " + month_num +
        " GROUP BY month"
    dbms.dbquery(query, function(err,rows){
        if (err) {
            res.send('Bad bad things happened');
        } 
        else {
            res.render('orders',{records: rows});
        }
    })
    */
});

module.exports = router;