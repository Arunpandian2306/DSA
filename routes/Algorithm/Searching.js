var express = require("express");
var router = express.Router();

function linearSearch(arr, target) {
  const linear = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === target) {
      linear.push(i);
    }
  }
  return linear;
}

function binarySearch(arr, target) {
  const index = [];
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      index.push(mid);
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

router.post("/linearSearch", (req, res) => {
  const { num, target } = req.body;
  if (!num || !Array.isArray(num)) {
    res.status(422).json({ error: "Invalid Format" });
  }
  const search = linearSearch(num, target);
  if (search.length === 0) {
    res.json({ message: "Target Value not found" });
  } else {
    res.json({ message: `Target value found at index ${search}` });
  }

  router.post("/binarySearch", (req, res) => {
    const { num, target } = req.body;
    if (!num || !Array.isArray(num)) {
      res.status(422).json({ error: "Invalid Format" });
    }
    const sortedArray = num.sort((a, b) => a - b); 
    const search = binarySearch(sortedArray, target);
    if (search.lenth > 0) {
      res.json({ message: `Target value found at index ${index}` });
    } else {
      res.json({ message: `Target Value not found` });
    }
  });
});

module.exports = router;
