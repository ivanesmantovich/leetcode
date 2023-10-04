// Find Minimum in Rotated Sorted Array(https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
// Neetcode Solution: https://youtu.be/nIVW4P8b1VA
// Time: O(log(n)), Space: O(1)

/*
Обьяснение простым языком:
    Во входном массиве есть две части. ЛЮБОЙ ЭЛЕМЕНТ ИЗ ПРАВОЙ ЧАСТИ МЕНЬШЕ ЧЕМ ЛЮБОЙ ЭЛЕМЕНТ ИЗ ЛЕВОЙ ЧАСТИ
    Выполняя байнари серч нам нужно понимать в левой мы сейчас части или в правой.
    Если текущее число БОЛЬШЕ ИЛИ РАВНО чем первое число в массиве, то мы в ЛЕВОЙ части. (см. первую строчку)
    Если мы в левой части, то тогда нам нужно двигаться в правую часть в которой наименьшие элементы
    Если мы в правой части, то нам надо искать самый маленький ее элемент, он самый левый, движемся влево.
*/

function findMin(nums: number[]): number {
    const firstNum = nums[0]
    let min = firstNum

    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const middle = Math.round((left + right) / 2)
        const guess = nums[middle]

        min = Math.min(min, guess)

        const inLeftPart = guess >= firstNum
        if (inLeftPart) left = middle + 1
        else right = middle - 1
    }

    return min
}
