// Trapping Rain Water (https://leetcode.com/problems/trapping-rain-water/)
// Leetcode Solution: https://www.youtube.com/watch?v=ZI2z5pq0TqA
// Time: O(n), Space: O(1)

/*
Краткий алгоритм:
Делаем первую колонну текущим началом и идем слева направо, если колонна меньше начала, то накапливаем воду
Иначе добавляем воду и делаем колонну новым началом. Если последняя колонна меньше начала, то не добавляем воду
и повторяем алгоритм справа налево до последнего начала

Полный алгоритм:
1. Инициализируем allWater(0) и currentWater(0) для хранения воды, currentBeginning(height[0]) (начало текущего бассейна)
2. Цикл слева направо

(обработка эдж-кейса)
Если мы на последней колонне и она меньше, чем текущее начало, то у текущего бассейна нет конца, текущую воду нельзя добавлять
Нам нужно проверить участок справа от последнего "корректного" бассейна
Делаем target = currentBeginning, выливаем текущую воду (currentWater = 0), делаем последнюю колонну текущим началом и идем справа налево
Если column == target, то выливаем currentWater в allWater и возвращаем allWater
Пока не дошли до target обрабатываем колонны как в шаге 3, 4
Если дошли до самого начала, то это значит, что весь массив это один большой массив у которого правая сторона больше левой, выливаем в allWater, возвращаем

3. Если column < currentBeginning, то мы в бассейне, currentWater += currentBeginning - column
4. Иначе мы встретили конец бассейна, выливаем currentWater в allWater и делаем текущую колонну новым началом (currentBeginning = column)
*/

function trap(height: number[]): number {
    let allWater = 0
    let currentWater = 0
    let currentBeginning = height[0] // 1
    for (let i = 0; i < height.length; i++) {
        const column = height[i]

        // Edge-case, need to go back to the last currentBeginning
        if (i === height.length - 1 && column < currentBeginning) {
            const target = currentBeginning
            currentWater = 0
            currentBeginning = column
            for (let back = i; back > 0; back--) {
                const column = height[back]
                if (column === target) {
                    allWater += currentWater
                    return allWater
                }
                if (column < currentBeginning)
                    currentWater += currentBeginning - column
                else {
                    allWater += currentWater
                    currentWater = 0
                    currentBeginning = column
                }
            }
            allWater += currentWater
            return allWater
        }

        if (column < currentBeginning)
            currentWater += currentBeginning - column // 3
        else {
            allWater += currentWater // 4
            currentWater = 0
            currentBeginning = column
        }
    }
    return allWater
}
