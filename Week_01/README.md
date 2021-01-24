## 学习笔记

## 数组的总结
对于一些高级程序语言的，它的元素类型没有严格的要求，它有一个标准的叫法叫做泛型，它就是说任何一个单元类型都可以放进去。

对于数组，它底层的硬件实现，有一个叫内存管理器的东西，每当你申请数组的话，计算机实际上是在内存中，给你开辟了(申请了)一段连续的地址，每一个地址都可以直接通过内存管理器进行访问。这张图里示意的地方就是它相应的内存地址。直接访问方面，它访问第一个元素和访问中间某个元素，时间复杂度都是一样的。也就是常数时间称为O(1)。从这里可以总结出它可以进行随机地访问任何的一个元素，访问速度非常快，这也是它的特性之一。

如图所示，有一个数组含有ABCEFG，我们想把元素D插入到数组中输出ABCDEFG。这个时候需要把EFG往下挪一个位置，而这样的操作导致了时间复杂度不再是常数级了，而是O(n)的时间复杂度。在最坏的情况甚至需要挪动整个数组；最好的情况下插入到最后面就变成了O(1)；平均情况下需要移动一半的元素位置。

同理可得，进行删除操作的时候一样。平均时间复杂度O(n)。

在Java源码里，ensure capacity 所进行的操作其实相对暴力，它会先查找整个数组的实际长度，如果长度够的话就什么都不做；如果长度不够的话，那么它会直接new一个新的数组出来，新的数组长度是当前长度乘以2，把老数组的值拷贝到新数组上面去。源码如下:
```java
public void ensureCapacity(int minCapacity) {
    int current = data.length;

    if (minCapacity > current) {
        E[] newData = (E[]) new Object[Math.max(current * 2, minCapacity)];
        System.arraycopy(data, 0, newData, 0, size);
        data = newData;
    }
}
```
由此可见，如果对数组进行大量的增删操作，它会涉及到非常多的array copy，这样它的时间复杂度不是特别高效的。
### 链表
链表的出现弥补了数组的一些缺陷，在一些删除、添加操作比较频繁的情况下，数组在这些场景里并不好用，在这里使用链表更加合适。关于Linked List的定义，大学里常见的如下:
```java
class LinkedList {
    Node head; // head of list

    class Node {
        int data;
        Node next;

        Node(int d) { data = d; }
    }
}
```
在Java底层里面，数组是一个标准的双向链表，

链表增删结点操作，它没有引起整个链表的群移操作。所以它移动和修改的效率非常高，为 O(1)，但也因为这样的结构，导致了你要访问整个链表中的任何一个位置，它的操作就不那么简单了。

### 跳表
鉴于前两种数据结构的局限性，计算机的先驱者们又优化推出了第三种数据结构，跳表。
跳表的话在工程中主要在大家熟知的redis里面进行运用。

跳表是为了优化或者说是补足链表的缺陷而设计出来的。在这里，它的优化思想就是所谓的升维，或者说是空间换时间。
我们知道二叉搜索算法能够高效的查询数据，但是需要一块连续的内存，而且增删改效率很低。跳表，是基于链表实现的一种类似“二分”的算法。它可以快速的实现增，删，改，查操作。同时，跳表是redis的一个核心组件，也同时被广泛地运用到了各种缓存的实现当中，它的主要优点，就是可以跟红黑树、AVL等平衡树一样，做到比较稳定地插入、查询与删除。理论插入查询删除的算法时间复杂度为O(logN)。
跳表的方式，其实思想是一样的，不过它实现得更为精致一些，在这里取得名字是索引。要加速的话，它就增加了一级索引，一级索引的意思就是它的指针指向头指针，它的下一个位置就指向next + 1的位置。
那么它的下一个位置的话，就指向next+1的位置；索引基于链表的话，链表是走向next的，它这里每次走向都是next+1，也就是说两倍的next。


