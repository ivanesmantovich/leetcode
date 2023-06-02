// Remove Element (https://leetcode.com/problems/remove-element)
// Leetcode Solution: https://www.youtube.com/watch?v=Pcd1ii9P9ZI
// Time: O(n), Space: O(1)

/*
Краткий алгоритм:
Перемещаем все нужные цифры влево и двигаем левый пойнтер.

Полный алгоритм:
Инит:
    Пойнтер left = 0

1. Цикл i < nums.length; i++
    2. Если число не равно val
        3. Перемещаем его на left
        4. Двигаем left (left++)

return left
*/

function removeElement(nums: number[], val: number): number {
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[left] = nums[i] // 3
            left++ // 4
        }
    }

    return left
}
