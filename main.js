/*----- constants -----*/
const wordsWithHints = [
    { word: 'Variable', hint: 'A placeholder for data in coding' },
    { word: 'Array', hint: 'A data structure used to store an ordered "list" of data' },
    { word: 'Push', hint: 'Adds elements to an end of an array' },
    { word: 'Pop', hint: 'Removes a single element from the front of an array' },
    { word: 'Splice', hint: 'Capable of adding or removing any number of elements to or from an array' },
    { word: 'Function', hint: 'Reusable block of code written to perform a single purpose' },
    { word: 'Parameter', hint: 'Are placeholders when the function is defined that accepts data' },
    { word: 'Arguments', hint: 'Are data being passed to the function when the function is called' },
    { word: 'Pseudocode', hint: 'Outlines the apps logic using plain language' },
    { word: 'Wireframes', hint: 'Provides a blueprint for the HTML and CSS' },
    { word: 'forEach', hint: 'General purpose iterator method' },
    { word: 'Map', hint: 'Create a new array from a source array by replacing or transforming its elements' },
    { word: 'Filter', hint: 'Select certain elements from a source array' },
    { word: 'Find', hint: 'Finds an element within an array' },
    { word: 'FindIndex', hint: 'Finds an element within an array but returns the elements index' },
    { word: 'Some', hint: 'Checks if an array has atleast one element that meets a certain condition' },
    { word: 'Unshift', hint: 'Adds elements to the front of an array' },
    { word: 'Shift', hint: 'Removes a single element from the front of an array' },
    { word: 'Every', hint: 'Checks if every element in the array meets a certain condition' },
    { word: 'Classes', hint: 'Used to create objects' },
];
const imageList = [
    "astronauts/astro-6.png",
    "astronauts/astro-5.png", 
    "astronauts/astro-4.png", 
    "astronauts/astro-3.png", 
    "astronauts/astro-2.png", 
    "astronauts/astro-1.png", 
    "astronauts/astro-0.png", 
]

const MAX_INCORRECT_GUESSES = 6;

/*----- state variables -----*/
let currentImageIndex = 0;
let incorrectGuessesList = [];
let correctGuessesList = [];
let randomWordOriginalCase;
let randomWordLowerCase;

/*----- cached elements  -----*/
const notification = document.getElementById("notification");

/*----- event listeners -----*/
window.onload = main;
document.getElementById("enter-button").addEventListener("click", checkGuess);
document.getElementById("restart-button").addEventListener("click", function () {
    location.reload();
});
document.getElementById("letter-guess").addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        checkGuess(e);
    }
});

/*----- functions -----*/
function pickRandomWordAndSetHint() {
    const randomIndex = Math.floor(Math.random() * wordsWithHints.length);
    const randomWordWithHint = wordsWithHints[randomIndex];
    randomWordOriginalCase = randomWordWithHint.word;
    randomWordLowerCase = randomWordWithHint.word.toLowerCase();
    document.getElementById('word-display').textContent = '_'.repeat(randomWordWithHint.word.length);
    document.querySelector('#hint-box span').textContent = randomWordWithHint.hint;
}

function main() {
    pickRandomWordAndSetHint();
}
function checkGuess(e) {
    e.preventDefault();
    const letterInput = document.getElementById("letter-guess");
    const letter = document.getElementById("letter-guess").value.toLowerCase();
    notification.textContent = "";
    if (letter.length == 0 || !/^[a-z]$/.test(letter)) {
        notification.textContent = "You MUST enter a valid letter!";
        return;
    }
    if (incorrectGuessesList.includes(letter) || correctGuessesList.includes(letter)) {
        notification.textContent = "You have already tried this letter.";
        return;
    }
    if (randomWordLowerCase.includes(letter)) {
        successfulGuess(letter);
    } else {
        incorrectGuess(letter);
    }
    letterInput.value = "";
}

function successfulGuess(letter) {
    correctGuessesList.push(letter);
    notification.textContent = "Bingo! Good Guess"
    textContent = document.getElementById('word-display').textContent;
    newTextContent = "";
    for (let i = 0; i < randomWordLowerCase.length; i++) {
        if (randomWordLowerCase[i] == letter) {
            newTextContent += randomWordOriginalCase[i];
        } else {
            newTextContent += textContent[i];
        }
    }
    document.getElementById('word-display').textContent = newTextContent;
    if (!newTextContent.includes('_')) {
        endGame(true);
    }
}

function incorrectGuess(letter) {
    incorrectGuessesList.push(letter);
    notification.textContent = "Incorrect guess : " + letter;
    let incorrectGuessesSpan = document.querySelector("#incorrect-guesses span");
    incorrectGuessesSpan.textContent = incorrectGuessesList.join(', '); 
    if (incorrectGuessesList.length >= MAX_INCORRECT_GUESSES) {
        endGame(false);
    }
    currentImageIndex++;
    if (currentImageIndex >= imageList.length) {
        return;
    }
    document.getElementById("game-image").src = imageList[currentImageIndex];
}

function endGame(isWinner) {
    document.getElementById("letter-guess").disabled = true;
    document.getElementById("enter-button").disabled = true;
    if (isWinner) {
        notification.textContent = "Congratulations! You win!";
    } else {
        notification.textContent = "Game Over! The word was " + randomWordOriginalCase;
        document.getElementById("letter-guess").disabled = true;
        document.getElementById("enter-button").disabled = true;
    }
}
