/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @title: 2. 两数相加
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @desc: 时间复杂度O(N)，空间复杂度O(N)
 */
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode('head')
    let temp = node
    let add = 0
    let sum = 0

    while (l1 || l2) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
        temp.next = new ListNode(sum % 10);
        temp = temp.next;
        add = sum >= 10 ? 1 : 0;
        l1 && (l1 = l1.next)
        l2 && (l2 = l2.next)

    }
    add && (temp.next = new ListNode(add))
    return node.next

};