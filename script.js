// GLOBAL VARIABLES
let userChoiceRock = 0;
let userChoicePaper = 0;
let userChoiceScissors = 0;
let wins = 0;
let losses = 0;
let ties = 0;

// Allow user to input choice.
let userChoice;
function getUserChoice() {
    userChoice = prompt("Ready to play Rock, Paper, Scissors? \nPlease enter R (rock), P (paper), or S (scissors):");

    if (userChoice.toUpperCase() === "R") {
        alert("You picked rock!");
        userChoiceRock++;
    } else if (userChoice.toUpperCase() === "P"){
        alert("You picked paper!");
        userChoicePaper++; 
    } else if (userChoice.toUpperCase() === "S"){
        alert("You picked scissors!");
        userChoiceScissors++; 
    } else {
        alert("User entered invalid choice. \nRefresh the page and try again.");
    };
}

getUserChoice();

// Create a function to randomize computer's choice.
let computerChoice;
function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    computerChoice = arr[Math.floor(Math.random()*3)];
    alert(`Computer picked ${computerChoice}.`);
}

getComputerChoice();

// Compare user and computer's choices to determine winner.
function getWinner() {
    if (userChoice.toUpperCase() === "R"){
        if (computerChoice === "rock"){
            alert("It's a tie.");
            ties++;
        } else if (computerChoice === "paper"){
            alert("Computer wins.");
            losses++;
        } else {
            alert("You win!");
            wins++;
        }
    } else if (userChoice.toUpperCase() === "P"){
        if (computerChoice === "paper"){
            alert("It's a tie.");
            ties++;
        } else if (computerChoice === "scissors"){
            alert("Computer wins.");
            losses++;
        } else {
            alert("You win!");
            wins++;
        }
    } else {
        if (computerChoice === "scissors"){
            alert("It's a tie.");
            ties++;
        } else if (computerChoice === "rock"){
            alert("Computer wins.");
            losses++;
        } else {
            alert("You win!");
            wins++;
        } 
    };
};
getWinner();

// Show total wins, ties, losses.
// Show input choices.
function getResults(){
    alert(`Wins: ${wins}\nTies: ${ties}\nLosses: ${losses}`);
    alert(`Rock: ${userChoiceRock}\nPaper: ${userChoicePaper}\nScissors: ${userChoiceScissors}`);
}
getResults();
// Show replay button.
let replayChoice;
function replay(){
    replayChoice = confirm("Do you want to play again?");
    if (replayChoice){
        getUserChoice();
        getComputerChoice();
        getWinner();
        getResults();
    } else {
        alert("Thanks for playing! Come back soon.");
    }
};

do {
    replay(); 
} while (replayChoice)