const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arraysize = 0;
let num = [];

r1.question("enter a size od array", (size) => {
  arraysize = parseInt(size);

  r1.on("line", (value) => {
    const number = parseInt(value);
    if (!isNaN(number)) {
      num.push(number);
    }
    if (arraysize === num.length) {
      const asc = num.sort((a, b) => a - b);
      console.log("asc>>>>", JSON.stringify(asc));
      r1.close();
    }
  });
});

// let size = 0;
// let array = [];

// r1.question("enter number of word", (wordsize) => {
//   size = parseInt(wordsize);

//   r1.on("line", (word) => {
//     array.push(word);

//     if (size === array.length) {
//       const rev = array.map((name) => name.split("").reverse().join(""));
//       console.log("rev>>>", JSON.stringify(rev));
//       r1.close();
//     }
//   });
// });
