#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1: What is a structural type in TypeScript?",
        choices: ["A type based on the structure of an object rather than its name", "A type that can only hold numbers", "A type that restricts the structure of a class.", "A type that enforces specific functions on an object."]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2: Which of the following logical operators is used to represent AND in most programing languages?",
        choices: ["||b", "&&", "!d", "|"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3: What is the result of the expression (true || false) && !false?",
        choices: ["true", "false", "syntax error", "npne of the above"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4:If you have array int[] values = {10 , 20 , 30 , 40 , 50}, what is the index of the element with value 40? ",
        choices: ["2", "3", "4", "5"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5: Which method of Inquire.js is used to start the prompt interface and receive user input?",
        choices: ["start()", "prompt()", "init()", "run()"]
    },
    {
        name: "question_6",
        type: "list",
        message: "Q6: Which keyword in TypeScript is used to create a constant variable? ",
        choices: ["let", "var", "const", "static"]
    },
    {
        name: "question_7",
        type: "list",
        message: "Q7: How do you declare an explicit type for a variable in TypeScript?",
        choices: ["let riavableName: tye = valuep;", " variableName = value as type;", "let variableName = type: value;", " variableName: let type = value;"]
    },
    {
        name: "question_8",
        type: "list",
        message: "Q8: What does the intersection type operator do in TypeScript? ",
        choices: ["Combines multiple types into one.", " Defines a union of multiple types.", "Checks if a valuebelongs to one of the types.", "Extracts common properties from multiple types."]
    },
    {
        name: "question_9",
        type: "list",
        message: "Q9: Which of the Typescript data types represents a collection of element ;of the same type? ",
        choices: [" Array;", " object;", "Tuples", "Function"]
    },
    {
        name: "question_10",
        type: "list",
        message: "Q1: What is the correct way to check if two values are not equal in typescript?",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "A type based on the structure of an object rather than its name":
        console.log("1.correct!");
        ++score;
        break;
    default:
        console.log("1.Incorrect!");
}
switch (quiz.question_2) {
    case "&&":
        console.log("2.correct!");
        ++score;
        break;
    default:
        console.log("2.Incorrect!");
}
switch (quiz.question_3) {
    case "true":
        console.log("3.correct!");
        ++score;
        break;
    default:
        console.log("3.Incorrect!");
}
switch (quiz.question_4) {
    case "3":
        console.log("4.correct!");
        ++score;
        break;
    default:
        console.log("4.Incorrect!");
}
switch (quiz.question_5) {
    case "prompt()":
        console.log("5.correct!");
        ++score;
        break;
    default:
        console.log("5.Incorrect!");
}
switch (quiz.question_6) {
    case "const":
        console.log("6.correct!");
        ++score;
        break;
    default:
        console.log("6.Incorrect!");
}
switch (quiz.question_7) {
    case "let variableName: type = value;":
        console.log("7.correct!");
        ++score;
        break;
    default:
        console.log("7.Incorrect!");
}
switch (quiz.question_8) {
    case "Combine multiple types into one":
        console.log("8.correct!");
        ++score;
        break;
    default:
        console.log("8.Incorrect!");
}
switch (quiz.question_9) {
    case "Array":
        console.log("9.correct!");
        ++score;
        break;
    default:
        console.log("9.Incorrect!");
}
switch (quiz.question_10) {
    case "a !== b":
        console.log("10.correct!");
        ++score;
        break;
    default:
        console.log("10.Incorrect!");
}
console.log(`Score: ${score}`);
