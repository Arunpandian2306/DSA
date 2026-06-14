// Binary Search finds an element by repeatedly dividing the search space into half.

// ⚠️ The array must be sorted.

// Logic
// Find middle element.
// If target equals middle → Found.
// If target is smaller → Search left half.
// If target is larger → Search right half.
// Repeat until found.
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1
            console.log("left", left)
        } else {
            right = mid - 1
        }

    }
    return -1
}
console.log(binarySearch([10, 20, 30, 40, 50, 60, 70], 70));