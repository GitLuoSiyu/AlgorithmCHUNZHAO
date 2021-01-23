/**
 * @title 1089.复写零
 * @desc 给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    if(!arr.length) return [];
    let len = arr.length
    let tempList = []

    for (let i = 0; i < len; i++) {
        tempList.push(arr[i])

        const val = tempList.shift()
        arr[i] = val

        if (val === 0) {
            if ((i+1) < len) {
            tempList.push(arr[i+1])
            arr[i+1] = 0
        }
            i++
        }
    }
};