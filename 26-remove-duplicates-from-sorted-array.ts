/*
Алгоритм:
Сдвигаем на левый пойнтер новые цифры, когда это делаем сдвигаем левый пойнтер.
Таким образом все уникальные цифры окажутся слева. Остальной массив не имеет значения.
*/

function removeDuplicates(nums: number[]): number {
    let left = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[left] = nums[i]
            left++
        }
    }

    return left
}
