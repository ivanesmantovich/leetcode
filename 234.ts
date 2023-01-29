// Palindrome Linked List

import { ListNode } from './classes/ListNode'

// My solution[O(n)]
// -----------------------------------------------------------------------
// function isPalindrome(head: ListNode | null): boolean {
//     let currentNode: ListNode | null = head;
//     let forwardString: string = '';
//     let backwardString: string = '';

//     while (currentNode) {
//         forwardString = forwardString + currentNode.val.toString();
//         backwardString = currentNode.val.toString() + backwardString;
//         currentNode = currentNode?.next;
//     }
    
//     return forwardString === backwardString;
// };
// -----------------------------------------------------------------------


// O(1) solution
// -----------------------------------------------------------------------
function isPalindrome(head: ListNode | null): boolean {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (slow && fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let previousNode: ListNode | null = null;
    let currentNode: ListNode | null = slow;
    let nextNode: ListNode | null = null;
    
    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    
    let left: ListNode | null = head;
    let right: ListNode | null = previousNode;
    
    while (left && right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    return true;
};
// -----------------------------------------------------------------------