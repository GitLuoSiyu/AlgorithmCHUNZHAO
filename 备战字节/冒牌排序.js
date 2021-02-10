/**
 * @title 手写冒泡
 * @param {*} nums 
 */
const bubleSort = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[j] > nums[j + 1]) {
            let temp = nums[j]
            nums[j] = nums[j+1]
            nums[j+1] = temp
        }
    }
    return nums
}