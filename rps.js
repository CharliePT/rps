//Rock, paper, scissors
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
    let choice = prompt("rock, paper, scissors: ").toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        console.log("Please choose either rock, paper or scissors");
        return rps();
    }
    results.games++;
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0){cpuchoice = "rock";}
    else if (rand === 1){cpuchoice = "paper";}
    else {cpuchoice = "scissors";}
    console.log("I chose " + cpuchoice + ".");
    if (cpuchoice === choice){
        console.log(chalk.yellow("Draw!"));
        results.draws++;
    }
    else {
        let x =  choice + cpuchoice;
        switch(x){
            case "rockpaper":
                console.log(chalk.red("You lose!"));
                results.losses++;
                break;
            case "rockscissors":
                console.log(chalk.green("You win!"))
                results.wins++;
                break;
            case "paperrock":
                console.log(chalk.green("You win!"))
                results.wins++;
                break;
            case "paperscissors":
                console.log(chalk.red("You lose!"));
                results.losses++;
                break;
            case "scissorsrock":
                console.log(chalk.red("You lose!"));
                results.losses++
                break;
            case "scissorspaper":
                console.log(chalk.green("You win!"));
                results.wins++;
                break;
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