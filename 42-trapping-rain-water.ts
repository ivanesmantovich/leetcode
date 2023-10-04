// Trapping Rain Water (https://leetcode.com/problems/trapping-rain-water/)
// Leetcode Solution: https://www.youtube.com/watch?v=ZI2z5pq0TqA
// Time: O(n), Space: O(1)

/*
Краткий алгоритм:
Делаем первую колонну текущим началом и идем слева направо, если колонна меньше начала, то накапливаем воду
Иначе добавляем воду и делаем колонну новым началом. Если последняя колонна меньше начала, то не добавляем воду
и повторяем алгоритм справа налево до последнего начала

Полный алгоритм:
1. Инит allWater(0), currentWater(0), startHeight(height[0]) (начало текущего бассейна)
2. Цикл слева направо

        (обработка эдж-кейса)
        Если мы на последней колонне и она меньше, чем текущее начало, то у текущего бассейна нет конца, текущую воду нельзя добавлять
        Нам нужно еще раз пройти участок справа от текущего начала в обратную сторону
        Выливаем текущую воду, делаем endHeight = startHeight, делаем последнюю колонну текущим началом и идем справа налево
        Если column == endHeight, нашли конец бассейна, возвращаем allWater
        Пока не дошли до endHeight обрабатываем колонны как в шаге 3, 4

    3. Если column < startHeight, то это вода, currentWater += startHeight - column
    4. Иначе мы встретили стенку бассейна, выливаем currentWater в allWater и делаем текущую колонну новым началом (startHeight = column)
*/

function trap(height: number[]): number {
    let allWater = 0
    let currentWater = 0
    let startHeight = height[0] // 1

    const handleColumn = (column: number) => {
        if (column < startHeight) currentWater += startHeight - column
        else {
            allWater += currentWater
            currentWater = 0
            startHeight = column
        }
    }

    for (let i = 0; i < height.length; i++) {
        let column = height[i]
        handleColumn(column)

        // Edge-case, need to go back till the last startHeight
        if (i === height.length - 1 && column < startHeight) {
            const endHeight = startHeight
            startHeight = column
            currentWater = 0

            while (column < endHeight) {
                column = height[i]
                handleColumn(column)
                i--
            }

            return allWater
        }
    }

    return allWater
}
