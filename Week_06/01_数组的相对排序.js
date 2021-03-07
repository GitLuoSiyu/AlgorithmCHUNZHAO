/**
 * @title 1122. 数组的相对排序
 * @url https://leetcode-cn.com/problems/relative-sort-array/
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function (arr1, arr2) {
    return arr1.sort((a, b) => {
        let ia = arr2.indexOf(a)
        let ib = arr2.indexOf(b)
        if (ia == -1 && ib == -1) {
            return a - b
        } else if (ia == -1) {
            return 1
        } else if (ib == -1) {
            return -1
        } else {
            return ia - ib
        }
    })
};