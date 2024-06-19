#! /usr/bin/env node
import inquirer from "inquirer";
const ansswers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "enter your sentence to count the words: "
    }
]);
const words = ansswers.Sentence.trim().split(" ");
console.log(words);
console.log(`your Sentence count is ${words.length}`);
