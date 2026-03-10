const readlineSync = require('readline-sync');

let year = readlineSync.question("Enter the year: ");
if((year %4 ==0 && year % 100 !=0)|| (year%400==0)){
console.log("Its a leap year")
}
else{ 
 console.log("Not a leap year")}