// Rolando Velasco
// 01-17-2013
// Project 2 (Deliverable 1)
// Theme: Knights

// Set variables
var knightName = "Sir Lot";
var isEquipped = true;
var roomName = "King Arthur's \"Round Table\"";
var numOfArthurKnights = 7;
var numOfSeats = 12;
var willJoinArthurKnights = true;

// Procedure function in flow chart
// Check if the character has equipment and output appropriate message
var checkEquipment = function(haveEquipment) {
	if (haveEquipment === true) {
		console.log("I see that you brought your own equipment. As to be expected from a hero in training!");
	} else {
		console.log("Since you came without any equipment we will provide you with some armor, a sword and shield, to get accustomed to the weight.");
	};
	return;
};







// Main flow
console.log("Welcome, " + knightName + ", to the Heroes Training Camp.");
checkEquipment(isEquipped);