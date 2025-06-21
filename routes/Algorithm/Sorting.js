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

router.post('/bubbleSort', (req, res) => {
    const { num } = req.body;
    if (!num || !Array.isArray(num)) {
        res.status(422).json({ error: "invalid format" });
    }
    const sortelement = bubble(num);
    res.json({ sortelement });
})

module.exports = router
