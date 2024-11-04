const fs = require('fs');

const readStream = fs.createReadStream('./docs/bigFile.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/writingHere.txt');

// .on: an event listener
// If we get a new buffer, get the data event. chunk of data
// fire callback function with each new chunk

readStream.on('data', (chunk) => {
    console.log('----- NEW CHUNK -----');
    console.log(chunk);
    writeStream.write('\n----- NEW CHUNK -----\n');
    writeStream.write(chunk);
});

// Piping
readStream.pipe(writeStream);