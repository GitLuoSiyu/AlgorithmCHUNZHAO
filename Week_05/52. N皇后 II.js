/**
 * @title 52. N皇后 II
 * @url https://leetcode-cn.com/problems/n-queens-ii/description/
 * @description n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。
 * @param {number} n
 * @return {number}
 */
// 解法一：递归回溯
var totalNQueens = function(n) {
    let result = new Array(n);
    let results = 0;
    let dfs = (row,column) => {
        let leftColumn =  column-1;
        let rightColumn = column+1;
        for(let i = row - 1;i >= 0;i--){
            if(result[i] == column){
                return false;
            }
            if(leftColumn >= 0 && result[i] == leftColumn){
                return false;
            }
            if(rightColumn < n && result[i] == rightColumn){
                return false;
            }
            leftColumn--;
            rightColumn++;
        }
        return true;
    }
    let Nqueens = (row) => {
        if(row == n){
            results++;
            return;
        }
        for(let j = 0;j < n;j++){
            if(dfs(row,j)){
                result[row] = j;
                Nqueens(row+1)
            }
        }
    }
    Nqueens(0);
    return results;
};

// 解法二：对角线约束
var totalNQueens = function(n) {
    let result = 0;
    const dfs = ( subResult = [], row = 0) => {
        if (row === n) {
            result++;
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!subResult.some((j, k) => j === col || j - col === row - k || j - col === k - row)) {
                subResult.push(col);
                dfs( subResult, row + 1);
                subResult.pop();
            }
        }
    }
    dfs();
    return result;
};

// 解法三：位运算
var totalNQueens = function(n) {
    let res = 0;
    const dfs = (n,row,cols,pie,na) => {
        if (row >= n) {
            res++;
            return;
        }
        // 得到当前所有的空位
        let bits = (~(cols | pie | na)) & ((1 << n) -1)
        while(bits){
            // 取最低位的1
            let p = bits & -bits
            // 把P位置上放入皇后
            bits = bits & (bits - 1)
            dfs(n,row+1,cols | p,(pie | p) << 1,(na | p) >> 1)
        }
    }
    dfs(n,0,0,0,0);
    return res;
};
