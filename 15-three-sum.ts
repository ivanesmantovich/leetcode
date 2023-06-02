// 3Sum (https://leetcode.com/problems/3sum/)
// Leetcode Solution: https://www.youtube.com/watch?v=jzZsG8n2R9A
// Time: O(n^2), Space: O(1)

/*
Краткий алгоритм:
Сорт по возр, три пойнтера, первый цикл по nums, другие два делают Two Sum II по оставшимся справа от первого пойнтера nums.

Полный алгоритм:
1. Сортируем массив по возрастанию
2. Если nums[first] > 0, return answerArr потому что сумма уже никогда не выравняется в 0
3. for first = 0; first < nums.length
    4. Пропускаем дубликаты first, if first > 0 и nums[first] = nums[first - 1] continue
    5. Инит second = следующий элемент после first
    6. Инит third = последний элемент nums
    7. while second < third
        8. Считаем sum, если sum < 0, то second++, иначе если sum > 0, то third--
        9. Иначе(sum == 0)
            .push массив из трех чисел
            Пропускаем дубликаты second, second++(важно), while (second < third и nums[second] = nums[second - 1]: second++

return answerArr
*/

function threeSum(nums: number[]): number[][] {
    const answerArr = []
    nums.sort((a, b) => a - b) // 1

    for (let first = 0; first < nums.length; first++) {
        if (nums[first] > 0) return answerArr // 2

        if (first > 0 && nums[first] === nums[first - 1]) continue // 4

        let second = first + 1 // 5
        let third = nums.length - 1 // 6
        while (second < third) {
            const sum = nums[first] + nums[second] + nums[third]

            if (sum < 0) second++ // 8
            else if (sum > 0) third--
            else {
                // 9
                answerArr.push([nums[first], nums[second], nums[third]])
                second++
                while (second < third && nums[second] === nums[second - 1])
                    second++
            }
        }
    }

    return answerArr
}
