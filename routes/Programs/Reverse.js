// reverse the given string

function reversestr(n) {
  const str = n.toString();
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev;
}

console.log("reverse>>>", reversestr("arunpandian"));  //naidnapnura

// reverse the given number

function numrev(n) {
  const str = n.toString();
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return Number(rev);
}
console.log("numrev>>>", numrev(12345));   //54321
