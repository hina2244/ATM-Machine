#! /usr/bin/env node 

import  inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 2288;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "p1",
            message: "Please enter your pin",
            type: "number",

        }
    ]
);
// 1234 === 2288 - false
if (pinAnswer.p1 === myPin) {
    console.log("Correct Pin Code!!!");

   let operationAnswer = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw", "fast cash", "check balance"]
            } 
        ]
    );

    console.log(operationAnswer);
    
    //if user select withdraw

    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "please enter your amount",
                    type: "number",
                }
            ]
        );

        // =, -, *, 

        if (amountAnswer.amount <= myBalance){
        let balance = myBalance -= amountAnswer.amount;
        console.log("Your remaining balance is: " + myBalance);
      } 
        else {
            console.log("You have insufficient Balance");
        }
    } 

    // if user select fast cash
    else if (operationAnswer.operation === "fast cash"){
        let fastcashAnswer = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "list",
                    choices: ["1000", "3000", "5000", "15000",]
                }
            ]
        );
        if (fastcashAnswer.amount <= myBalance) {
            let mybalance2 = myBalance -= fastcashAnswer.amount;
            console.log("your remaining balance is:" + mybalance2);
        }
        else {
            console.log("You have insufficient Balance");
        }
    }
    // if user select check balance
    else if (operationAnswer.operation === "check balance"){
        console.log("your balance is: " + myBalance);
    }
}
 else {
    console.log("Incorrect Pin Number");
 }