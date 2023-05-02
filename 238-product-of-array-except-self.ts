// Product of Array Except Self (https://leetcode.com/problems/product-of-array-except-self/)
// Time: O(n), Space: O(1) [массив answer не считается]

/*
Краткий алгоритм:
Цикл слева направо, записываем в массив-ответ то, что наумножали, после этого умножаем
Цикл справа налево, умножаем текущий индекс в массиве-ответе на то, что наумножали, после этого умножаем
*/

/*
Полный алгоритм:
1. Создаем массив answer

2. Инициализируем prefix = 1
3. Цикл по nums слева направо
4. Записываем в answer[i] то, что наумножали до сих пор (prefix)
5. Умножаем prefix на nums[i]

6. Инициализируем postfix = 1
7. Цикл по nums справа налево
8. Умножаем answer[i] на то, что наумножали до сих пор (postfix)
9. Умножаем postfix на nums[i]

10. return answer
*/

function productExceptSelf(nums: number[]): number[] {
    const answer = [] // 1

    let prefix = 1 // 2
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix // 4
        prefix *= nums[i] // 5
    }

    let postfix = 1 // 6
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= postfix // 8
        postfix *= nums[i] // 9
    }

    return answer // 10
}