简单来说，你可以认为next每次速度是1，而一级索引每次速度是2，跨的步伐更大。这样的话你要走到7之后只要跨两步即可。
所以。添加一级索引加速的话，相当于让速度乘上2，当然可以再增加索引，即第二级索引。在第一级索引的基础上，即每次跨4个元素，

由此类推，可以增加多级索引。那么有限制吗，理论上最多可以增加 log2n 个级索引，n是元素长度。如图，走到62的话，就可以直接从第五级索引开始走，显然比原来少了很多步骤。这里的时间复杂度也没有降到 O(1)，不过它的思想即升维+空间换时间，也是其他数据结构经常使用到的。
时间复杂度


## 时间复杂度分析


也就是从最朴素的原始链表O(n)的时间复杂度降到了log2n的时间复杂度，同时这已经是一个很大的改进了。
现实中跳表的形态
现实中使用跳表，它会由于这个元素的增加和删除导致它的索引，有些数并不是完全非常工整的。最后经过了多次改动之后，它最后索引有些地方会跨几步，有些地方会少跨只跨两步，这就因为里面的一些元素，会被增加和删除了，而且它的维护成本相对较高。也就是说当你增加一个元素的时候，你会把它的索引更新一遍；若要删除一个元素的时候，你需要把它的索引全部更新一遍。
在这种过程中它进行增加和删除的话，它的时间复杂度就变成了 logN 了。

如图，虽然它的空间是O(n)的，但是比起原始的链表，在空间复杂度方面肯定要多不少，多的就是上面这层节点，只不过它每一层的话都是除以二来进行收敛。所以最后它的复杂度上面还是 N 这个数量级的复杂度。
## 工程中应用
### LRU缓存算法
在408里面的操作系统学科有更为专业的解释。在计算机存储层次结构中，低一层的存储器都可以看做是高一层的缓存。比如Cache是内存的缓存，内存是硬盘的缓存，硬盘是网络的缓存等等。
缓存可以有效地解决存储器性能与容量的这对矛盾，但绝非看上去那么简单。如果缓存算法设计不当，非但不能提高访问速度，反而会使系统变得更慢。
从本质上来说，缓存之所以有效是因为程序和数据的局部性（locality）。程序会按固定的顺序执行，数据会存放在连续的内存空间并反复读写。这些特点使得我们可以缓存那些经常用到的数据，从而提高读写速度。
缓存的大小是固定的，它应该只保存最常被访问的那些数据。然而未来不可预知，我们只能从过去的访问序列做预测，于是就有了各种各样的缓存替换策略。本文介绍一种简单的缓存策略，称为最近最少使用（LRU，Least Recently Used）算法。
我们以内存访问为例解释缓存的工作原理。假设缓存的大小固定，初始状态为空。每发生一次读内存操作，首先查找待读取的数据是否存在于缓存中，若是，则缓存命中，返回数据；若否，则缓存未命中，从内存中读取数据，并把该数据添加到缓存中。向缓存添加数据时，如果缓存已满，则需要删除访问时间最早的那条数据，这种更新缓存的方法就叫做LRU。
实现LRU时，我们需要关注它的读性能和写性能，理想的LRU应该可以在O(1)的时间内读取一条数据或更新一条数据，也就是说读写的时间复杂度都是O(1)。
此时很容易想到使用HashMap，根据数据的键访问数据可以达到O(1)的速度。但是更新缓存的速度却无法达到O(1)，因为需要确定哪一条数据的访问时间最早，这需要遍历所有缓存才能找到。
因此，我们需要一种既按访问时间排序，又能在常数时间内随机访问的数据结构。
这可以通过HashMap+双向链表实现。HashMap保证通过key访问数据的时间为O(1)，双向链表则按照访问时间的顺序依次穿过每个数据。之所以选择双向链表而不是单链表，是为了可以从中间任意结点修改链表结构，而不必从头结点开始遍历。
如下图所示，黑色部分为HashMap的结构，红色箭头则是双向链表的正向连接（逆向连接未画出）。可以清晰地看到，数据的访问顺序是1->3->5->6->10。我们只需要在每次访问过后改变链表的连接顺序即可。
图片

