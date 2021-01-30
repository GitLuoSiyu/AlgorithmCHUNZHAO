/**
 * @title 1202. 交换字符串中的元素
 * @description 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0 开始）
 * @example 
    输入：s = "dcab", pairs = [[0,3],[1,2]]
    输出："bacd"
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
    let n = s.length,
        unionFind = new UnionFind(n),
        i = pairs.length,
        h = new Map,
        r = Array(n)
    while (i--) unionFind.union(pairs[i][0], pairs[i][1])
    while (++i < n) {
        const rootI = unionFind.find(i)
        if (!h.has(rootI)) h.set(rootI, [])
        h.get(rootI).push(i)
    }
    h.forEach(v => {
        const n = v.slice().sort((a, b) => s.charCodeAt(a) - s.charCodeAt(b))
        for (let j = 0; j < v.length; j++) r[v[j]] = s[n[j]]
    })
    return r.join('')
};


/**
 * @title 1202. 交换字符串中的元素
 * @description 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0 开始）
 * @example 
    输入：s = "dcab", pairs = [[0,3],[1,2]]
    输出："bacd"
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
    let unionFind = new UnionFind(s.length),
        i = pairs.length,
        h = new Map,
        r = ''
    while (i--) unionFind.union(pairs[i][0], pairs[i][1])
    while (++i < s.length) {
        const rootI = unionFind.find(i)
        if (!h.has(rootI)) h.set(rootI, new MinPriorityQueue)
        h.get(rootI).enqueue(s[i], s.charCodeAt(i))
    }
    for (i = 0; i < s.length; i++) {
        const rootI = unionFind.find(i)
        r += h.get(rootI).dequeue().element
    }
    return r
};


var smallestStringWithSwaps = function (s, pairs) {
    let unionFind = new UnionFind(s.length),
        i = pairs.length,
        h = new Map,
        r = ''
    while (i--) unionFind.union(pairs[i][0], pairs[i][1])
    while (++i < s.length) {
        const rootI = unionFind.find(i)
        if (!h.has(rootI)) h.set(rootI, [])
        h.get(rootI).push(s[i])
    }
    h.forEach((v, k) => h.set(k, v.sort((a, b) => b.charCodeAt() - a.charCodeAt())))
    for (i = 0; i < s.length; i++) {
        const rootI = unionFind.find(i)
        r += h.get(rootI).pop()
    }
    return r
};

class UnionFind {
    constructor(num, s) {
        this.parents = Array(num + 1).fill().map((_, i) => i); // 已经makeSet了
        this.ranks = Array(num).fill().map(_ => 0);
        this.count = num;
        this.s = s;
        this.hash = {};
        this.ans = [];
    }
    findSet(x) { // 路径压缩，查x的根节点
        while (this.parents[x] !== x) {
            x = this.parents[x];
        }
        return x;
    }
    union(x, y) {
        this.link(this.findSet(x), this.findSet(y));
    }
    link(x, y) {
        if (x === y) return;
        this.parents[x] = y
        this.count--;
    }
    getAns() {
        for (let i = 0; i < this.s.length; i++) {
            const rep = this.findSet(i);
            if (this.hash[rep]) {
                this.hash[rep].push(i);
            } else {
                this.hash[rep] = [i];
            }
        }
        for (let rep in this.hash) {
            const arrIndex = this.hash[rep];
            const arrVal = [];
            arrIndex.map(index => {
                arrVal.push(this.s[index]);
            });
            this.ans.push([
                [...arrIndex],
                [...arrVal]
            ]);
        }
        return this.ans;
    }
    getCount() {
        return this.count;
    }
}