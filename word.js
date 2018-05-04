var Letter = require("./letter.js");

function Word(word) {
    this.wordArray = word.split("").map(i => new Letter(i));
    this.solved = word.split("").join(" ");
    this.toString = function() {
        var myString = "";
        for (var i = 0; i< this.wordArray.length; i++){
            myString += this.wordArray[i].reveal();
            if (i < this.wordArray.length - 1) {
                myString += " ";
            }
        }
        return myString;
    } 
    this.assess = function(myGuess) {
        this.wordArray.map(k => k.guess(myGuess));
    }
}

module.exports = Word;
// var myWord = new Word(process.argv[2]);
// console.log("Before guess: " + myWord.toString());
// myWord.assess(process.argv[3]);
// console.log("After Guess: " + myWord.toString());
// console.log(myWord.wordArray[0]);
// console.log("shows as " + myWord.wordArray[0].reveal());
