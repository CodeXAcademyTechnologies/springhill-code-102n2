'use strict';

alert('Warning!!!');

let usersName = prompt('What is your name?');
console.log('Hello ' + usersName);
document.write('Hello ' + usersName);

let age = prompt('How old are you?');
console.log(typeof(age));

let message;

if (age < 18) {
    message = 'You are a minor';
} else if (age >= 18) {
    message = 'You are an adult';
} else if (age >= 65) {
    message = 'You qualify for our senior discount';
} else {
    message = 'That is not a valid entry. Please enter your age in numbers';
}

console.log(typeof(message));

console.log(message);
document.write(message);

// Data Types:
// String = '42'. Every character has its own place
// Number = 42
// Boolean = true or false
