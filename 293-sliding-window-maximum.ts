// Sliding Window Maximum (https://leetcode.com/problems/sliding-window-maximum)
// Leetcode Solution: https://www.youtube.com/watch?v=DfljaUwZsOk
// Time: O(n), Space: O(n)

/*

Decreasing Queue -
это очередь в которой левый элемент всегда является максимальным
а все остальные элементы упорядочены по убыванию
Достигаеся это при помощи того что
новые элементы добавляются в конец и прежде чем это сделать
удаляются все элементы меньшие, чем новый элемент


Краткий алгоритм:
слайдинг виндоу,
ищем максимум при помощи Decreasing Queue,
перед движением добавляем текущий максимум


Полный алгоритм:
1. Слайдинг виндоу, left = right = 0
2. Текущий максимум находим при помощи Decreasing Queue (Deque)
3. while right < nums.length
4. while в deque есть меньшие цифры, .pop()
5. Пушим в deque индекс новой цифры
6. Если после прошлого движения максимум вышел за пределы окна, то выкидываем его
7. Если окно достигло нужного размера пушим текущий максимум, двигаем left
8. Двигаем right
*/

function maxSlidingWindow(nums: number[], k: number): number[] {
    const answer: number[] = []
    let left = 0
    let right = 0 // 1

    const deque: number[] = [] // 2

    while (right < nums.length) {
        // Пока в deque есть меньшие цифры, .pop()
        while (deque.length && nums[deque[deque.length - 1]] < nums[right]) {
            deque.pop() // 4
        }

        // Пушим индекс новой цифры
        deque.push(right) // 5

        // Если после прошлого движения максимум вышел за пределы окна, то выкидываем его
        if (deque[0] < left) {
            deque.shift() // 6
        }

        // Перед движением пушим текущий максимум (если окно достигло нужного размера, начинаем с left = right = 0)
        if (right - left + 1 === k) {
            answer.push(nums[deque[0]]) // 7
            left += 1
        }

        // Двигаем right
        right += 1 // 8
    }

    return answer
}
