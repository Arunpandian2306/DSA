// var
// function scope
// accessible outside the if block
// can be redeclared

var x = 20 
var x = 30
console.log(x) // 30

// let
// block scope
// not accessible outside the if block
// can be reassianable

let y = 10
y = 20
console.log(y) // 20

// const
// block scope 
// not accessible outside the if block
// constant, cannot be reassianble

const z = 5
console.log(z) // 5