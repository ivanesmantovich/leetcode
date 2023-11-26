import { ListNode } from './classes/ListNode'

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let beginning = new ListNode()
    let current = beginning

    let carry = 0
    while (l1 || l2 || carry) {
        const firstNum = l1 ? l1.val : 0
        const secondNum = l2 ? l2.val : 0

        // New digit
        const sum = firstNum + secondNum + carry // if we get 15...
        const digit = sum % 10 // then digit is 5
        carry = Math.floor(sum / 10) // and carry is 1

        current.next = new ListNode(digit)

        // Update pointers
        current = current.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }

    return beginning.next
}

// function curriedSum(a) {
//     return (b) => a + b
// }

// console.log(function curriedSum(3)(4)) // 7

function findDuplicated(arr: number[]): number[] {
    const dups: number[] = []
    const map = new Map()

    arr.forEach((num) => {
        if (map.has(num) && !dups.includes(num)) dups.push(num)
        else if (!map.has(num)) map.set(num, null)
    })

    return dups
}

let nums = [1, 2, 3, 4, 2, 3, 2] // [2, 3]

console.log(findDuplicated(nums))
