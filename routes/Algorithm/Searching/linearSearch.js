// Linear search checks each elements one by one until the target is found.

function linearSearch(arr,target){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
       
    }
     return -1
}
console.log(linearSearch([10,20,30,40,50], 50));


// Lower bound and upper bound are the variations of the binary search

// lower bound = it finds the first index where the value >= target

// upper bound = it finds the first index where the value > target