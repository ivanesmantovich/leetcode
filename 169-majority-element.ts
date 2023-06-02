// Majority Element (https://leetcode.com/problems/majority-element)
// Leetcode Solution: https://www.youtube.com/watch?v=7pnhv842keE
// Time: O(n), Space: O(1)

/*
Алгоритм:
Boyer-Moore algorithm. Алгоритм работает только потому что по условию ГАРАНТИРОВАННО,
что одна из цифр ВСТРЕТИТСЯ БОЛЬШЕ РАЗ, ЧЕМ ВСЕ ОСТАЛЬНЫЕ ЦИФРЫ МАССИВА ВМЕСТЕ ВЗЯТЫЕ

Цикл по nums:
    1. Если текущий count = 0, то берем num на который смотрим за answer.
    2. Если текущий answer = num на который смотрим, то count++, иначе count--

return answer
*/

function majorityElement(nums: number[]): number {
    let answer = 0
    let count = 0

    for (const num of nums) {
        if (count === 0) answer = num // 1

        if (answer === num) count++ // 2
        else count--
    }

    return answer
}
