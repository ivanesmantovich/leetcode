// Longest Consecutive Sequence (https://leetcode.com/problems/longest-consecutive-sequence/)
// Leetcode Solution: https://www.youtube.com/watch?v=P6RZZMu_maU
// Time: O(n), Space: O(n)

/*
Краткий алгоритм:

Полный алгоритм:
1. Делаем numSet из nums
2. for num of numSet:
    3. Идем пока не найдем начало стрика (if numSet.has(num - 1) то continue)
    4. else (нашли начало стрика):
        5. currentStreak = 1
        6. numInStreak = num
        7. Пока в numSet'е есть numInStreak + 1 инкрементируем numInStreak и currentStreak
    8. Сравниваем currentStreak и сохраняем новый longestStreak.

Возвращаем longestStreak
*/

function longestConsecutive(nums: number[]): number {
    let longestStreak = 0
    const numSet = new Set(nums) // 1

    for (const num of numSet) {
        const prevNum = num - 1

        // 3
        if (numSet.has(prevNum)) continue
        else {
            let currentStreak = 1 // 5
            let numInStreak = num // 6

            while (numSet.has(numInStreak + 1)) {
                numInStreak++
                currentStreak++ // 7
            }

            if (currentStreak > longestStreak) longestStreak = currentStreak // 8
        }
    }

    return longestStreak
}
