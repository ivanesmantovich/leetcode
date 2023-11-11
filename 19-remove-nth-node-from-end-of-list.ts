import { ListNode } from './classes/ListNode'

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head)
    let left = dummy
    let right = head

    // Нужно чтобы между левым и правым пойнтером было n расстояние
    while (n > 0) {
        right = right.next
        n -= 1
    }

    // тогда когда правый пойнтер дойдет до конца...
    while (right) {
        left = left.next
        right = right.next
    }

    // левый будет в нужном месте и нужно будет только передвинуть пойнтер
    left.next = left.next.next
    return dummy.next
}