实现代码如下
```java
/**
 * @author wjg
 * 
 * LRU（Least Recently Used）缓存算法
 * 使用HashMap+双向链表，使get和put的时间复杂度达到O(1)。
 * 读缓存时从HashMap中查找key，更新缓存时同时更新HashMap和双向链表，双向链表始终按照访问顺序排列。
 *
 */
public class LRUCache {

    /**
     * @param args
     * 测试程序，访问顺序为[[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]，其中成对的数调用put，单个数调用get。
     * get的结果为[1],[-1],[-1],[3],[4]，-1表示缓存未命中，其它数字表示命中。
     */
    public static void main(String[] args) {

        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println(cache.get(1));
        cache.put(3, 3);
        System.out.println(cache.get(2));
        cache.put(4, 4);
        System.out.println(cache.get(1));
        System.out.println(cache.get(3));
        System.out.println(cache.get(4));

    }

    // 缓存容量
    private final int capacity;
    // 用于加速缓存项随机访问性能的HashMap
    private HashMap<Integer, Entry> map;
    // 双向链表头结点，该侧的缓存项访问时间较早
    private Entry head;
    // 双向链表尾结点，该侧的缓存项访问时间较新
    private Entry tail;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        map = new HashMap<Integer, Entry>((int)(capacity / 0.75 + 1), 0.75f);
        head = new Entry(0, 0);
        tail = new Entry(0, 0);
        head.next = tail;
        tail.prev = head;
    }

    /**
     * 从缓存中获取key对应的值，若未命中则返回-1
     * @param key 键
     * @return key对应的值，若未命中则返回-1
     */
    public int get(int key) {
        if (map.containsKey(key)) {
            Entry entry = map.get(key);
            popToTail(entry);
            return entry.value;
        }
        return -1;
    }

    /**
     * 向缓存中插入或更新值
     * @param key 待更新的键
     * @param value 待更新的值
     */
    public void put(int key, int value) {
        if (map.containsKey(key)) {
            Entry entry = map.get(key);
            entry.value = value;
            popToTail(entry);
        }
        else {
            Entry newEntry = new Entry(key, value);
            if (map.size() >= capacity) {
                Entry first = removeFirst();
                map.remove(first.key);
            }
            addToTail(newEntry);
            map.put(key, newEntry);
        }
    }

    /**
     * 缓存项的包装类，包含键、值、前驱结点、后继结点
     * @author wjg
     *
     */
    class Entry {
        int key;
        int value;
        Entry prev;
        Entry next;

        Entry(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    // 将entry结点移动到链表末端
    private void popToTail(Entry entry) {
        Entry prev = entry.prev;
        Entry next = entry.next;
        prev.next = next;
        next.prev = prev;
        Entry last = tail.prev;
        last.next = entry;
        tail.prev = entry;
        entry.prev = last;
        entry.next = tail;
    }

    // 移除链表首端的结点
    private Entry removeFirst() {
        Entry first = head.next;
        Entry second = first.next;
        head.next = second;
        second.prev = head;
        return first;
    }

    // 添加entry结点到链表末端
    private void addToTail(Entry entry) {
        Entry last = tail.prev;
        last.next = entry;
        tail.prev = entry;
        entry.prev = last;
        entry.next = tail;
    }

}
```
每个方法和成员变量前都有中文注释，不必过多解释。值得一提的是，Java API中其实已经有数据类型提供了我们需要的功能，就是LinkedHashMap这个类。该类内部也是采用HashMap+双向链表实现的。使用这个类实现LRU就简练多了。
```java
/**
 * 
 * 一个更简单实用的LRUCache方案，使用LinkedHashMap即可实现。
 * LinkedHashMap提供了按照访问顺序排序的方案，内部也是使用HashMap+双向链表。
 * 只需要重写removeEldestEntry方法，当该方法返回true时，LinkedHashMap会删除最旧的结点。
 * 
 * @author wjg
 *
 */
public class LRUCacheSimple {

    /**
     * @param args
     */
    public static void main(String[] args) {
        LRUCacheSimple cache = new LRUCacheSimple(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println(cache.get(1));
        cache.put(3, 3);
        System.out.println(cache.get(2));
        cache.put(4, 4);
        System.out.println(cache.get(1));
        System.out.println(cache.get(3));
        System.out.println(cache.get(4));
    }

    private LinkedHashMap<Integer, Integer> map;
    private final int capacity;
    public LRUCacheSimple(int capacity) {
        this.capacity = capacity;
        map = new LinkedHashMap<Integer, Integer>(capacity, 0.75f, true){
            protected boolean removeEldestEntry(Map.Entry eldest) {
                return size() > capacity;
            }
        };
    }
    public int get(int key) {
        return map.getOrDefault(key, -1);
    }
    public void put(int key, int value) {
        map.put(key, value);
    }

}
```
只需要覆写LinkedHashMap的removeEldestEntry方法，在缓存已满的情况下返回true，内部就会自动删除最老的元素。
### Redis中的跳表
跳跃表（skiplist）是一种随机化的数据， 由 William Pugh 在论文《Skip lists: a probabilistic alternative to balanced trees》中提出， 跳跃表以有序的方式在层次化的链表中保存元素， 效率和平衡树媲美 —— 查找、删除、添加等操作都可以在对数期望时间下完成， 并且比起平衡树来说， 跳跃表的实现要简单直观得多。

