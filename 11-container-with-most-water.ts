// Container With Most Water (https://leetcode.com/problems/container-with-most-water)
// Leetcode Solution: https://www.youtube.com/watch?v=UuiTKBwPgAo
// Time: O(n), Space: O(1)

/*
Краткий алгоритм:
Два пойнтера слева и справа (максимальная ширина), считаем площадь прямоугольника и ищем максимальную,
Двигаем тот столбик, что ниже (как best time to sell stock)

Полный алгоритм:
1. Два пойнтера слева и справа (ищем максимальную площадь, для этого ширина должна быть максимальной)
2. While left < right
3. Считаем текущую высоту, берем высоту меньшего из двух столбцов
4. Считаем текущую ширину, right - left
5. Считаем currentArea умножив высоту на ширину, если currentArea больше maxArea, обновляем maxArea
6. Если левый столбик ниже правого, то двигаем левый, иначе двигаем правый (как в best time to sell stock)
7. Возвращаем maxArea
*/

function maxArea(height: number[]): number {
    let maxArea = 0

    let left = 0
    let right = height.length - 1 // 1
    while (left < right) {
        const currentHeight =
            height[left] < height[right] ? height[left] : height[right] // 3
        const currentWidth = right - left // 4
        const currentArea = currentHeight * currentWidth
        if (currentArea > maxArea) maxArea = currentArea // 5

        if (height[left] < height[right]) left++ // 6
        else right--
    }

    return maxArea // 7
}
