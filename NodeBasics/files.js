const fs = require('fs');

// Reading files (asyncronous function, takes time to do)
// 2nd arg: Callback function. takes in error & data
// fs.readFile('./docs/firstfile.txt', (err, data) => {
//     if (err) {
//         console.log(`Your error: ${err}`);
//     }
//     // data returns a buffer; use toString()
//     console.log("firstfile 1: ", data.toString());
// });


// Writing files
// fs.writeFile('./docs/firstfile1.txt', 'greetings, friend', (err) => {
//     if (err) {
//         console.log("17 Error: ", err);
//     }
//     console.log('File written!');
// });

// Directories
// What directory & where
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Folder created!");
        }
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Folder removed!");
        }
    })
};

// Maybe only run the code if the folder doesn't already exist

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File deleted!');
        }
    })
} else {
    fs.writeFile('./docs/deleteme.txt', 'hello, pls delete me', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File created! (to be deleted)')
        }
    })
}