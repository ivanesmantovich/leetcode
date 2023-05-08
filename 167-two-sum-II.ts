// Two Sum II (https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
// Leetcode Solution: https://www.youtube.com/watch?v=cQ1Oz4ckceM
// Time: O(n), Space: O(1)

/*
Краткий алгоритм:
Два пойнтера слева и справа, если сумма меньше таргета, инкрем левый, если больше, декрем правый


Полный алгоритм:
1. Два пойнтера слева и справа
2. While left < right
3. Считаем currentSum
4. Если currentSum < target, инкрементируем левый
5. Иначе если currentSum > target, декрементируем правый
6. Иначе возвращаем [left + 1, right + 1]
*/

function twoSum(numbers: number[], target: number): number[] {
    let left = 0
    let right = numbers.length - 1
    while (left < right) {
        let currentSum = numbers[left] + numbers[right]

        if (currentSum < target) left++
        else if (currentSum > target) right--
        else return [left + 1, right + 1]
    }
}
