// console.log('hello world');
// -----------------------------------
// console.log(process.platform);
// -----------------------------------
// const {EventEmitter} = require('events');
// const eventEmitter = new EventEmitter();

// const { readFile } = require('fs');

// eventEmitter.on('lunch', () => {

//     console.log('yum')
// })

// eventEmitter.emit('lunch');
// -----------------------------------
// const { readFile, readFileSync } = require('fs');

// const txt = readFileSync('hello.txt', 'utf8');

// console.log(txt)

// console.log('do this ASAP')
// -----------------------------------
// const { readFile, readFileSync } = require('fs');

// readFile('hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// });

// console.log('do this ASAP')
// -----------------------------------
// const {readFile} = require('fs').promises;

// async function hello() {
//     const file = await readFile('hello.txt', 'utf8');
// }

// console.log(hello());
// -----------------------------------
const express = require('express');
const { readFile } = require('fs');

const app = express();


app.get('/', (request, response) => {
    readFile('home.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('sorry, out of order')
        }
        response.send(html);
    })
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))