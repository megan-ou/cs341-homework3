/**
 * CS341
 * JavaScript orders route for Cheesecake Order Form
 * Author: Megan Ou
 * Version: Mar. 2026
 */

const { concat } = require("async");
var dbms = require("./dbms.js");
var express = require('express');
var app = express();
var router = express.Router();

//Handle post request
router.post('/', function(req, res, next) {    
    //randomize month
    month = Math.floor(Math.random() * 12) + 1;
    //hardcode year
    year = 2026;
    //extract sent information
    quantity = req.body.quantity;
    notes = req.body.notes;
    t_id = req.body.toppings;

    var query = "INSERT INTO orders (t_id,quantity,notes,month,year) VALUES (" + t_id + "," + quantity + "," + notes + "," 
        + month + "," + year + ")"


    dbms.dbquery(query, function(err, rows){
        if (err) {
            res.send('Bad bad things happened');
        }
        else {
            console.log(rows);
        } 
    })
});

module.exports = router;
