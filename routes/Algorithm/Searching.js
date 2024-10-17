var express = require('express');
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
router.post('/linearSearch', (req, res) => {
    const { num, target } = req.body;
    if (!num || !Array.isArray(num)) {
        res.status(422).json({ error: "Invalid Format" })
    }
    const search = linearSearch(num, target)
    if (search.length === 0) {
        res.json({ message: "Target Value not found" })
    } else {
        res.json({ message: `Target value found at index ${search}` })
    }

}
)


module.exports = router