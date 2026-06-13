// Reverse a string using inbuid method

const str = "Arunpandian"
const rev = str.split("").reverse().join("");
console.log(rev) 

// without inbuild method

let rev1 = ""
for (let i = str.length-1;i>=0;i--){
    rev1+=str[i] 
}
console.log(rev1)

// palidrome

const readlineSync = require('readline-sync');
let palidrome = readlineSync.question("Enter the string");

const rev2 = palidrome.split("").reverse().join("")
if(palidrome.toLowerCase() === rev2.toLowerCase()){
    console.log("given string is palidrome")
} else {
    console.log("Its not a palidrome")
}