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
  const indices = [];
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      indices.push(mid);
      // Check for duplicates to the left
      let tempLeft = mid - 1;
      while (tempLeft >= 0 && arr[tempLeft] === target) {
        indices.push(tempLeft);
        tempLeft--;
      }
      // Check for duplicates to the right
      let tempRight = mid + 1;
      while (tempRight < arr.length && arr[tempRight] === target) {
        indices.push(tempRight);
        tempRight++;
      }
      break; // Exit the loop once found
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return indices.length > 0 ? indices : -1; // Return indices or -1 if not found
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
