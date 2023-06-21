'use strict';

// Loops and Operators Notes

alert('Warning!!!');

function renderUsersName() {
    let usersName = prompt('What is your name?');
    if (usersName == '') {
        renderUsersName();
    }
    console.log('Hello ' + usersName);
    return document.write('Hello ' + usersName);
}

function guessANumber(){
    let answer;

    while (answer != 24) {
        answer = prompt('Guess a number between 1-50');
        if (answer != 24) {
            alert('Try again!');
        } else {
            alert('You are correct');
        }
    }
}

guessANumber();

function displayRating() {
    let output = '';
    let rating = prompt('Rate my page on a scale of 1-5');
    for(let i = 0; i < rating; i++){
        output += "<img class='star' src='https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' />";
    }
    return document.write(output);
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