表头（head）：负责维护跳跃表的节点指针。

跳跃表节点：保存着元素值，以及多个层。

层：保存着指向其他元素的指针。高层的指针越过的元素数量大于等于低层的指针，为了提高查找的效率，程序总是从高层先开始访问，然后随着元素值范围的缩小，慢慢降低层次。

表尾：全部由 NULL 组成，表示跳跃表的末尾。

因为跳跃表的定义可以在任何一本算法或数据结构的书中找到， 所以本章不介绍跳跃表的具体实现方式或者具体的算法， 而只介绍跳跃表在 Redis 的应用、核心数据结构和 API 。
为了满足自身的功能需要， Redis 基于 William Pugh 论文中描述的跳跃表进行了以下修改：

允许重复的 score 值：多个不同的 member 的 score 值可以相同。

进行对比操作时，不仅要检查 score 值，还要检查 member ：当 score 值可以重复时，单靠 score 值无法判断一个元素的身份，所以需要连 member 域都一并检查才行。

每个节点都带有一个高度为 1 层的后退指针，用于从表尾方向向表头方向迭代：当执行 ZREVRANGE 或 ZREVRANGEBYSCORE 这类以逆序处理有序集的命令时，就会用到这个属性。

// 这个修改版的跳跃表由 redis.h/zskiplist 结构定义：
```java
typedef struct zskiplist {

    // 头节点，尾节点
    struct zskiplistNode *header, *tail;

    // 节点数量
    unsigned long length;

    // 目前表内节点的最大层数
    int level;

} zskiplist;

// 跳跃表的节点由 redis.h/zskiplistNode 定义：

typedef struct zskiplistNode {

    // member 对象
    robj *obj;

    // 分值
    double score;

    // 后退指针
    struct zskiplistNode *backward;

    // 层
    struct zskiplistLevel {

        // 前进指针
        struct zskiplistNode *forward;

        // 这个层跨越的节点数量
        unsigned int span;

    } level[];

} zskiplistNode;
```
以下是操作这两个数据结构的 API ，API 的用途与相应的算法复杂度：

