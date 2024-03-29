// Binary Search (https://leetcode.com/problems/remove-element)
// Leetcode Solution: https://www.youtube.com/watch?v=Pcd1ii9P9ZI
// Time: O(log n), Space: O(1)

function search(nums: number[], target: number): number {
    let left = 0,
        right = nums.length - 1

    while (left <= right) {
        const middle = Math.round((left + right) / 2)
        const guess = nums[middle]

        const isTarget = guess === target
        if (isTarget) return middle

        const isTargetGreater = guess < target
        if (isTargetGreater) left = middle + 1

        const isTargetSmaller = guess > target
        if (isTargetSmaller) right = middle - 1
    }

    return -1
}
