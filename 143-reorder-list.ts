function reorderList(head: ListNode | null): void {
    let [slow, fast] = [head, head]
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let second = slow.next // Got the second half
    slow.next = null // Cut the second half off

    // Reverse second half
    let prev = null
    while (second) {
        const jump = second.next
        second.next = prev
        prev = second
        second = jump
    }

    // At the end of reversing second is out of bounds
    second = prev

    // Merge two halfs
    while (second) {
        const jump = second.next
        second.next = head.next
        head.next = second
        head = second.next
        second = jump
    }
}
