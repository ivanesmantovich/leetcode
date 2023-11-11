// Neetcode: https://www.youtube.com/watch?v=gBTe7lFR3vc

// Funny way with mutation
// function hasCycle(head: ListNode | null): boolean {
//     while (head) {
//         if (head.val === undefined) return true
//         head.val = undefined
//         head = head.next
//     }

//     return false
// }

// Traditional
function hasCycle(head: ListNode | null): boolean {
    let [slow, fast] = [head, head]

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) return true
    }

    return false
}
