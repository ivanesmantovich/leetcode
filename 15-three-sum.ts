// 3Sum (https://leetcode.com/problems/3sum/)
// Leetcode Solution: https://www.youtube.com/watch?v=jzZsG8n2R9A
// Time: O(n^2), Space: O(1)

/*
Краткий алгоритм:
Сорт по возр, три пойнтера, первый цикл по nums, другие два делают Two Sum II по оставшимся справа от первого пойнтера nums.

Полный алгоритм:
1. Если nums[first] > 0, return answerArr потому что сумма уже никогда не выравняется в 0
2. Сортируем массив по возрастанию
3. Цикл по nums индексом first
4. Пропускаем дубликаты first, для этого если first > 0 и nums[first] == nums[first - 1] делаем continue
5. Инит second = следующий элемент после first
6. Инит third = последний элемент nums
7. Цикл while second < third
8. Считаем sum, если sum < 0, то second++, иначе если sum > 0, то third--
9. Если sum == 0, то .push три числа и пропускаем дубликаты second, для этого если second < third и nums[second] == nums[second -1] делаем continue
10. Когда дошли до конца return answerArr
*/

function threeSum(nums: number[]): number[][] {
    const answerArr = []
    nums.sort((a, b) => a - b) // 1

    for (let first = 0; first < nums.length; first++) {
        if (nums[first] > 0) return answerArr

        if (first > 0 && nums[first] === nums[first - 1]) continue // 4

        let second = first + 1 // 5
        let third = nums.length - 1 // 6
        while (second < third) {
            const sum = nums[first] + nums[second] + nums[third]

            if (sum < 0) second++ // 8
            else if (sum > 0) third--
            else {
                answerArr.push([nums[first], nums[second], nums[third]]) // 9
                second++
                while (second < third && nums[second] === nums[second - 1])
                    second++
            }
        }
    }

    return answerArr // 10
}
