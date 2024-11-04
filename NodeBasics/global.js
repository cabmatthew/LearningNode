// Global object

console.log(global);

// console.log(1);
const glint = setInterval(() => {
    console.log(1)
}, 1000)

// glint();
const stoppingTheInterval = setTimeout(() => {
    clearInterval(glint);
    console.log('FOUR');
}, 4000);