// Rolando Velasco
// 01-17-2013
// Project 2 (Deliverable 1)
// Theme: Knights

// Set variables
var knightName = "Sir Lot";
var knightTrait = "Cunning";
var isEquipped = true;
var wishToJoinArthurKnights = true;
var curiousAboutJoiningArthurKnights = true;
var daysToTrain = 4;
var numOfArthurKnights = 7;
var numOfSeats = 12;
var ArthurKnightsNames = [];

// Procedure function in flow chart
// Check if the character has equipment and output the appropriate message
var checkEquipment = function(haveEquipment) {
	if (haveEquipment === true) {
		console.log("I see that you brought your own equipment. As to be expected from a hero in training!");
	} else {
		console.log("Since you came without any equipment we will provide you with some armor, a sword and shield, to get accustomed to the weight.");
	};
	return;
};

// Boolean function in flow chart
// Take two arguments, do a comparison conditional and output the appropriate message
var canJoinArthurKnights = function(join, curious) {

	// check if seats are available
	var seatAvailable;
	if (numOfArthurKnights < numOfSeats) {
		seatAvailable = true;
	} else {
		seatAvaiable = false;
	};
	
	// comparison conditional
	if ( seatAvailable === true && (join === true || curious === true) ) {
		console.log ("You're in luck!  The Round Table has room for a knight of your caliber.  And since you wish to be here, now is the perfect opportunity to test your skills.");
		return true;
	} else {
		console.log ("Though it seems this is not the right time for you, consider this more of an educational experience.");
		return false;
	};
};

// Number function in flow chart
// Take a number as the argument, enter a while loop and do some math and outputs, then return a number.
var training = function(days) {
	var strength = 0;
	var daysPassed = 0;
	var daysLeft = days;
	while (daysPassed < days) {
	strength = strength + 3;
	daysLeft = daysLeft - 1;
	daysPassed = daysPassed + 1;
	console.log("You have trained for " + daysPassed + " day(s).  Your strength has improved!  You have only " + daysLeft + " day(s) left.");
	};
	return strength;
};

// String function in flow chart
// Take two strings as arguments and do some string concatenation, then return the string.
var knightTitle = function (name, trait) {
	var title = "";
	title = name + ", the " + trait;
	return title;
}



// Main code
console.log("Welcome, " + knightName + ", to the Heroes Training Camp.");
checkEquipment(isEquipped);
var willJoinArthurKnights = canJoinArthurKnights(wishToJoinArthurKnights, curiousAboutJoiningArthurKnights);
console.log("You will be given " + daysToTrain + " days to train here.  Training begins now!");
var newStrength = training(daysToTrain);
var newTitle = knightTitle(knightName, knightTrait);
