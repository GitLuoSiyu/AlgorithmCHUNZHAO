/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummy = {
      val:0,
      next:null
    };
    let d = dummy;
    while (l1 || l2) {
      if (!l2 || (l1 && l1.val < l2.val)) {
        dummy.next = l1;
        l1 = l1.next;
      } else {
        dummy.next = l2;
        l2 = l2.next;
      }
        dummy = dummy.next;
      }
      return d.next;
  };