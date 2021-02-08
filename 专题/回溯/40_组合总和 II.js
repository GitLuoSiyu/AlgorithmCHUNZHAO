/**
 * @title 40. 组合总和 II
 * @url https://leetcode-cn.com/problems/combination-sum-iii/
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
    candidates.sort((a, b) => a - b); // 升序排序
    const res = [];

    const dfs = (start, temp, sum) => { // start是索引 当前选择范围的第一个
        if (sum >= target) { // 爆掉了，不用继续选了
            if (sum == target) { // 满足条件，加入解集
                res.push(temp.slice()); // temp是引用，所指向的内存后续还要操作，所以拷贝一份
            }
            return; // 结束当前递归
        }
        for (let i = start; i < candidates.length; i++) { // 枚举出当前的选择
            if (i - 1 >= start && candidates[i - 1] == candidates[i]) { // 当前选项和左邻选项一样，跳过
                continue;
            }
            temp.push(candidates[i]); // 作出选择
            dfs(i + 1, temp, sum + candidates[i]); // 基于该选择，继续选择，递归
            temp.pop(); // 上面的递归结束，撤销选择，回到选择前的状态，切入另一分支
        }
    };

    dfs(0, [], 0);
    return res;
};