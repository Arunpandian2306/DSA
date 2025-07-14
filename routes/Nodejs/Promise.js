function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetch success");
    }, 1000);
  });
}

async function fetchData() {
  try {
    const data = await getData();
    console.log("success", data);
  } catch (error) {
    console.log("error", error);
  }
}
fetchData();

// addition using Promise

function addition(a, b) {
  return new Promise((resolve, reject) => {
    console.log("type of a ", JSON.stringify(typeof a));
    if (typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    } else {
      reject("Must be number");
    }
  });
}

// using then catch

addition(5, 6)
  .then((result) => {
    console.log("success", result);
  })
  .catch((error) => {
    console.log("error", error);
  });

//   using async and await

async function add() {
  try {
    const adding = await addition(7, 9);
    console.log("success>>>", adding);
  } catch (error) {
    console.log("error", error);
  }
}

add();
