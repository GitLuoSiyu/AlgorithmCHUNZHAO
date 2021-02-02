## 学习笔记
本周虽然上的是树、递归、回溯。不过因为上周的数组、栈的内容太多，我还没复习完，所以一起总结掉。

栈，线性表的一种特殊的存储结构。与学习过的线性表的不同之处在于栈只能从表的固定一端对数据进行插入和删除操作，另一端是封死的。由于栈只有一边开口存取数据，称开口的那一端为“栈顶”，封死的那一端为“栈底”，好比子弹夹只有一个口可以放子弹和取子弹。
图片

特点是遵循"先进后出"原则。既然栈也是线性表，那么它就同样有线性表的两种表示形式：顺序栈、 链式栈。两者的区别在于存储的数据元素在物理结构上是否是相互紧挨着的。顺序栈存储元素预先申请连续的存储单元；链栈需要即申请，数据元素不紧挨着。
### 单调栈
单调栈实际上就是栈，只是利用了一些巧妙的逻辑，使得每次新元素入栈后，栈内的元素都保持有序（单调递增或单调递减）。
单调栈用途不太广泛，只处理一种典型的问题，叫做 Next Greater Element。本文用讲解单调队列的算法模版解决这类问题，并且探讨处理「循环数组」的策略。
首先，讲解 Next Greater Number 的原始问题：给你一个数组，返回一个等长的数组，对应索引存储着下一个更大元素，如果没有更大的元素，就存 -1。不好用语言解释清楚。
EG：给定一个数组 [2,1,2,4,3]，返回数组 [4,2,4,-1,-1]。
解释：第一个 2 后面比 2 大的数是 4; 1 后面比 1 大的数是 2；第二个 2 后面比 2 大的数是 4; 4 后面没有比 4 大的数，填 -1；3 后面没有比 3 大的数，填 -1。
传统的暴力解法很好想到，即对每个元素后面都进行扫描，找到第一个更大的元素就行了。但是暴力解法的时间复杂度是 O(n^2)，示例代码如下。
```java
// 单调队列解决问题的模板
vector<int> nextGreaterElement(vector<int>& nums) {
    vector<int> ans(nums.size()); // 存放答案的数组
    stack<int> s;
    for (int i = nums.size() - 1; i >= 0; i--) { // 倒着往栈里放
        while (!s.empty() && s.top() <= nums[i]) { // 判定个子高矮
            s.pop(); // 矮个起开，反正也被挡着了。。。
        }
        ans[i] = s.empty() ? -1 : s.top(); // 这个元素身后的第一个高个
        s.push(nums[i]); // 进队，接受之后的身高判定吧！
    }
    return ans;
}
```
for 循环要从后往前扫描元素，因为我们借助的是栈的结构，倒着入栈，其实是正着出栈。while 循环是把两个“高个”元素之间的元素排除，因为他们的存在没有意义，前面挡着个“更高”的元素，所以他们不可能被作为后续进来的元素的 Next Great Number 了。
这个算法的时间复杂度不是那么直观，如果你看到 for 循环嵌套 while 循环，可能认为这个算法的复杂度也是 O(n^2)，但是实际上这个算法的复杂度只有 O(n)。
分析它的时间复杂度，要从整体来看：总共有 n 个元素，每个元素都被 push 入栈了一次，而最多会被 pop 一次，没有任何冗余操作。所以总的计算规模是和元素规模 n 成正比的，也就是 O(n) 的复杂度。
EG：给定一个数组 T = [73, 74, 75, 71, 69, 72, 76, 73]，返回 [1, 1, 4, 2, 1, 1, 0, 0] 。
这类问题本质上也是找 Next Greater Number，只不过现在不是问你 Next Greater Number 是多少，而是问你当前距离 Next Greater Number 的距离而已。相同类型的问题，相同的思路，直接调用单调栈的算法模板，稍作改动就可以啦，直接上代码了。
```java
vector<int> dailyTemperatures(vector<int>& T) {
    vector<int> ans(T.size());
    stack<int> s; // 这里放元素索引，而不是元素
    for (int i = T.size() - 1; i >= 0; i--) {
        while (!s.empty() && T[s.top()] <= T[i]) {
            s.pop();
        }
        ans[i] = s.empty() ? 0 : (s.top() - i); // 得到索引间距
        s.push(i); // 加入索引，而不是元素
    }
    return ans;
}
```
单调栈讲解完毕。下面开始另一个重点：如何处理「循环数组」。同样是 Next Greater Number，现在假设给你的数组是个环形的，如何处理？
EG：给定一个数组 [2,1,2,4,3]，返回数组 [4,2,4,-1,4]。
拥有了环形属性，最后一个元素 3 绕了一圈后找到了比自己大的元素 4 。首先，计算机的内存都是线性的，没有真正意义上的环形数组，但是我们可以模拟出环形数组的效果，一般是通过 % 运算符求模（余数），获得环形特效：
```java
int[] arr = {1,2,3,4,5};
int n = arr.length, index = 0;
while (true) {
    print(arr[index % n]);
    index++;
}
```
回到 Next Greater Number 的问题，增加了环形属性后，问题的难点在于：这个 Next 的意义不仅仅是当前元素的右边了，有可能出现在当前元素的左边（如上例）。
明确问题，问题就已经解决了一半了。我们可以考虑这样的思路：将原始数组“翻倍”，就是在后面再接一个原始数组，这样的话，按照之前“比身高”的流程，每个元素不仅可以比较自己右边的元素，而且也可以和左边的元素比较了。
怎么实现呢？你当然可以把这个双倍长度的数组构造出来，然后套用算法模板。但是，我们可以不用构造新数组，而是利用循环数组的技巧来模拟。直接看代码吧：
```java
vector<int> nextGreaterElements(vector<int>& nums) {
    int n = nums.size();
    vector<int> res(n); // 存放结果
    stack<int> s;
    // 假装这个数组长度翻倍了
    for (int i = 2 * n - 1; i >= 0; i--) {
        while (!s.empty() && s.top() <= nums[i % n])
            s.pop();
        res[i % n] = s.empty() ? -1 : s.top();
        s.push(nums[i % n]);
    }
    return res;
}
```
### 队列
队列是一种先入先出的数据结构，在 FIFO 数据结构中，将首先处理添加到队列中的第一个元素。插入（insert）操作也称作入队（enqueue），新元素始终被添加在队列的末尾。删除（delete）操作也被称为出队（dequeue)。你只能移除第一个元素。
图片

