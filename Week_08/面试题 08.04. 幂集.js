/**
 * @title 面试题 08.04. 幂集
 * @description 幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []
    const dfs = (path, index) => {
        result.push(path.slice())
        for (let i = index; i < nums.length; i++) {
            path.push(nums[i])
            dfs(path, i + 1)
            path.pop()
        }
    }

    dfs([], 0)
    return result
};


/**
 * @key 
用递归回溯去做，穷举所有的选择
递归函数的两个变量

path ：当前的集合
index：当前选择的范围的起点
递归函数中，用for枚举出当前递归的所有选项，从 nums[index] 到 nums末尾元素
然后选择一个元素 nums[i] 加入 path，基于当前选择，继续递归，传入的指针就是 i+1
这样选下一个数就避免了出现重复的选项
递归分支结束后，要回溯到上一个节点，将上一个选择的数从path中拿掉，切入另一个分支，继续搜索，把整个解空间树走全了。

什么时候将path加入解集？
在调用子递归之前，递归压栈之前，比如最开始是空集，加入解集，然后选了一个数，再加入解集……等到整个回溯结束，不同的集合就都加入好了，不用特地设置递归出口去捕获。

 */