// Longest Consecutive Sequence (https://leetcode.com/problems/longest-consecutive-sequence/)
// Leetcode Solution: https://www.youtube.com/watch?v=P6RZZMu_maU
// Time: O(n), Space: O(n)

/*
Краткий алгоритм:
Превращаем nums в сет, цикл по числам, если в сете есть num -1, то streak = 0, while set.has(num + streak) streak++
*/

/*
Полный алгоритм:
1. Делаем сет из nums
2. Инит currentStreak и longestStreak (0)
3. for of цикл по nums
4. Отнимаем от текущего числа 1 и смотрим есть ли результат в сете, если нет, то это начало стрика
5. Начинаем считать стрик с нуля (currentStreak = 0)
6. While в сете есть текущее число + текущий стрик инкрементируем текущий стрик
7. Когда while кончился если текущий стрик больше longestStreak, то сохраняем новый longestStreak
*/

function longestConsecutive(nums: number[]): number {
    const conseqSet = new Set(nums) // 1

    let currentStreak = 0 // 2
    let longestStreak = 0
    for (const num of nums) {
        // 4
        if (!conseqSet.has(num - 1)) {
            currentStreak = 0 // 5
            while (conseqSet.has(num + currentStreak)) {
                currentStreak++ // 6
            }
            if (currentStreak > longestStreak) longestStreak = currentStreak // 7
        }
    }

    return longestStreak
}
