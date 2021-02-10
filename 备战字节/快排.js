/**
 * @title 手写快排
 * @param {*} nums 
 */
const quickSort = (nums) => {
    if (nums.length < 2) return nums;
    let left = [],
        right = [],
        curr = Math.floor(nums.length / 2),
        base = nums.splice(curr, 1)[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < base) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return quickSort(left).concat([base], quickSort(right))
}

// 原地快排
var quickSort = function (arr, lo = 0, hi = arr.length - 1) {
    if (lo >= hi) return;
    const idx = partition(arr, lo, hi);
    quickSort(arr, lo, idx - 1);
    quickSort(arr, idx + 1, hi);
}
var partition = function (arr, lo, hi) {
    if (lo >= hi) return lo;
    // swap arr[lo] with a random element in arr
    const rand = Math.floor(lo + (hi - lo + 1) * Math.random());
    [arr[lo], arr[rand]] = [arr[rand], arr[lo]];
    const pivot = arr[lo];
    let j = lo + 1;
    for (let i = lo + 1; i <= hi; i++) {
        if (arr[i] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    j--;
    [arr[lo], arr[j]] = [arr[j], arr[lo]];
    return j;
}