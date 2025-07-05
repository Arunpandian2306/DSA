// | Method               | Description                                                     |
// | -------------------- | --------------------------------------------------------------- |
// | `setTimeout()`       | Runs a function **once** after a delay                          |
// | `clearTimeout()`     | Cancels a `setTimeout`                                          |
// | `setInterval()`      | Runs a function **repeatedly** at intervals                     |
// | `clearInterval()`    | Cancels a `setInterval`                                         |
// | `setImmediate()`     | Executes a function **after the current event loop**            |
// | `clearImmediate()`   | Cancels a `setImmediate`                                        |
// | `process.nextTick()` | Runs code **before the next event loop tick** (microtask queue) |

//setTimeout() is a built-in asynchronous function in Node.js (and browser JavaScript)
// that lets you delay the execution of a function by a specified amount of milliseconds.

console.log("start");
setTimeout(() => {
  console.log("Delay");
}, 1000); //1 sec
console.log("end");

//clearTimeout() cancels the scheduled function before it runs.
const timeout = setTimeout(() => {
  console.log("Executing the function");
}, 1000);

clearTimeout(timeout);

// setInterval() it runs a function repeatedly at intervals
// clearInterval cancled the setInterval()
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log(`number are coming ${count}`);
  if (count === 4) {
    clearInterval(interval);
    console.log("interval stoped");
  }
}, 0);

//setImmediate() Executes a function after the current event loop
setImmediate(() => {
  console.log("immediate start");
});

//clearImmediate() cancle a setImmediate

const immediate = setImmediate(() => {
  console.log("I won the game");
});
clearImmediate(immediate);

// process.nextTick() runs before the next event loop iteration, even before setImmediate() or setTimeout().

process.nextTick(() => {
  console.log("coming first");
});
