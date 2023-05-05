// Reverse Linked List (https://leetcode.com/problems/reverse-linked-list/)
// Leetcode Solution: https://www.youtube.com/watch?v=G0_I-ZF0S38
// Time: O(n), Space: O(1)

/*
Краткий алгоритм:
---
*/

/*
Полный алгоритм:
1. Инициализируем prev = null
2. Цикл while (head)
3. Сохраняем "платформу для прыжка" на следующий
4. Разворачиваем стрелку
5. Прошлый становится текущим
6. Текущий прыгает на следующий
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from './classes/ListNode'

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null // 1

    while (head) {
        const jump = head.next // 3
        head.next = prev // 4
        prev = head // 5
        head = jump // 6
    }
    return prev
}
