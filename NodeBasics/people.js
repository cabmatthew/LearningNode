const people = ['yoshi', 'john', 'chris', 'giselle'];
const people2 = ['josh', 'nicholas', 'sid'];

// CommonJS Exporting something manually from this file
module.exports = {
    people: people, 
    people2: people2
};

// ES6 exports
// export { people, people2 };