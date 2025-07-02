// reverse the given string

function reversestr(n) {
  const str = n.toString();
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev;
}

console.log("reverse>>>", reversestr("arunpandian")); //naidnapnura

// reverse the given number

function numrev(n) {
  const str = n.toString();
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return Number(rev);
}
console.log("numrev>>>", numrev(12345)); //54321

// reverse the string in a array

// with inbuild method
const arr = ["arun", "pandian"];
const reverse = arr.map((word) => word.split("").reverse().join(""));
console.log("revarray>>>", reverse); // [ 'nura', 'naidnap' ]

// without inbuild method
const reverse1 = arr.map((word) => {
  let rev = "";
  for (let i = word.length - 1; i >= 0; i--) {
    rev = rev + word[i];
  }
  return rev;
});

console.log("revarray1>>>", reverse1); // [ 'nura', 'naidnap' ]

// reverse the string and a array in a array

// with inbuild method
const reverse2 = arr.map((word) => word.split("").reverse().join(""));
console.log("revarray2>>>", reverse2);

// without inbuild method
const arr1 = ["arun", "pandian"];
console.log("arr1>>>", arr1.length);
const reverse12 = [];
for (let i = 0; i <= arr1.length - 1; i++) {
  let rev = "";
  const word = arr[i];
  console.log("word>>>", word.length);
  for (let j = word.length - 1; j >= 0; j--) {
    rev += word[j];
  }
  reverse12.push(rev);
}

console.log("revarray1>>>", reverse12); // [ 'naidnap', 'nura' ]

// add sum of digits

function sumofdigits(n) {
  return n
    .toString()
    .split("")
    .reduce((a, n) => a + Number(n), 0);
}

console.log("sum>>>", sumofdigits(123456789));
