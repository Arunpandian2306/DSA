var express = require('express');
var router = express.Router();

function bubble(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}



router.post('/bubbleSort', (req, res) => {
    const { num } = req.body;
    if (!num || !Array.isArray(num)) {
        res.status(422).json({ error: "invalid format" });
    }
    const sortelement = bubble(num);
    res.json({ sortelement });
})

router.post('/mergeSort', (req, res) => {
    const { num } = req.body;
    if (!num || !Array.isArray(num)) {
        res.status(422).json({ error: "invalid format" });
    }
    const sortelement = mergeSort(num);
    res.json({ sortelement });
})

module.exports = router
