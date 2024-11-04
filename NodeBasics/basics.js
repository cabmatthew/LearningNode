// const name = 'wahoo';

// console.log(name);

// const myArrowFunction = (item) => {
//     console.log(`i use backticks instead of quotation marks. \n\"${item}\" is being passed into this function.`);
// }

// myArrowFunction(name);
const fs = require('fs');

let myText = '';

for (let i = 0; i < 2000; i++) {
    myText += `Hello! This is iteration ${i + 1}. I'm learning how to use node.js rn. `;
}

fs.writeFile('./docs/bigFile.txt', myText, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Created the big text file!");
    }
})