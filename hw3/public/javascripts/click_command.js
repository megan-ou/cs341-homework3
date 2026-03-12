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

async function selection(month1) {
    $(".changemonth").text(month1);
	
	var my_month = {month : month1};

	var data = JSON.stringify(my_month);

	//Client-side post handling, use full url to access orders.js
	try {
        const response = await fetch('orders', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
			body : { data }
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
