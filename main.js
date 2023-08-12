/*----- constants -----*/
const wordsWithHints = [
    {word: 'Variable', hint: 'A placeholder for data in coding'},
    {word: 'Array', hint: 'A data structure used to store an ordered "list" of data'},
    {word: 'Push', hint: 'Adds elements to an end of an array'},
    {word: 'Pop', hint: 'Removes a single element from the front of an array'},
    {word: 'Splice', hint: 'Capable of adding or removing any number of elements to or from an array'},
    {word: 'Function', hint: 'Reusable block of code written to perform a single purpose'},
    {word: 'Parameter', hint: 'Are placeholders when the function is defined that accepts data'},
    {word: 'Arguments', hint: 'Are data being passed to the function when the function is called'},
    {word: 'Pseudocode', hint: 'Outlines the apps logic using plain language'},
    {word: 'Wireframes', hint: 'Provides a blueprint for the HTML and CSS'},
    {word: 'forEach', hint: 'General purpose iterator method'},
    {word: 'Map', hint: 'Create a new array from a source array by replacing or transforming its elements'},
    {word: 'Filter', hint: 'Select certain elements from a source array'},
    {word: 'Find', hint: 'Finds an element within an array'},
    {word: 'FindIndex', hint: 'Finds an element within an array but returns the elements index'},
    {word: 'Some', hint: 'Checks if an array has atleast one elemnt that meets a certain condition'},
    {word: 'Unshift', hint: 'Adds elements to the front of an array'},
    {word: 'Shift', hint: 'Removes a single element from the front of an array'},
    {word: 'Every', hint: 'Checks if every element in the array meets a certain condition'},
    {word: 'Classes', hint: 'Used to create objects'},
];

/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

// Function to pick a random word and set the associated hint
function pickRandomWordAndSetHint() {
    // Pick a random word with hint
    const randomIndex = Math.floor(Math.random() * wordsWithHints.length);
    const randomWordWithHint = wordsWithHints[randomIndex];
    // Set the word display with underscores 
    document.getElementById('word-display').textContent = '_ '.repeat(randomWordWithHint.word.length);

    // Set the associated hint in the hint-box
    document.querySelector('#hint-box span').textContent = randomWordWithHint.hint;
}

// Call the function to set the word and hint on page load
window.onload = pickRandomWordAndSetHint;
