var inquirer = require("inquirer");
var Word = require("./word.js");

var words = ["congratulate", "telephone", "outlast", "fundamentals", "longitude", "antifreeze", "hangman"];

function playTheGame() {
var lives = 6;
var theAnswer = new Word(words[Math.floor(Math.random() * words.length)]);
var goal = theAnswer.solved;
function guessLetter(){
    var lastGuess = theAnswer.toString();
    console.log(lastGuess);
    console.log("Lives remaining: " + lives);
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a Letter: "
        }
    ]).then(function(answers){
        theAnswer.assess(answers.guess);
        if(theAnswer.toString() === lastGuess) {lives --;}
        if (theAnswer.toString() === goal) {
            console.log("You Win!");
            playAgain();
        }
        else if (lives < 1) {
            console.log("Game over");
            playAgain();
        }
        else{guessLetter()};
    })
}
function playAgain() {
    inquirer.prompt([
        {
            name: "again",
            type: "list",
            message: "Would you like to play again?",
            choices: ["Yes", "No"]
        }
    ]).then(function(answers){
        if (answers.again === "Yes"){
            playTheGame();
        }
        else {
            console.log("goodbye");
        }
    });
}
guessLetter();
}

playTheGame();