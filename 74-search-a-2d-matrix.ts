// Search a 2D Matrix (https://leetcode.com/problems/remove-element)
// Leetcode Solution: https://www.youtube.com/watch?v=Pcd1ii9P9ZI
// Time: O(кол-во рядов * log n), Space: O(1)

/*
Обьяснение простым языком:
    Это необязательно, но я слегка модифицировал байнари серч.
    Если первый элемент > таргета, то false. Если последний < таргета, то false.

    Запускаем этот серч по всем массивам, если какой то возвращает true, то возврат true.
    Если прошли все и успеха нет, то возврат false.
*/

function searchMatrix(matrix: number[][], target: number): boolean {
    const binarySearchMod = (array: number[], target: number): boolean => {
        // Optimization
        if (array[0] > target) return false
        if (array[array.length - 1] < target) return false

        let left = 0
        let right = array.length - 1

        while (left <= right) {
            const middle = Math.round((left + right) / 2)
            const guess = array[middle]

            const isTarget = guess === target
            if (isTarget) return true

            const isTargetGreater = guess < target
            if (isTargetGreater) left = middle + 1

            const isTargetSmaller = guess > target
            if (isTargetSmaller) right = middle - 1
        }

        return false
    }

    for (const array of matrix) {
        if (binarySearchMod(array, target)) return true
    }
    return false
}
