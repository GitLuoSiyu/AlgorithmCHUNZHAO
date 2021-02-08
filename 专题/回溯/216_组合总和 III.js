/**
 * @title 216. 组合总和 III
 * @url https://leetcode-cn.com/problems/combination-sum-iii/
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => {
    const res = [];
    // 基于当前已选的comb数组(和为sum)，在数start到数9中继续选
    const dfs = (start, comb, sum) => {
        if (comb.length == k) { // 选够k个数 结束递归
            if (sum == n) { // 组合中数之和等于n
                res.push(comb.slice()); // 将它的拷贝加入解集
            }
            return;
        }
        for (let i = start; i <= 9; i++) { // 枚举出所有的选择（选项）
            comb.push(i); // 作出一个选择i
            dfs(i + 1, comb, sum + i); // 基于该选择i，往下递归
            comb.pop(); // 撤销这个选择
        }
    };

    dfs(1, [], 0); // 入口
    return res;
}