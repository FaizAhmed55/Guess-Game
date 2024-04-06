#! usr/bin/env node
import inquirer from "inquirer";
const systemguess = Math.floor(Math.random() * 6 + 1);
const userguess = await inquirer.prompt([
    {
        name: "numberguess",
        type: "number",
        message: "Please Chose a number between 1 to 6",
    },
]);
if (userguess.numberguess === systemguess) {
    console.log("Congratulation! You Guess Right number");
}
else {
    console.log("You Chose Wrong number");
}