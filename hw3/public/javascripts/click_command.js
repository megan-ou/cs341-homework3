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

function selection(month) {
    $(".changemonth").text(month);
	
	//Client-side post handling, use full url to access orders.js
	$.post('http://localhost:3000/orders',
		function(data, status) {
			//Hard reset text fields with the json data
			//document.getElementById('plain').textContent = "Plain: " + data[0].quantity;
			//document.getElementById('cherry').textContent = "Cherry: " + data[1].quantity;
			//document.getElementById('chocolate').textContent = "Chocolate: " + data[2].quantity;

			document.getElementById('chocolate').textContent = String(data)
		},
	);
}
