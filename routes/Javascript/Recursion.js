// A function call itself is called Rucursion

function printNum(n){
    if(n === 0){
        return true
    }
    printNum(n-1)
    console.log(n)
}
printNum(5)
