```
let username = prompt('What is your name?');
document.write('Hello, ' + username);
console.log('Hello, ' + username);

console.log(typeof(username));

let time = prompt('What hour is it? (0-23)');
let message;

console.log(typeof(time));

if(time <= 11){
    message = 'Good Morning!';
} else if (time <= 18){
    message = 'Good Afternoon!';
}  else if(time < 24){
    message = 'Good Evening!';
} else {
    message = 'That hour does not exist!';
}

document.write('Hello ' + username + '! ' + message);
```
