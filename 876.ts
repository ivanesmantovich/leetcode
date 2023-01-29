// Middle of the Linked List

import { ListNode } from './classes/ListNode'

// Array solution
// function middleNode(head: ListNode | null): ListNode | null {
//     const nodes: ListNode[] = [];
//     let numberOfNodes: number = 0;
//     while (head) {
//         nodes.push(head);
//         numberOfNodes++;
//         head = head.next;
//     }
    
//     return nodes[Math.floor(numberOfNodes / 2)];
// }

// Slow and Fast Pointer solution
function middleNode(head: ListNode | null): ListNode | null {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next?.next;
    }
    
    return slow;
}