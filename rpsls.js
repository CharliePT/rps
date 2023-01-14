//Rock, paper, scissors, lizard, spock
const prompt = require("prompt-sync")();
const chalk = require('chalk');

let results = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const rps = () => {
    let cpuchoice;
    let choice = prompt("rock, paper, scissors, lizard, spock: ").toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors" && choice !== "lizard" && choice !== "spock"){
        console.log("Please choose either rock, paper, scissors, lizard or spock");
        return rps();
    }
    results.games++;
    let rand = Math.floor(Math.random() * 5);
    if (rand === 0){cpuchoice = "rock";}
    else if (rand === 1) {cpuchoice = "paper";}
    else if (rand === 2) {cpuchoice = "scissors";}
    else if (rand === 3) {cpuchoice = "lizard";}
    else {cpuchoice = "spock";}
    console.log("I chose " + cpuchoice + ".");
    if (cpuchoice === choice){
        console.log(chalk.yellow("Draw!"));
        results.draws++;
    }
    else {
        if (choice === "rock"){
            if(cpuchoice === "scissors" || cpuchoice === "lizard"){
                console.log(chalk.green("You win!"));
                results.wins++;
            }
            else{
                console.log(chalk.red("You lose!"))
                results.losses++;
            }
        }
        else if (choice === "paper"){
            if(cpuchoice === "rock" || cpuchoice === "spock"){
                console.log(chalk.green("You win!"));
                results.wins++;
            }
            else{
                console.log(chalk.red("You lose!"))
                results.losses++;
            }
        }
        else if (choice === "scissors"){
            if(cpuchoice === "lizard" || cpuchoice === "paper"){
                console.log(chalk.green("You win!"));
                results.wins++;
            }
            else{
                console.log(chalk.red("You lose!"))
                results.losses++;
            }
        }
        else if (choice === "lizard"){
            if(cpuchoice === "spock" || cpuchoice === "paper"){
                console.log(chalk.green("You win!"));
                results.wins++;
            }
            else{
                console.log(chalk.red("You lose!"))
                results.losses++;
            }
        }
        else{
            if(cpuchoice === "scissors" || cpuchoice === "rock"){
                console.log(chalk.green("You win!"));
                results.wins++;
            }
            else{
                console.log(chalk.red("You lose!"))
                results.losses++;
            }
        }
    }
    let option = prompt("Enter y to see your results so far, anything else to skip: ")
    if (option === "y"){
        console.log(results);
    }
    let replay = prompt("Enter y to play again, anything else to quit: ")
    if (replay === "y"){
        return rps();
    }
    console.log("Thanks for playing!")
    return 1;
}

rps();