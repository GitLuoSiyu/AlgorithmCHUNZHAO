/**
 * @title 289. 生命游戏
 * @url https://leetcode-cn.com/problems/game-of-life/
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    if (!board.length) return

    let rows = board.length;
    let cols = board[0].length;

    // 遍历每一个格子(细胞)，统计每个格子周围的存活细胞个数
    let neighbors = [0, -1, 1];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // 记录每个格子周围八个格子的存活情况
            let liveBox = 0;
            // 遍历每个格子的周围的八个格子
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (!i && !j) continue
                    let r = row + neighbors[i];
                    let c = col + neighbors[j];
                    // 注意：有些位置为 -1，但是当前它还是活的，这轮过后才死
                    if ((r >= 0 && r < rows) && (c >= 0 && c < cols) && Math.abs(board[r][c]) === 1) {
                        liveBox++;
                    }
                }
            }

            // 通过 liveBox 判断当前格子是否存活
            // 由生变死记为 -1
            if ((board[row][col] === 1) && (liveBox < 2 || liveBox > 3)) {
                board[row][col] = -1;
            }
            // 忍术：秽土转生记为 2
            if (board[row][col] === 0 && liveBox === 3) {
                board[row][col] = 2;
            }
        }
    }

    // 转换状态，2 -> 1，-1 -> 0
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            board[row][col] = board[row][col] > 0 ? 1 : 0;
        }
    }
};