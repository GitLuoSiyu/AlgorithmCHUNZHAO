/**
 * @title 51. N 皇后
 * @url https://leetcode-cn.com/problems/n-queens/
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
    const board = new Array(n)
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.')
    }
    const res = []
    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] == 'Q' && (j == col || i + j === row + col || i - j === row - col)) {
                    // 发现了皇后，并且和自己同列/对角线
                    return false
                }
            }
        }
        return true
    }

    // 放置当前行的皇后
    const helper = (row) => {
        if (row == n) {
            // 拷贝一份board
            const stringsBoard = board.slice();
            for (let i = 0; i < n; i++) {
                stringsBoard[i] = stringsBoard[i].join(''); // 将每一行拼成字符串
            }
            res.push(stringsBoard)
            return
        }
        // 枚举出所有选择
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = "Q"
                helper(row + 1)
                board[row][col] = '.'
            }
        }
    }
    helper(0)
    return res
};