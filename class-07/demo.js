'use strict';

alert('Warning!!!');

function renderUsersName() {
    let usersName = prompt('What is your name?');
    if (usersName == '') {
        renderUsersName();
    }
    console.log('Hello ' + usersName);
    return document.write('Hello ' + usersName);
}

function usersAge() {
    let age = prompt('How old are you?');
    
    let message;
    if(age == ''){
        usersAge();
    } else if (age < 18) {
        message = 'You are a minor';
    } else if (age >= 18) {
        message = 'You are an adult';
    } else if (age >= 65) {
        message = 'You qualify for our senior discount';
    } else {
        message = 'That is not a valid entry. Please enter your age in numbers';
    }

    console.log(message);
    return document.write(message);
}

// ---------------------------------------------------------------------

// FUNCTIONS!!!

// Declaring a function means making a command/rule
// PARAMETERS - placeholder names for information the function will need to do its job
function addTwoWords(word1, word2){
    let sentence = word1 + word2;
    document.write(sentence);
    console.log(sentence);
    return sentence;
}

// invoking, or calling the function - actually using the function, actually making it execute
// ARGUMENTS - this actual information you want the function to use
addTwoWords('Hi', ' You are my best friend');
addTwoWords('Hello', 'Buddy');



