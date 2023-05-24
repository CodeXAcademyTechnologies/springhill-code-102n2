# springhill-code-102n2

# Class 06

## Learning Goals:
- Learn to incorporate JavaScript into a web page to create dynamic content that responds to input.
- Learn to replicate code that uses logical branching and basic conditionals to determine the outcome of content on a web page.

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

JavaScript: What does a web site DO, while you are using it?

## Input and Output: Today we're going to learn one way we can collect user input, and a few ways we can use input to determine and produce output.

1. What are some real world applications of a website collecting user input, and using it to determine and produce an output?
  - Social media bio
  - Creating an account/logging in
  - Social media age limits
  - Quiz, whether or not answer checked is correct and how it affects a score
  
Today were going to use the following concepts to collect input and produce output, definitions are included in Replit.
- conditionals
- operators: assignment operator, comparison operators
- data types: show with typeof
- variable: show with console.log
- console.log
- document.write

Input: Use prompt to grab some input from the user (Name, hour age?)
Processing: (in this case, conditional generation of dynamic content). Using the input, show an if else block.
Output: Show students document.write. Show alternative method of output: console.log()

JavaScript has a feature called "type coercion" which means it can automatically convert values between different types in certain situations. In this case, when you compare the string input with numbers using comparison operators like <= or <, JavaScript tries to be helpful and converts the string to a number before making the comparison.

For example, let's say you enter "10" as the time. JavaScript sees that you're comparing it to a number, so it tries to convert it to a number. Since "10" can be understood as the number 10, JavaScript goes ahead and performs the comparison.

So when the code compares time <= 11, JavaScript converts the string "10" to the number 10, and since 10 is less than or equal to 11, it considers the condition as true. That's why the code assigns the corresponding message for "Good Morning!"

However, it's important to be careful with type coercion because it can sometimes lead to unexpected behavior or bugs. That's why it's generally recommended to explicitly convert user input to the desired type, like converting the string to a number using parseInt, before performing comparisons. This helps to ensure that the comparison is done accurately and gives you the results you expect.

- WHY, what's the question or problem? In English...
- WHAT, What is the solution or concepts we're going to use? In English..
- HOW, What does this look like in code, how do we build it? In code...

- Scale of 1-5. Have someone who gets it explain.
- Gallery view
- Call on students in order

Hone in on operator knowledge
