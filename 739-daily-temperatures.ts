// Daily Temperatures (https://leetcode.com/problems/daily-temperatures)
// Leetcode Solution: https://www.youtube.com/watch?v=cTBiBSnjO3c
// Time: O(n), Space: O(n)

/*
Краткий алгоритм:
Цикл по дням
пушим {idx, temp} каждого дня в стэк
while стэк не пуст и currTemp > lastStackDay.temp, pop день, записываем в ответ разницу в днях
СТЭК В ЭТОЙ ЗАДАЧЕ MONOTONICALLY DECREASING

Полный алгоритм:
Инит:
    Создаем массив для ответа длиной temperatures и наполняем его нулями
        answer = Array(temperatures.length).fill(0)
    Создаем стэк для дней
        dayStack: {idx: number, temp: number}[] = []

1. for i = 0; i < temperatures.length
    2. while dayStack не пустой и currTemp > последнийДеньDayStack.temp:
        3. достаем последний day стэка, day = dayStack.pop()
        4. считаем daysPassed, (i - day.idx)
        5. записываем разницу, answer[day.idx] = daysPassed
6. Пушим каждый день в стэк

return answer
*/

function dailyTemperatures(temperatures: number[]): number[] {
    const answer = Array(temperatures.length).fill(0)

    const dayStack: { idx: number; temp: number }[] = []

    for (let i = 0; i < temperatures.length; i++) {
        let currTemp = temperatures[i]

        while (
            dayStack.length &&
            currTemp > dayStack[dayStack.length - 1].temp
        ) {
            const day = dayStack.pop() // 3
            const daysPassed = i - day.idx // 4
            answer[day.idx] = daysPassed // 5
        }

        dayStack.push({ idx: i, temp: currTemp }) // 6
    }

    return answer
}
