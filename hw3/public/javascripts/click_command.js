/**
 * CS341
 * JavaScript click event handler for Cheesecake Order Form
 * Author: Megan Ou
 * Version: Feb. 2026
 */

orderHandler = function(click) {
    //extract value from user inputs
	let notes;
	notes = $("#notes").val();
	let quantity;
	quantity = $("#quantity").val();
	let toppings;
	toppings = $("input[type='radio'][name='topping']:checked").val(); 

	if(notes.includes("vegan") || notes.includes("Vegan")){
		//Checks for case-sensitive instance of vegan in the text
    		alert("Warning: Cannot process order. Cheesecake contains dairy!")
	} else {
		//hide order form and display details from input! 
		$("#hideable").hide();
		//Tried adding the class="text" tag to these so they would align on the page
		//	with the rest of the text in the css, but it would not work. 
		$("body").append("<h2>Thank you! Your order has been placed.<h2>")	
		$("body").append("<h3>Order Details: </h3>")
		$("body").append("<p>Order Quantity: " + quantity + "</p>")
		$("body").append("<p>Order Topping: " + toppings + "</p>")
		$("body").append("<p>Order Notes: " + notes + "</p>")

		//send the information in a post request, separated this into another function because it 
		// needs to be async.
		new_order(quantity, toppings, notes);
	}
}

async function new_order(quantity, toppings, notes) {
	//Convert topping into a number for t_id
	var t_id = -1;

	if (toppings == "Plain") {
		t_id = 1
	} else if (toppings == "Vegan") {
		t_id = 2;
	} else if (toppings == "Chocolate") {
		t_id = 3;
	} else if (toppings == "Cherry") {
		t_id = 4;
	}

	//Collect all of the user input information and issue a post request
	var my_order = {quantity : quantity, toppings: t_id, notes: notes};
	var jsonBody = JSON.stringify(my_order);

	console.log(jsonBody);

	//Client-side post handling, use full url to access orders.js
	try {
        const response = await fetch('new_order', {
            method: 'POST',
            headers: {
            	'Content-Type': 'application/json'
        	},
			body : jsonBody 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
    
        document.body.innerHTML = data;

    	} catch (error) {
        	//console.error('Error fetching data:', error);
    	}
}

$(function() {
    $("#order_button").click(orderHandler);
});

async function selection(month_str, month_int) {
    $(".changemonth").text(month_str);
	
	var my_month = {month : month_int};
	var jsonBody = JSON.stringify(my_month);

	console.log(jsonBody);

	//Client-side post handling, use full url to access orders.js
	try {
        const response = await fetch('orders', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
			body : jsonBody 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
    
        document.body.innerHTML = data;

    } catch (error) {
        //console.error('Error fetching data:', error);
    }
}