### 单调队列
上面介绍了栈与单调栈，与之对应的，队列也有一种类似的数据结构「单调队列」。这里直接上一道leetcode题，239题滑动窗口最大值，
题目描述：给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。返回滑动窗口中的最大值。
图片

这道题不复杂，难点在于如何在 O(1) 时间算出每个「窗口」中的最大值，使得整个算法在线性时间完成。在之前我们探讨过类似的场景，得到一个结论：
在一堆数字中，已知最值，如果给这堆数添加一个数，那么比较一下就可以很快算出最值；但如果减少一个数，就不一定能很快得到最值了，而要遍历所有数重新找最值。
回到这道题的场景，每个窗口前进的时候，要添加一个数同时减少一个数，所以想在 O(1) 的时间得出新的最值，就需要「单调队列」这种特殊的数据结构来辅助了。
一个普通的队列一定有这两个操作：
```java
class Queue {
    void push(int n);
    // 或 enqueue，在队尾加入元素 n
    void pop();
    // 或 dequeue，删除队头元素
}
一个「单调队列」的操作也差不多：
class MonotonicQueue {
    // 在队尾添加元素 n
    void push(int n);
    // 返回当前队列中的最大值
    int max();
    // 队头元素如果是 n，删除它
    void pop(int n);
}
```
当然，这几个 API 的实现方法肯定跟一般的 Queue 不一样，不过我们暂且不管，而且认为这几个操作的时间复杂度都是 O(1)，先把这道「滑动窗口」问题的解答框架搭出来：
```java
vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    MonotonicQueue window;
    vector<int> res;
    for (int i = 0; i < nums.size(); i++) {
        if (i < k - 1) { //先把窗口的前 k - 1 填满
            window.push(nums[i]);
        } else { // 窗口开始向前滑动
            window.push(nums[i]);
            res.push_back(window.max());
            window.pop(nums[i - k + 1]);
            // nums[i - k + 1] 就是窗口最后的元素
        }
    }
    return res;
}
```
首先搭建通用框架，接下来开始重头戏，单调队列的实现。首先我们要认识另一种数据结构：deque，即双端队列
```java
class deque {
    // 在队头插入元素 n
    void push_front(int n);
    // 在队尾插入元素 n
    void push_back(int n);
    // 在队头删除元素
    void pop_front();
    // 在队尾删除元素
    void pop_back();
    // 返回队头元素
    int front();
    // 返回队尾元素
    int back();
}
···
而且，这些操作的复杂度都是 O(1)。这其实不是啥稀奇的数据结构，用链表作为底层结构的话，很容易实现这些功能。
「单调队列」的核心思路和「单调栈」类似。单调队列的 push 方法依然在队尾添加元素，但是要把前面比新元素小的元素都删掉：
```java
class MonotonicQueue {
private:
    deque<int> data;
public:
    void push(int n) {
        while (!data.empty() && data.back() < n) 
            data.pop_back();
        data.push_back(n);
    }
};
···
你可以想象，加入数字元素的大小代表人的体重，把前面体重不足的都压扁了，直到遇到更大的量级才停住。如果每个元素被加入时都这样操作，最终单调队列中的元素大小就会保持一个单调递减的顺序，因此我们的 max() API 可以可以这样写：
```java
int max() {
    return data.front();
}
pop() API 在队头删除元素 n ：
void pop(int n) {
    if (!data.empty() && data.front() == n)
        data.pop_front();
}
···
之所以要判断 data.front() == n，是因为我们想删除的队头元素 n 可能已经被「压扁」了，这时候就不用删除了。
```java
// 完整的解题代码
class MonotonicQueue {
private:
    deque<int> data;
public:
    void push(int n) {
        while (!data.empty() && data.back() < n) 
            data.pop_back();
        data.push_back(n);
    }

