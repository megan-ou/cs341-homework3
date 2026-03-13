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

    var query = "SELECT month, t_id, topping, SUM(quantity) AS total_quantity FROM orders WHERE month = " + month +
        " GROUP BY month, t_id"

    console.log(query)

    dbms.dbquery(query, function(err,rows){
        if (err) {
            res.send('Bad bad things happened');
        } 
        else {
            //switch case idea from Josie Nuxoll, she helped me on my homework 
            //I created a null value column in the orders table 'topping' so I can assign value to it here       
            for(let i = 0; i < rows.length; i ++) {
                console.log(rows[i]);
                switch (rows[i].t_id) {
                    case 1:
                        rows[i].topping = "Plain";
                        break;
                    case 2:
                        rows[i].topping = "Vegan";
                        break;
                    case 3:
                        rows[i].topping = "Chocolate";
                        break;
                    case 4:
                        rows[i].topping = "Cherry";  
                        break;
                }
            }

            res.render('orders',{records: rows});
        }
    })
    
});

module.exports = router;