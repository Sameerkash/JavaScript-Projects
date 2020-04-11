
//Event module 

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', () => {
//     console.log('tutorial has occured');
// });

// eventEmitter.emit('tutorial');




// readline module 

// const readLine = require('readline');
// const r1 = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout

// });

// let num1 = Math.floor((Math.random() * 10 + 1));
// let num2 = Math.floor((Math.random() * 10 + 1));

// let answer = num1 + num1 + num2;

// r1.question(`what is ${num1} + ${num2}?\n`,
//     (userInput) => {

//         if (userInput.trim() == answer) {
//             r1.close();
//         } else {
//             r1.setPrompt('Incorrect response please try again\n');
//             r1.prompt();
//             r1.on('line', (userInput) => {
//                 if (userInput.trim() == answer)
//                     r1.close();
//                 else {
//                     r1.setPrompt(`your answer of ${userInput} is Incorrect`);
//                     r1.prompt();
//                 }
//             })
//         }
//     });

// r1.on('close', () => {
//     console.log("Correct!!");
// });


// File system module

// const fs = require('fs');

// Create file 
// fs.writeFile('example.txt', "this is an example", (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("file Successfully created")
//     // fs.readFile("example.txt", "utf8", (err, file) => {
//     //     if (err)
//     //         console.log(err);
//     //     else
//     //         console.log(file);
//     // });
// });

// Rename file 
// fs.rename("example.txt", "example2.txt", (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("successfully renamed file");
// })

//Append to file 
// fs.appendFile("example2.txt", "Some data being appended",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("appended to file");
// })

//delete file 
// fs.unlink("example.txt", (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("successful");
// })

//Folders 

//create folder
// fs.mkdir('tutorial', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("folder succesfully created");
// })

// Delete a folder
// fs.rmdir('tutorial', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("deleted")

// })

//folder with file 

// fs.mkdir('tutorial', (err) => {
//     if (err)
//         console.log(err);
//     else
//         fs.writeFile("./tutorial/example.txt","123", (err) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log("successfull");
//         });
// })

//Streams 
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream("./example.txt");
// // readStream.on('data', (chunk) => {
// //     console.log(chunk)
// // })
// const writeStream = fs.createWriteStream('example2.txt.gz');
// readStream.pipe(gzip).pipe(writeStream);

//http 

// const http = require('http');
// const server = http.createServer((req, res) => {

//     if (req.url == '/') {

//         res.write('Hello World');
//         res.end();
//     } else {
//         res.write('using soome other domain');
//         res.end();
//     }

// });

// server.listen('3000');