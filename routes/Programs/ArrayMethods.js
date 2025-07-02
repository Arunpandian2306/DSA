// Common Array Methods:


// Adding/Removing Elements:

// push(): Adds one or more elements to the end of an array.
const arrpush = [2, 4, 6];
arrpush.push(21);
console.log("push>>>", JSON.stringify(arrpush)); // push>>> [2,4,6,21]

// pop(): Removes the last element from an array and returns it.
const arrpop = [5, 3, 9];
arrpop.pop();
console.log("pop>>>", JSON.stringify(arrpop)); // pop>>> [5,3]

// unshift(): Adds one or more elements to the beginning of an array.
const arrunshift = [5, 5, 8, 0];
arrunshift.unshift(5, 8);
console.log("unshift>>>", JSON.stringify(arrunshift)); //unshift>>> [5,8,5,5,8,0]

// shift(): Removes the first element from an array and returns it.
const arrshift = [5, 4, 3, 6];
arrshift.shift();
console.log("shift>>>", JSON.stringify(arrshift)); //shift>>> [4,3,6]

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const arrsplice = [3, 4, 5, 6, 2, 1, 5, 6, 78];
arrsplice.splice(4, 2, 87); // 4 starting index 2 no.of element to remove & 87 element to be added
console.log("splice>>>", JSON.stringify(arrsplice)); //splice>>> [3,4,5,6,87,5,6,78]


// Iterating/Transforming Arrays:

// forEach(): Executes a provided function once for each array element.
// map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
// every(): Tests whether all elements in the array pass the test implemented by the provided function.
// some(): Tests whether at least one element in the array passes the test implemented by the provided function.

// Searching/Finding Elements:
// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// find(): Returns the first element in the provided array that satisfies the provided testing function. Otherwise, undefined is returned.
// findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.

// Other Useful Methods:
// concat(): Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// substring(): Returns a portion of the string between two specified indices. It extracts characters from start up to, but not including, end.
// join(): Joins all elements of an array into a string.
// reverse(): Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// sort(): Sorts the elements of an array in place and returns the sorted array.
