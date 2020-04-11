// const _ = require('lodash');

// let example = _.fill([1, 2, 3, 4, 5], "banana", 1, 4);
// console.log(example);


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/example', (req, res) => [
    res.send("hittng example route")
]);

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    res.send('example with rpute params');
})

app.listen(3000);