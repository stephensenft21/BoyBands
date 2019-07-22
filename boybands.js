var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = "";
var currentBand = "";
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");


// Start looping
for (var loopTracker = 0; loopTracker < bands.length; loopTracker += 1) {
  var currentBand = `<div>${bands[loopTracker]}</div>`
  bandElement.innerHTML += currentBand;

}

for (var loopTracker = 0; loopTracker < vegetables.length; loopTracker += 1) {
  var currentVeggie = `<div>${vegetables[loopTracker]}</div>`
  veggieElement.innerHTML += currentVeggie;
 
}
console.log(bands,vegetables)

