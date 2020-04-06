
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () => {
    console.log('tutorial has occured');
});

// eventEmitter.emit('tutorial');


const readLine = require('readline');
const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout

});

let num1 = Math.floor((Math.random() * 10 + 1));
let num2 = Math.floor((Math.random() * 10 + 1));

let answer = num1 + num1 + num2;

r1.question(`what is ${num1} + ${num2}?`,
    (user) => {

        console.log(user);
    })





