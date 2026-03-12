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
	}
}

$(function() {
    $("#order_button").click(orderHandler);
});

async function selection(month) {
    $(".changemonth").text(month);

	//change month into a number for the query
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
	
	//Client-side post handling, use full url to access orders.js
	try {
        const response = await fetch('orders', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
			month : month_num
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
