// Reverse an array using inbuild method

const arr = [1,2,3,4,5]
const rev = arr.reverse()
console.log(rev) // [ 5, 4, 3, 2, 1 ]

// By using spread operator

const arr1 = [2,1,4,5,6]
const rev1 = [...arr1].reverse()
console.log(rev1) // [ 6, 5, 4, 1, 2 ]

// Without inbuild method

const arr2 = [4,5,2,3,5,6]
const rev2=[]
for (let i = arr2.length-1;i>=0;i--){
    rev2.push(arr2[i])
}
console.log(rev2) // [ 6, 5, 3, 2, 5, 4 ]

// by using 2 pointer

const arr3 = [4,5,6,2,4,7]
let left = 0, right = arr3.length-1;

while(left<right){
    [arr3[left], arr3[right]] = [arr3[right],arr3[left]]
    left ++
    right --
}
console.log(arr3)

const str = ['arun','pandian'];
const revstr = str.map(str => str.split('').reverse().join(''))
console.log(revstr) // [ 'nura', 'naidnap' ]
  
const revstr1 = str.reverse().map(str=> str.split('').reverse().join(''))
console.log(revstr1) // [ 'naidnap', 'nura' ]
