/**
 * @title 200_岛屿数量
 * @url https://leetcode-cn.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid.length) return 0

    const row = grid.length,
        col = grid[0].length 
    let quantity = 0

    const DFS = (grid, i, j) => {
        if (i < 0 || j < 0 || i >= row || j >= col) return
        if (grid[i][j] !== '1') return
        grid[i][j] = '0'
        for (let x of [-1, 0, 1]) {
            for (let y of [-1, 0, 1]) {
                // 过滤 对角线方向 (若为八个方向则移除此条件)
                if (x === y || x === -y) continue
                DFS(grid, i + x, j + y)
            }
        }
    }

    // 遍历整个网格
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                quantity++
                DFS(grid, i, j)
            }
        }
    }
    return quantity
};