    int max() { return data.front(); }

    void pop(int n) {
        if (!data.empty() && data.front() == n)
            data.pop_front();
    }
};

vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    MonotonicQueue window;
    vector<int> res;
    for (int i = 0; i < nums.size(); i++) {
        if (i < k - 1) { //先填满窗口的前 k - 1
            window.push(nums[i]);
        } else { // 窗口向前滑动
            window.push(nums[i]);
            res.push_back(window.max());
            window.pop(nums[i - k + 1]);
        }
    }
    return res;
}
···
### 相关时间复杂度
读者可能疑惑，push 操作中含有 while 循环，时间复杂度不是 O(1) 呀，那么本算法的时间复杂度应该不是线性时间吧？
单独看 push 操作的复杂度确实不是 O(1)，但是算法整体的复杂度依然是 O(N) 线性时间。要这样想，nums 中的每个元素最多被 push_back 和 pop_back 一次，没有任何多余操作，所以整体的复杂度还是 O(N)。
空间复杂度就很简单了，就是窗口的大小 O(k)。
有的读者可能觉得「单调队列」和「优先级队列」比较像，实际上差别很大的。单调队列在添加元素的时候靠删除元素保持队列的单调性，相当于抽取出某个函数中单调递增（或递减）的部分；而优先级队列（二叉堆）相当于自动排序，差别大了去了。
### Stack & Queue关键点
它的整个添加删除操作皆为O(1)的，但是查询操作为O(n)，因为它是无序的，虽然在这个数据结构外面再加一个哈希表，可以增加查询速度，但是它就会变成另一个复合数据结构。

