/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;
        let next = null;

        while (current !== null) {
            // get next node and save it
            next = current.next;
            // direct link to previous node
            current.next = prev;
            // move previous pointer to current node
            prev = current
            // move current node to saved node (node that was originally next in linked list)
            current = next;
        }
        // prev ends on new head node in the final iteration of the while-loop so return that value (current will be pointing to null and loop finishes)
        return prev;
    }
}
