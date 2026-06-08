/* 
Objects are collection of key - value pairs.
Keys are string(or symbols) and values can be anything 
*/

const person = {
    name : 'arun',
    secname : 'pandian',
    age : 25,
    fullname : function(){
        return this.name + " " + this.secname;
    }
}
console.log(person.fullname())

// creating objects
// using object literal (most common)
const car = { brand: "tata", year: 2024 }
console.log("car>>>", JSON.stringify(car))

// using newObject()
const bike = new Object()
bike.brand = "honda";
console.log("bike>>>", JSON.stringify(bike))

// using constructor fn
function Student(name,age){
    this.name = name;
    this.age = age;
}
const user = new Student("saran",24);
console.log("user>>>", JSON.stringify(user))

// using class (es6+)
class Teacher{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const pref = new Teacher("vishwa", 24);
console.log("pref>>>", JSON.stringify(pref))

/* 
A constructor is a special fn used to create and initialize objects (es6 =>) from a class

Object Built - in methods

1) Object.keys(obj); // returns array of keys
2) Object.values(obj); // returns array of values
3) Object.entries(obj); // returns array of [key,value]
4) Object.hasOwnProperty('key'); // check property existence 
*/

// Object Destructuring
// Object destructuring lets you extract properties from an object into variables.

// Without Destructuring 
const person1 = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};

const name = person1.name;
const age = person1.age;

console.log(name); // Arun
console.log(age);  // 25

// With Destructuring
const person2 = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};

const { name, age } = person2;

console.log(name); // Arun
console.log(age);  // 25

// Rename Variables
const person3 = {
    name: "Arun",
    age: 25
};

const { name: fullName, age: userAge } = person3;

console.log(fullName); // Arun
console.log(userAge);  // 25

// Default Values
const person4 = {
    name: "Arun"
};

const { name, city = "Chennai" } = person4;

console.log(city); // Chennai

// Nested Object Destructuring
const person5 = {
    name: "Arun",
    address: {
        city: "Chennai",
        pincode: 600001
    }
};

const {
    address: { city }
} = person5;

console.log(city); // Chennai

// Destructuring in Function Parameters
function displayUser({ name, age }) {
    console.log(name, age);
}

displayUser({
    name: "Arun",
    age: 25
});