### 跳表的应用
和字典、链表或者字符串这几种在 Redis 中大量使用的数据结构不同， 跳跃表在 Redis 的唯一作用， 就是实现"有序集"数据类型。
跳跃表将指向有序集的 score 值和 member 域的指针作为元素， 并以 score 值为索引， 对有序集元素进行排序。
举个例子， 以下代码创建了一个带有 3 个元素的有序集：
```java
redis> ZADD s 6 x 10 y 15 z
(integer) 3

redis> ZRANGE s 0 -1 WITHSCORES
1) "x"
2) "6"
3) "y"
4) "10"
5) "z"
6) "15"
```
在底层实现中，Redis 为 x  y 和 z 三个 member 分别创建了三个字符串，值分别为 double 类型的 6 、10 和 15，然后用跳跃表将这些指针有序地保存起来，形成这样一个跳跃表：
图片

为了方便展示， 在图片中我们直接将 member 和 score 值包含在表节点中， 但是在实际的定义中， 因为跳跃表要和另一个实现有序集的结构（字典）分享 member 和 score 值， 所以跳跃表只保存指向 member 和 score 的指针。
总结
跳跃表是一种随机化数据结构，查找、添加、删除操作都可以在对数期望时间下完成。跳跃表目前在 Redis 的唯一作用，就是作为有序集类型的底层数据结构（之一，另一个构成有序集的结构是字典）。为了满足自身的需求，Redis 基于 William Pugh 论文中描述的跳跃表进行了修改，包括：
score 值可重复。

对比一个元素需要同时检查它的 score 和 memeber 。

每个节点带有高度为 1 层的后退指针，用于从表尾方向向表头方向迭代。

