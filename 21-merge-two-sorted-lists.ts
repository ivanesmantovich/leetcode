// Merge Two Sorted Lists (https://leetcode.com/problems/merge-two-sorted-lists)
// Leetcode Solution: ...
// Time: O(...), Space: O(...)

/*
Краткий алгоритм:
...

Полный алгоритм:
...

*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    let dummy = new ListNode()
    let tail = dummy

    let firstCurrent = list1
    let secondCurrent = list2

    while (firstCurrent && secondCurrent) {
        if (firstCurrent.val <= secondCurrent.val) {
            tail.next = firstCurrent
            firstCurrent = firstCurrent.next
        } else {
            tail.next = secondCurrent
            secondCurrent = secondCurrent.next
        }

        tail = tail.next
    }

    if (firstCurrent) tail.next = firstCurrent
    else if (secondCurrent) tail.next = secondCurrent

    // dummy.next is result's head
    return dummy.next
}
