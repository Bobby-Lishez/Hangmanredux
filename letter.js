function Letter(char){
    this.letter = char.toLowerCase();
    this.hasBeenGuessed = false;
    this.reveal = function(){
        return (this.hasBeenGuessed) ? this.letter : "_";
    };
    this.guess = function(char) {
        if (char.toLowerCase() === this.letter){this.hasBeenGuessed = true;}
        return this.reveal();
    };
};

module.exports = Letter;

// var myGuess = process.argv[2];
// var correct = new Letter(process.argv[3]);
// console.log(correct.letter, correct.hasBeenGuessed);
// var output = correct.guess(myGuess);
// console.log(correct.letter, correct.hasBeenGuessed);
// console.log("This will show " + output);