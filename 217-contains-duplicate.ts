// Contains Duplicate (https://leetcode.com/problems/contains-duplicate/)

// Оптимальное решение (https://www.youtube.com/watch?v=3OamzN90kPg)
function containsDuplicate(nums: number[]): boolean {
    // 1. Создаем мап
    const numMap = new Map()
    // 2. Цикл по числам
    for (const num of nums) {
        // 3. Если число уже есть в мапе, то return true
        if (numMap.has(num)) return true
        // 4. Если числа нет в мапе, добавляем его в мап
        else numMap.set(num, true)
    }
    return false
}

// Time Complexity: O(n)
// Space Complexity: O(n)
