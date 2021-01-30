/**
 * @title 126. 单词接龙 II
 * @description 
给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。转换需遵循如下规则：
每次转换只能改变一个字母。
转换后得到的单词必须是字典中的单词。

 * @key 
 输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = (beginWord, endWord, wordList) => {
    const wordSet = new Set(wordList);
    wordSet.add(beginWord); // 这个其实要不要都行
    if (!wordSet.has(endWord)) return []; // 单词表中没有终点词，无法变到终点词

    const levelMap = new Map(); // 存放图中的单词所在的层
    const wordMap = new Map(); // 存放图中的单词的邻接单词
    const visited = new Set(); // 记录访问过的节点
    const queue = [beginWord]; // 维护一个队列，初始放入起点词
    visited.add(beginWord); // 入列即访问，存入visited

    let finished = false; // 是否存在变化到终点词的路径
    let level = 0;
    levelMap.set(beginWord, 0); // 起始词的level为0

    while (queue.length) { // 队列空了，所有邻接节点就遍历完了
        const levelSize = queue.length; // 当前level的单词个数
        level++; // 遍历当前层的单词，level+1
        for (let i = 0; i < levelSize; i++) { // 当前层的单词逐个出列考察
            const word = queue.shift(); // 当前出列的单词

            for (let i = 0; i < word.length; i++) { // 遍历单词的所有字符
                for (let c = 97; c <= 122; c++) { // 遍历26个字母字符
                    const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                    if (!wordSet.has(newWord)) continue; // 不是单词表中的单词就忽略
                    if (wordMap.has(newWord)) // 已经存在于wordMap
                        wordMap.get(newWord).push(word); // 对应的数组推入出列的单词
                    else // 初始化一个数组
                        wordMap.set(newWord, [word]); // 并放入“父单词”

                    if (visited.has(newWord)) continue; // 该新单词已经访问过就忽略
                    if (newWord == endWord) // 遇到了终点词
                        finished = true; // 存在抵达终点词的路径

                    levelMap.set(newWord, level); // 记录这个单词的level
                    queue.push(newWord); // 该新单词是下一层的，入列
                    visited.add(newWord); // 入列即访问，记录一下
                }
            }
        }
    }
    if (!finished) return []; // 无法到达终点词，返回[]

    const res = [];
    const dfs = (path, beginWord, word) => {
        if (word == beginWord) { // 当前遍历的word，和起始词相同
            res.push([beginWord, ...path]); // 将当前路径推入res数组，加上起始词
            return;
        }
        path.unshift(word); // 将当前单词加入到path数组的开头
        if (wordMap.get(word)) { // 当前单词有对应的“父单词”们
            for (const parent of wordMap.get(word)) { // 遍历“父单词”们
                if (levelMap.get(parent) + 1 == levelMap.get(word)) { // 满足要求的
                    dfs(path, beginWord, parent); // 递归dfs
                }
            }
        }
        path.shift(); // 回溯，撤销选择，将path数组开头的单词弹出
    }
    dfs([], beginWord, endWord); // dfs的入口
    return res;
};



/**
 * @key 
 思路
两个单词只有一个字母之差，它们就是邻接关系。我们从 wordList 可以得到一张邻接关系表：


将这张表转成无向图。邻接节点用一条无向边相连。


题目等价为：在图中找出从起始词到终点词的最短路径。题目中，起始词没有出现在单词表里，加进去就行。

路径最短意味着什么？
hit -> hot -> lot -> log，这是一层层的转变路径，hit在第0层，hot在第1层……从起始词到终点词经历的层数，就是路径的长度。最短路径代表终点词在路径中的层尽量小。


求“最短路径”、“最小深度”——BFS
每个单词节点有自己的层，它的“邻居”是它可变成的单词，属于下一层。
这很像 BFS：考察当前层出列的节点，带出下一层的节点入列。

怎么找到自己的 “邻居单词”
让单词的单个字母逐个改动，一个字母的改动可以生成25个新的单词。从中筛选出存在于 wordList 中的，就是它的 “邻居单词”。

路径上出现过的单词，就不要让它再出现
比如：hit->hot->hit ，单词又变回来，即重复访问节点，徒增路径长度，应该避免。可以用一个 visited 容器，记录遍历过的单词节点。

为什么还需要 DFS？
如果是求最短路径的长度，仅 BFS 即可。但要找出最短路径的所有组合，则需要回溯。

我们可以从起点词开始DFS，也可以从终点词开始 DFS，我们选择后者，遇到起点词，就找到一条满足条件的路径，推入结果数组，然后回溯，直到找出所有最短路径。


DFS 需要哪些信息？
需要知道当前节点的“父亲们”，它可以从哪些单词变过来——需要wordMap。
从当前节点的“父亲们”的所在层数，选出满足最短路径的——需要levelMap。
我们在 BFS 时要构建这种关系，供 DFS 时使用。
BFS 具体做法
遍历当前层的单词，逐个出列，将它的字母逐个改动成 a 到 z，找出存在于单词表的新单词。
新单词作为 key 存到 wordMap，值是它的“父单词”，即出列的单词。
如果这个新单词正好是终点词，说明肯定存在有路径可以变到终点词。
用 levelMap 记录路径上的单词所在的层。
将下一层的新单词入列，下次循环全都是下一层的单词
用 visited 表记录访问过的单词，避免将它重复加入到路径中
DFS 怎么写
DFS 目的是找出最短路径的所有组合，用 path 数组表示当前的路径状态。
DFS 将节点推入 path 数组的开头，满足要求的节点会递归，不符合要求的，要回溯
DFS 的出口：遍历到了起点词，说明一条满足条件的路径生成好了，推入 res 数组
怎么理解回溯，为什么要回溯
回溯就是遇到不满足条件的节点，要 “掉头”，回到选择前的状态，考察别的选择。
一个单词可能有很多“邻居单词”可选择，但为了路径最短，需要选择满足「当前单词的层 == 邻居单词的层 + 1」的节点，这才是最短路径中的节点。

 */