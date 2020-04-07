
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', () => {
//     console.log('tutorial has occured');
// });

// eventEmitter.emit('tutorial');


const readLine = require('readline');
const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout

});

let num1 = Math.floor((Math.random() * 10 + 1));
let num2 = Math.floor((Math.random() * 10 + 1));

let answer = num1 + num1 + num2;

r1.question(`what is ${num1} + ${num2}?\n`,
    (userInput) => {

        if (userInput.trim() == answer) {
            r1.close();
        } else {
            r1.setPrompt('Incorrect response please try again\n');
            r1.prompt();
            r1.on('line', (userInput) => {
                if (userInput.trim() == answer)
                    r1.close();
                else {
                    r1.setPrompt(`your answer of ${userInput} is Incorrect`);
                    r1.prompt();
                }
            })
        }
    });

r1.on('close', () => {
    console.log("Correct!!");
});




