// Search in Rotated Sorted Array(https://leetcode.com/problems/search-in-rotated-sorted-array/)
// Neetcode Solution: https://leetcode.com/problems/search-in-rotated-sorted-array/
// Time: O(log(n)), Space: O(1)

/*
Обьяснение простым языком:
    Во входном массиве есть две части. ЛЮБОЙ ЭЛЕМЕНТ ИЗ ПРАВОЙ ЧАСТИ МЕНЬШЕ ЧЕМ ЛЮБОЙ ЭЛЕМЕНТ ИЗ ЛЕВОЙ ЧАСТИ

    Перед началом выполнения определяем в какой части находится цель.
    Если цель меньше первого элемента массива, то в правой
    Если цель больше последнего элемента массива, то в левой

    Выполняя байнари серч проверяем в какой мы сейчас части сравнивая guess с первым элементом.
    Если guess МЕНЬШЕ чем первое число в массиве, то мы в ПРАВОЙ части.
    Если guess БОЛЬШЕ ИЛИ РАВНО чем первое число в массиве, то мы в ЛЕВОЙ части.

    Если мы в левой части, а цель в правой, движемся в правую
    Иначе если мы в правой части, а цель в левой, движемся в левую
    Иначе (мы в правильной части) если guess меньше цели движемся вправо, иначе движемся влево
*/

function search(nums: number[], target: number): number {
    const firstNum = nums[0]
    const targetInRightPart = target < firstNum
    const targetInLeftPart = target > nums[nums.length - 1]

    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const middle = Math.round((left + right) / 2)
        const guess = nums[middle]

        if (guess === target) return middle

        const guessInRightPart = guess < firstNum
        const guessInLeftPart = guess >= firstNum

        if (guessInLeftPart && targetInRightPart) left = middle + 1
        else if (guessInRightPart && targetInLeftPart) right = middle - 1
        else {
            if (guess < target) left = middle + 1
            else right = middle - 1
        }
    }

    return -1
}
