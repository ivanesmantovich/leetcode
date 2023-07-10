// Largest Rectangle in Histogram (https://leetcode.com/problems/largest-rectangle-in-histogram)
// Leetcode Solution: https://www.youtube.com/watch?v=zx5Sw9130L0
// Time: O(n), Space: O(n)

/*
Обьяснение простым языком:
    Нас интересуют ПРЯМОУГОЛЬНИКИ (крыша РОВНАЯ), бугры не считаются.
    Это Trapping Rain Water (задача с бассейнами, хард, который я решил) наоборот.
    Считаем не размер "впадин" (все, что ниже границ, между ними), а размер "гор" (все, что выше границ, между ними)
    Когда находим правую границу (колонну ниже последней), то компьютим все закончившиеся горы

Алгоритм:
    Инит: largestArea(0)    stack([])
    1. Цикл rightBorderIdx по heights:
        2. leftBorderIdx = rightBorderIdx
        3. Пока в стэке есть элементы и колонна которую мы сейчас встретили ниже чем последняя колонна в стэке:
            4. Достаем гору из стэка [areaStartIdx, areaHeight] = stack.pop()
            5. Компьютим ее currArea = areaHeight * (rightBorderIdx - areaStartIdx)
            6. Обновляем максимум
            7. Начало новой горы сдвигается как можно дальше влево до тех пор пока
               в стэке есть колонны выше той, на которую сейчас наткнулись leftBorderIdx = areaStartIdx
        8. Пушим в стэк новую гору
    9. Пока стэк не пуст повторяем со всем содержимым 4-6

    return largestArea
*/

function largestRectangleArea(heights: number[]): number {
    let largestArea = 0
    let stack = []

    for (
        let rightBorderIdx = 0;
        rightBorderIdx < heights.length;
        rightBorderIdx++
    ) {
        let leftBorderIdx = rightBorderIdx // 2

        while (
            stack.length > 0 &&
            stack[stack.length - 1][1] > heights[rightBorderIdx]
        ) {
            const [areaStartIdx, areaHeight] = stack.pop() // 4
            const currArea = areaHeight * (rightBorderIdx - areaStartIdx) // 5
            largestArea = Math.max(largestArea, currArea) // 6
            leftBorderIdx = areaStartIdx // 7
        }
        stack.push([leftBorderIdx, heights[rightBorderIdx]]) // 8
    }

    while (stack.length) {
        const [areaStartIdx, areaHeight] = stack.pop() // 9
        const currArea = areaHeight * (heights.length - areaStartIdx)
        largestArea = Math.max(largestArea, currArea)
    }

    return largestArea
}
