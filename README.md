# springhill-code-102n2

# Class 06
## Agenda:
- Review of previous class
  - Share your learning
- JavaScript
  - Recap from Code 101
  - Discussion Exercise
- From Mockup to Markup
  - Demo: Input and Output
  - Lab: Plan and Build

## New Vocabulary:
- JavaScript
- conditionals
- operators: 
- data types: 
- variable:
- console: A tool or interface that allows you to interact with a program or programming environment. It provides a way to display output, receive input, and execute commands or code snippets. The most common type of console you'll encounter is a developer console or browser console. It's a feature built into web browsers that allows developers to monitor and debug their web applications.

## Learning Goals:
- Now that we've discussed that JavaScript is the interactive and dynamic piece of a web page...
- Learn to use JavaScript to collect and respond to user input and implement basic conditionals to determine the outcome of content on a web page.

## Input and Output: Today we're going to learn one way we can collect user input, and a few ways we can use input to determine and produce output.

1. What are some real world applications of a website collecting user input, and using it to determine and produce an output?
  - Social media bio
  - Creating an account/logging in
  - Social media age limits
  - Quiz, whether or not answer checked is correct and how it affects a score
  
Today were going to use the following concepts to collect input and produce output, definitions are included in Replit.
- conditionals
- operators
- data types
- variable
- console.log
- document.write

** - Input: Use prompt to grab some input from the user (Name, hour age?)**
** - Processing: (in this case, conditional generation of dynamic content). Using the input, show an if else block.**
** - Output: Show students document.write. Show alternative method of output: console.log()**

## What user input do we want to collect from the user? Let's display that information with a message.
## Now let's use some new user input to determine an output. Some examples we could use are asking the time or the user's age and displaying a different message based on their answer
,
```
let username = prompt('What is your name?');
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
    message = "Good Evening!";
} else {
    message = "That hour does not exist!";
}

document.write('Hello ' + username + '! ' + message);
```

## How number comparison works in time function:
JavaScript feature called "type coercion". Automatically converts values between different data types in certain situations. In this case, it compares the string input with numbers using comparison operators like <= or <, JavaScript tries to be helpful and converts the string to a number before making the comparison.

Be careful with type coercion because it can sometimes lead to unexpected behavior or bugs. That's why it's generally recommended to explicitly convert user input to the desired type. But for now this serves our purpose.

## Structure

- WHY, what's the question or problem? In English...
- WHAT, What is the solution or concepts we're going to use? In English..
- HOW, What does this look like in code, how do we build it? In code...

- Scale of 1-5. Have someone who gets it explain.
- Gallery view
- Call on students in order

