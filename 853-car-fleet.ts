// Car Fleet (https://leetcode.com/problems/car-fleet/)
// Leetcode Solution: https://www.youtube.com/watch?v=Pr6T-3yB9RM
// Time: O(n * log(n)), Space: O(n)

/*
Обьяснение простым языком:
    Дорога однополосная.
    Если одна машина догоняет другую, то они "обьединяются" (одна скорость и позиция).
    Если упростить, то догнавшая машина "исчезает".
    Как понять что одна машина догонит другую?
        Надо посчитать через какое время она дойдет до target'а. Если это время меньше, чем время у другой машины, то она ее догонит.

Алгоритм:
    1. Представляем машины в виде массива кортежей (position, speed), сортируем массив по возрастанию position
    2. Идем по массиву справа налево
        3. Получаем timeToTarget: (target - position) / speed
        4. Пушим в stack timeToTarget
        5. Если в стэке больше двух элементов и последний элемент (только что добавленный) меньше предпоследнего, то pop()

    return stack.length
*/

function carFleet(target: number, position: number[], speed: number[]): number {
    const carArray = position
        .map((pos, index) => [pos, speed[index]])
        .sort((a, b) => a[0] - b[0]) // 1

    const stack = []

    for (let i = carArray.length - 1; i > -1; i--) {
        const position = carArray[i][0]
        const speed = carArray[i][1]
        const timeToTarget = (target - position) / speed // 3

        stack.push(timeToTarget) // 4

        if (
            stack.length >= 2 &&
            stack[stack.length - 1] <= stack[stack.length - 2]
        )
            stack.pop() // 5
    }

    return stack.length
}
