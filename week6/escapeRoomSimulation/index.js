var readlineSync = require('readline-sync');
// Players name
const playerName = readlineSync.question("May i have your name please?")

const welcomeMessage = `Welcome${playerName} to the escape room simulation game`
console.log(welcomeMessage)



let isAlive = true
let hasKey = false

while (isAlive == true){
    const menuOptions = readlineSync.keyIn(`press 1 for put hand in hole \n press 2 for find the key \n press 3 for open the door`, {limit: '$<1-3>'})
    // hand in hole death option
    if (menuOptions == 1){
        console.log(`You have died! The game is over!`)
        isAlive = false
    }
    // find key option
    else if (menuOptions == 2 && hasKey == false){
        console.log(`${playerName}, You found a key will it work on the door?`)
        hasKey = true
    }
    else if (menuOptions == 2 && hasKey == true){
        console.log(`${playerName}, There is nothing else here`)
    }
    // open door option
    else if (menuOptions == 3 && hasKey == true ){
        console.log(`You insert the key into the door and it swings open! Congragulations, ${playerName}, You have escaped`)
    }
    else if (menuOptions == 3 && hasKey == false){
        console.log(`${playerName}, The door dose not budge but you notice a small keyhole`)
    }
}