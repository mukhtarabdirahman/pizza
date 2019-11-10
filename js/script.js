// Pizza Constructor
function Pizza(size,crust,toppings){
	this.size = size;
	this.crust = crust;
	this.toppings = toppings;
};
// Variables for storing HTML DOM elements
let sizeSelector = document.getElementById("size-selector");
let sizePrice = 0;
let crustSelector = document.getElementById("crust-selector");
let crustPrice = 0;
let allToppings = document.forms[2];
let toppingsTotal = 0;
let orderContainer = document.getElementById("order");
let cartContainer = document.getElementById("cart");
let sizeName = "";
let crustName = "";
let toppingsName = [];

