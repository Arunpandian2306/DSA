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
