// function
/* 
A function is a block of code designed to perform a particular task
A function is executed when something invokes it  (calls it)
Three types of function
1) function declaration (Regular function)
2) function expression (anonymous function)
3) arrow function (es6) */

// function declaration
// A named fn that is hoisted completely and can be called before its declaration
// Use - Reusable utility fn.
function add (a,b){
    return a+b;
}
console.log(add(6,2));

// function expression
// A fn stored in a variable. It is not fully hoised, so it is cannot be called before the assignment 
// Use - when storing fn in variables or passing them around.
const addition = function(a,b){
    return a+b;
}
console.log(addition(45,6));

// arrow function
// It is a shorted way to write a fn in javascript, introduced in ES6
// Use - Callbacks, map, filter, reduce and short fn 
// const adds = (a,b)=> a+b;
const adds = (a,b)=> {
    return a+b;
}
console.log(adds(5,7));