### 双端队列


简单理解，就是双端都可以进出的队列，插入和删除操作都是O(1)，查询操作仍是O(n)。
### 循环队列
此前，我们提供了一种简单但低效的队列实现。更有效的方法是使用循环队列，我们可以使用固定大小的数组和两个指针来指示起始位置和结束位置。目的是重用我们之前提到的被浪费的存储。
Stack、Queue、Deque的工程实现
### Stack
在Java源码中，public class stack的底层实现是一个Vector，Vector可以想成一个ArrayList，但是它和ArrayList的区别在于它是线程安全的。在Java10和Java12中可以看到，它推荐在工程中如果要用到后进先出的数据机构的话，建议使用deque而不是stack。


主要的api包括 empty()、peek()、pop()、push()、search(Object)
```java
// Java stack 示例代码
Stack<Integer>stack = new Stack<>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
System.out.println(stack);
System.out.println(stack.search(4));

stack.pop();
stack.pop();
Integer topElement = stack.peek();
SYstem.out.println(topElement);
System.out.println("3的位置" + stack.search(3));
```
Queue
queue本身在java中只是一个接口，java底层实现的类有多种多样的封装好的的queue，在Java中queue的使用主要提供了2组接口，其中add(e)、remove()、element()执行失败会抛出异常；而offer(e)、poll()、peek()执行失败则会返回一个特殊值。


