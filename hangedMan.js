// Hello there, my name is Eyal and this is my solution.
// I only passed JavaScript code here as Mordi answered my question in the email.
// I used a while loop in this solution in order for the program to start being executed and continue as long as the user has not lost all of his guesses or has not discovered the word.
// I used one function that receives input value from the user and checks if it is valid and changes the variables according to the instructions.
// At the beginning of the code you can see that I used an external npm in order to get a nice title and that I could use "prompt" in nodeJS.


const prompt = require('prompt-sync')(); // Getting user input using prompt-sync
var figlet = require('figlet'); // Getting an elegant welcome message using figlet

console.log(figlet.textSync('HANGED MAN', {
    font: 'Bell',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));


// The function gets input value from the user, checks if it is valid, and changes the variables if necessary.
const getUserGuess = (userGuess) => {
    if(userGuess.length != 1){
        console.log('Pleas enter only one character');
    }else if(!userGuess.match(/[a-z]/g)){
        console.log('Pleas enter only letters');
    }else{
        var counterCurrentGuesses = 0;
        for(i=0; i < roundWord.length; i++){
            if(userGuess == roundWord.charAt(i)){
                    counterCurrentGuesses ++;
                    if(!positionAllGuesses.includes(i)){
                        positionAllGuesses.push(i);
                    }
                }
            }
        
        if(counterCurrentGuesses == 0){
            console.log('Ther is no '+userGuess+' in the word');
            guesses--;
        }else{
            console.log('Ther is '+counterCurrentGuesses+' '+userGuess+' in the word');
            secWord = '';
            for(l = 0; l < roundWord.length; l++){
                if(positionAllGuesses.includes(l)){
                    secWord += roundWord.charAt(l);
                }else{
                    secWord += '*';
                }
            }
        }
    }
}

// Announcement of variables
const wordsStock = ['lion','cow','tiger','bird','horse','mouse','elephant','duck','cat','dog','banana','orange','apple','melon','pear','cucumber','tomato','onion','grape'];
const roundWord = wordsStock[Math.floor(Math.random() * wordsStock.length)];

var secWord = roundWord.replace(/[a-z]/gi,'*');
var guesses = 10;
var positionAllGuesses = [];


// The interaction with the user
do{
    console.log('You have '+guesses+' guesses');
    console.log('The word is:');
    console.log(secWord);
    console.log('What is your guess?');
    var userGuess = prompt();
    userGuess = userGuess.toLowerCase();
    getUserGuess(userGuess);
}while(guesses > 0 && positionAllGuesses.length < roundWord.length);

// I gave here the last chance to guess the whole word even though I was not asked in the task instructions.
if(guesses == 0){
    console.log('The guesswork is over');
    console.log('Try to guess the whole word');
    var wholeGuess = prompt();
    if(wholeGuess == roundWord){
        console.log('You are righe! bravo');
    }else{
        console.log('You were wrong');
        console.log('The word is: '+roundWord);
    }
}

if(positionAllGuesses.length == roundWord.length){
    console.log('The word is:');
    console.log(secWord);
    console.log('You succeeded!');
}

console.log('Thank you and goodbye');