同时redis 使用跳表(skiplist)而不是使用 red-black 的主要原因是skiplist的复杂度和红黑树一样，而且实现起来更简单。并且在并发环境下skiplist有另外一个优势，红黑树在插入和删除的时候可能需要做一些rebalance的操作，这样的操作可能会涉及到整个树的其他部分，而skiplist的操作显然更加局部性一些，锁需要盯住的节点更少，因此在这样的情况下性能好一些。
##实战练习
### LeetCode283.移动零
题目说明：给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
```java
// 暴力解法
var moveZeroes = function(nums) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            if (i != j) {
                nums[i] = 0;
            }
            j++;
        }
    }
};
```
优化解法，滚雪球方式
```java
class Solution {
    public void moveZeroes(int[] nums) {
        int sonwBallSize = 0;
        for (int i = 0; i < nums; i++) {
            if (nums[i] == 0) {
                snowBallSize++;
            } else if (snowBallSize > 0) {
                int t = nums[i];
                nums[i] = 0;
                nums[i-snowBallSize] = t;
            } 
        }
    }
}
```
### LeetCode11. 盛最多水的容器
题目说明：给定 n 个非负整数 a1，a2，…，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。说明：你不能倾斜容器，且 n 的值至少为 2。
```java
// 普通解法，枚举
var maxArea = function(height) {
    var max = 0;
    for (var i = 0; i < height.length; ++i) {
        for (var j = i+1; j < height.length; ++j) {
            var area = (j - i) * Math.min(height[i], height[j]);
            max = Math.max(max, area)
        }
    }
    return max;
};
```
优化解法:首先，如果我们的左右边界选到最两边的两根木棒，宽度是最宽的，高度不一定是最高的，但是我们只要一开始左右两根木棒选在最左边、最右边的边界，然后慢慢再往里面慢慢收敛即可。
在向中间收敛的过程中，如果它的高度不及外面的木棒的话，那就不用再比较了，因为如果里面的高度都不及外面的高度，况且里面的收敛的过程中，内部宽度不及外面宽度的，所以面积肯定不如外面的，只要每次往里面收敛，只需要关注那么木棒高度更高的，然后相对高度更高的木棒，并且计算面积，即可得出结果。并且这种方面并没有嵌套循环，时间复杂度是O(n)的。(有点类似高数的夹逼准则)
```java
class Solution {
    public int maxArea(int[] height) {
        int max = 0;
        for (int i = 0, j = height.length - 1; i < j;) {
            int minHeight = height[i] < height[j] ? height[i++] : height[j--];
            int area = (j - i + 1) * minHeight;
            max = Math.max(max, area);
        }
        return max;
    }
}
```
双指针解法,就是要想矩阵面积最大化，两条垂直线的距离越远越好，两条垂直线的最短长度也要越长越好。
```java
class Solution {
    public int maxArea(int[] height) {
        int i = 0, j = height.length - 1, res = 0;
        while(i < j){
            res = height[i] < height[j] ? 
                Math.max(res, (j - i) * height[i++]): 
                Math.max(res, (j - i) * height[j--]); 
        }
        return res;
    }
}

// 时间复杂度 O(N)O(N)，双指针遍历一次底边宽度 NN 。
// 空间复杂度 O(1)O(1)，指针使用常数额外空间。
```
### LeetCode70. 爬楼梯
题目说明：是假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
拿到题目第一眼感觉可以用斐波那契数列，
```java
var climbStairs = function(n) {
    const sqrt_5 = Math.sqrt(5);
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,n + 1);
    return Math.round(fib_n / sqrt_5);
};
```
按照老师常说的，做题不能只做一遍，不能为了做题而做题。那么自我优化一遍后，使用DP思想，题目可以分成多个子问题，爬第n阶楼梯的方法数量，等于两部分之和，即爬上 n-1 阶楼梯的方法数量加上爬上 n−2 阶楼梯的方法数量，可以得出公式 
```java
dp[n]  =  dp[n-1] + dp[n-2]dp[n] = dp[n−1] + dp[n−2]
var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
```
### LeetCode15. 三数之和
题目描述：给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。注意：答案中不可以包含重复的三元组。
首先这一题是leetcode第一题两数之和的升级版，拿到题目稍加思考可以得出，可以使用三层循环暴力解决；或者使用hash表来记录a,b,a+b=c来解答；或者使用双指针左右推进解答。暴力法搜索为 O(N^3)时间复杂度，可通过双指针动态消去无效解来优化效率。固定 3 个指针中最左（最小）数字的指针 k，双指针 i，j 分设在数组索引 (k, len(nums))两端，通过双指针交替向中间移动，记录对于每个固定指针 k 的所有满足 nums[k] + nums[i] + nums[j] == 0 的 i,j 组合：

第三种解法如下：
```java
class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ans = new ArrayList();
        int len = nums.length;
        if (nums == null || len < 3) return ans;
        Arrays.sort(nums); // 排序
        for (int i = 0; i < len ; i++) {
            if (nums[i] > 0) break;    
            // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
            if (i > 0 && nums[i] == nums[i-1]) continue; // 去重
            int L = i+1;
            int R = len-1;
            while(L < R) {
                int sum = nums[i] + nums[L] + nums[R];
                if (sum == 0) {
                    ans.add(Arrays.asList(nums[i],nums[L],nums[R]));
                    while (L<R && nums[L] == nums[L+1]) L++; // 去重
                    while (L<R && nums[R] == nums[R-1]) R--; // 去重
                    L++;
                    R--;
                }
                else if (sum < 0) L++;
                else if (sum > 0) R--;
            }
        }        
        return ans;
    }
}
```
### LeetCode141. 环形链表
给定一个链表，判断链表中是否有环。为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。
解法：快慢指针，慢指针走一步，快指针走两步，只要没有环，两指针永远不会相遇(重叠)。
```java
public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) {
        return false;
    }
    ListNode slow = head;
    ListNode fast = head.next;
    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}
// 时间复杂度为 O(N+K)，也就是 O(n)
// 空间复杂度为 O(1)
```