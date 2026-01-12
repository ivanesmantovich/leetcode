function searchInsert(nums: number[], target: number): number {
    let left = 0,
        right = nums.length - 1

    while (left <= right) {
        const middle = Math.round((left + right) / 2)
        const guess = nums[middle]

        if (guess == target) return middle

        if (target > guess) left = middle + 1

        if (target < guess) right = middle - 1
    }

    return left
};