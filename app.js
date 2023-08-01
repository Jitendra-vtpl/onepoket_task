import express from 'express';
import fs from 'fs';
const PORT = 3000;
const app = express();

// Task 1: Basic Node.js Server
app.get('*', (req, res) => {
    res.status(200).send('Hello, World!');
})
app.listen(PORT, () => console.log(`App is running port ${PORT}`))

// Task 2: Data Manipulation
const sumOfArray = (numbers) => {
    let total = 0
    numbers.forEach(num => total += num)
    return total
}
console.log(`sumOfArray -> `, sumOfArray([10, 20, 30])); //

// Task 3: Asynchronous File Handling
const countFileWords = (filePath) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw Error('File read error occur -> ', err)

        const words = data.split(' ')
        console.log(`Total word count -> `, words.length);
    })
}
countFileWords('data.txt');