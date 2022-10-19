/* Battle Game Project 10/17/22 */

// add an event listener to the button element
document.getElementById("start").addEventListener("click", trollBattle);

// definition of the trollBattle() function
function trollBattle() {
	// clear any old messages in the docuemnt from the previous games
	document.getElementById("result").innerHTML = "";
	document.getElementById("death").innerHTML = "";

	// initial prompt user for the user that gets stored in a variable
	let action = window.prompt("You're walking through the forrest minding your own business and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll").toUpperCase();

	// switch statement to handle the player's initial choice
	switch(action) {
		case "FIGHT": {
			fightTroll();
			break;
		} // end of case FIGHT

		case "RUN": {
			runTroll();
			break;
		} // end of case RUN

		case "BRIBE": {
			bribeTroll();
			break;
		} // end of case BRIBE

		default: {
			// the user has not entered a valid choice at the original prompt
			window.alert("You entered: " + action + ". That is not a valid choice! Please try again!");
			// run the trollBattle() function again from the beginning
			trollBattle();
			break;
		} // end of default case

	} // end of switch statement

} // end of trollBattle() function

// definition of the fightTroll() function
function fightTroll() {
	let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
	let strong = window.prompt("Are you stronger than a troll? (YES or NO)").toUpperCase();

	// if statement that analyzes the user responses
	if(skill === "YES" || strong === "YES") {
		// the user said yes to at least one of the prompts
		document.getElementById("result").innerHTML = "You can either be more skilled or stronger than a troll to survive!<br/>You live another day!<br/><img src='troll_win.png' alt='The Troll is Sad'/>";
		document.getElementById("win").play();
		document.getElementById("start").innerHTML = "Play Again?";
	} else {
		// the user said no to both prompts
		document.getElementById("death").innerHTML = "You are not skilled or strong? Why did you fight a troll?<br/>You have died!<br/><img src='troll_lose.png'/>"
		document.getElementById("lose").play();
		document.getElementById("start").innerHTML = "Play Again?";
	}
} // end of fightTroll() function

// definition of the runTroll() function
function runTroll() {
	let fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
	if(fast === "YES") {
		document.getElementById("result").innerHTML = "Your speed has saved you!<br/>But can you live with your cowardice?<br/><img src='troll_win.png' alt='The Troll is Sad'/>";
		document.getElementById("win").play();
		document.getElementById("start").innerHTML = "Play Again?";
	} else {
		document.getElementById("death").innerHTML = "If you're going to run, at least be fast!<br/>You have died!<br/><img src='troll_lose.png' alt='The Troll is Happy'/>";
		document.getElementById("lose").play();
		document.getElementById("start").innerHTML = "Play Again?";
	}

} // end of runTroll() function

// definition of the bribeTroll()
function bribeTroll() {
	let  money = window.prompt("You have to pay the troll-toll.\nDo you have any money? (YES or NO)").toUpperCase();
	if(money === "YES") {
		// now ask if they have the correct amount
		let amount = window.prompt("How much money do you have?\nPlease enter NUMERIC VALUE.");
		// try to convert the input to an integer value
		amount = parseInt(amount);
		// check the amount agaisnt our condition
		if(amount >= 50) {
			document.getElementById("result").innerHTML = "Great job! The troll is happy!<br/>You may pass!<br/><img src='troll_win.png' alt='The Troll is Satisfied'/>";
			document.getElementById("win").play();
			document.getElementById("start").innerHTML = "Play Again?";
		} else {
			// user had money, just not enough
			document.getElementById("death").innerHTML = "The troll needs more money than that!<br/> You have died!<br/><img src='troll_lose.png' alt='The Troll is Happy'/>";
			document.getElementById("lose").play();
			document.getElementById("start").innerHTML = "Play Again?";
		}
	} else {
		// user said NO to having money
		document.getElementById("death").innerHTML = "What were you planning to bribe the troll with?<br/>You have died!<br/><img src='troll_lose.png' alt='The Troll is Happy'/>";
		document.getElementById("lose").play();
		document.getElementById("start").innerHTML = "Play Again?";
	}
} // end of bribeTroll() function