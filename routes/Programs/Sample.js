const readlineSync = require('readline-sync');

let year = readlineSync.question("Enter the year: ");
if((year %4 ==0 && year % 100 !=0)|| (year%400==0)){
console.log("Its a leap year")
}
else{ 
 console.log("Not a leap year")}





function sumofdigit(arr) {
    let sum = 0;

    for (const num of arr) {
        const digits = String(num);
        console.log("digits>>>",digits)

        for (const digit of digits) {
            sum += Number(digit);
            console.log("sum>>>",sum)
        }
    }
    console.log("sum1>>>",sum)

    return sum;
}

console.log(sumofdigit([123, 456, 789])); // 45