/**
 * @title 200_岛屿数量
 * @url https://leetcode-cn.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    /** 解法一 DFS 关键：遇到1 则岛屿数量+1 且 将相邻所有陆地变为0 直至遍历完整个网格 */
    // 边界处理
    if (!grid.length) return 0

    // 定义变量
    const row = grid.length,
        col = grid[0].length // row 行数 col 列数
    let quantity = 0

    // DFS
    const DFS = (grid, i, j) => {
        // 递归终止条件
        // 条件一 要在网格范围内
        if (i < 0 || j < 0 || i >= row || j >= col) return
        // 条件二 当前值为 ‘1’
        if (grid[i][j] !== '1') return
        // PS: 上述条件也可合并写 if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] !== '1') return 为了可读性 故拆开了
        // 处理当前层逻辑  ⚠️ 是 '0' 不是 0
        grid[i][j] = '0'

        // 向 上下左右发散
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