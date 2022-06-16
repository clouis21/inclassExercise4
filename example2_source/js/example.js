// Create variables for the welcome message
var greet = "Hello ";
var name = "Molly";
var message = ", please check your order:";
// Concatenate the three variables above to create the welcome message
var welcome =  greet + name + message;

// Create variables to hold details about the sign
var sign = "Welcome Home";
var tiles = sign.length.toString();
var subTotal = tiles*5; //$5 for each tile
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
var greet = document.getElementById("greeting");
// Replace the content of that element with the personalized welcome message
greet.textContent = welcome;

// Get the element that has an id of userSign then update its contents
var uSign = document.getElementById("userSign");
uSign.textContent = "Welcome Home";

// Get the element that has an id of tiles then update its contents
var uTiles = document.getElementById("tiles");
uTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var uSubTotal = document.getElementById("subTotal");
uSubTotal.textContent = "$"+subTotal;

// Get the element that has an id of shipping then update its contents
var uShipping = document.getElementById("shipping");
uShipping.textContent = "$"+shipping;

// Get the element that has an id of grandTotal then update its contents
var uGrandTotal = document.getElementById("grandTotal");
uGrandTotal.textContent = "$"+grandTotal;