主要的api如图所示：add(e)、element()、offer(E)、peek()、poll()、remove()
```java
// Java queue 示例代码
Queue<String>queue = new LinkedList<String>();
queue.offer("one");
queue.offer("two");
queue.offer("three");
queue.offer("four");
System.out.println(queue);

String polledElement = queue.poll();
System.out.println(polledElement);
System.out.println(queue);

String peekedElement = queue.peek();
System.out.println(peekedElement);
System.out.println(queue);

while(queue.size() > 0) {
    System.out.println(queue.poll());
}
```
###Deque
在java里，deque本身也是一个Interface，封装好的主要类有ArrayDeque、ConcurrentListedDeque、LinkedBlockingDeque、LinkedList
```java
// java deque 示例代码
Deque<String>deque = new LinkedList<String>();
deque.push("a");
deque.push("b");
deque.push("c");
System.out.println(deque);

String str = deque.peek();
System.out.println(str);
System.out.println(deque);

while(deque.size() > 0) {
    System.out.println(deque.pop());
}
System.out.println(deque);
```
### Priority Queue
优先队列的插入操作是O(1)，但取出操作是O(logN)按照元素的优先级取出。底层具体实现得数据结构较为多样和复杂：heap、bst、treap。
栈与队列的互相转换
队列是一种先进先出的数据结构，栈是一种先进后出的数据结构，形象一点就是这样：
这两种数据结构底层其实都是数组或者链表实现的，只是 API 限定了它们的特性，那么今天就来看看如何使用「栈」的特性来实现一个「队列」，如何用「队列」实现一个「栈」。
用栈实现队列
首先，队列的 API 如下：
```java
class MyQueue {

    /** 添加元素到队尾 */
    public void push(int x);

    /** 删除队头的元素并返回 */
    public int pop();

    /** 返回队头元素 */
    public int peek();

    /** 判断队列是否为空 */
    public boolean empty();
}
```
常用的方法是使用两个栈 s1, s2 实现一个队列
```java
class MyQueue {
    private Stack<Integer> s1, s2;

    public MyQueue() {
        s1 = new Stack<>();
        s2 = new Stack<>();
    }
    // ...
}
```
当调用 push 让元素入队时，只要把元素压入 s1 即可，比如说 push 进 3 个元素分别是 1,2,3，那么底层结构就是这样：
```java
/** 添加元素到队尾 */
public void push(int x) {
    s1.push(x);
}
```
那么如果这时候使用 peek 查看队头的元素怎么办呢？按道理队头元素应该是 1，但是在 s1 中 1 被压在栈底，现在就要轮到 s2 起到一个中转的作用了：当 s2 为空时，可以把 s1 的所有元素取出再添加进 s2，这时候 s2 中元素就是先进先出顺序了。
```java
/** 返回队头元素 */
public int peek() {
    if (s2.isEmpty())
        // 把 s1 元素压入 s2
        while (!s1.isEmpty())
            s2.push(s1.pop());
    return s2.peek();
}
```
同理，对于 pop 操作，只要操作 s2 即可
```java
/** 删除队头的元素并返回 */
public int pop() {
    // 先调用 peek 保证 s2 非空
    peek();
    return s2.pop();
}
```
若两个栈都为空的话，则说明队列为空：
```java
/** 判断队列是否为空 */
public boolean empty() {
    return s1.isEmpty() && s2.isEmpty();
}
```
至此，就用栈结构实现了一个队列，核心思想是利用两个栈互相配合。值得一提的是，这几个操作的时间复杂度是多少呢？有点意思的是 peek 操作，调用它时可能触发 while 循环，这样的话时间复杂度是 O(N)，但是大部分情况下 while 循环不会被触发，时间复杂度是 O(1)。由于 pop 操作调用了 peek，它的时间复杂度和 peek 相同。
像这种情况，可以说它们的最坏时间复杂度是 O(N)，因为包含 while 循环，可能需要从 s1 往 s2 搬移元素。
但是它们的均摊时间复杂度是 O(1)，这个要这么理解：对于一个元素，最多只可能被搬运一次，也就是说 peek 操作平均到每个元素的时间复杂度是 O(1)。
用队列实现栈
如果说双栈实现队列比较巧妙，那么用队列实现栈就比较简单粗暴了，只需要一个队列作为底层数据结构。首先看下栈的 API：
```java
class MyStack {

    /** 添加元素到栈顶 */
    public void push(int x);

    /** 删除栈顶的元素并返回 */
    public int pop();

    /** 返回栈顶元素 */
    public int top();

    /** 判断栈是否为空 */
    public boolean empty();
}
```
先说 push API，直接将元素加入队列，同时记录队尾元素，因为队尾元素相当于栈顶元素，如果要 top 查看栈顶元素的话可以直接返回：
```java
class MyStack {
    Queue<Integer> q = new LinkedList<>();
    int top_elem = 0;

    /** 添加元素到栈顶 */
    public void push(int x) {
        // x 是队列的队尾，是栈的栈顶
        q.offer(x);
        top_elem = x;
    }

    /** 返回栈顶元素 */
    public int top() {
        return top_elem;
    }
}
```
我们的底层数据结构是先进先出的队列，每次 pop 只能从队头取元素；但是栈是后进先出，也就是说 pop API 要从队尾取元素。
解决方法简单粗暴，把队列前面的都取出来再加入队尾，让之前的队尾元素排到队头，这样就可以取出了：
/** 删除栈顶的元素并返回 */
```java
public int pop() {
    int size = q.size();
    while (size > 1) {
        q.offer(q.poll());
        size--;
    }
    // 之前的队尾元素已经到了队头
    return q.poll();
}
```
这样实现还有一点小问题就是，原来的队尾元素被提到队头并删除了，但是 top_elem 变量没有更新，我们还需要一点小修改：
```java
/** 删除栈顶的元素并返回 */
public int pop() {
    int size = q.size();
    // 留下队尾 2 个元素
    while (size > 2) {
        q.offer(q.poll());
        size--;
    }
    // 记录新的队尾元素
    top_elem = q.peek();
    q.offer(q.poll());
    // 删除之前的队尾元素
    return q.poll();
}
```
最后，API empty 就很容易实现了，只要看底层的队列是否为空即可：
```java
/** 判断栈是否为空 */
public boolean empty() {
    return q.isEmpty();
}
```
用队列实现栈的话，pop 操作时间复杂度是 O(N)，其他操作都是 O(1)。