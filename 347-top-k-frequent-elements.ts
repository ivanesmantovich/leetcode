// Top K Frequent Elements (https://leetcode.com/problems/top-k-frequent-elements/)

// Мое решение
// function topKFrequent(nums: number[], k: number): number[] {
//     const numMap = new Map()

//     nums.forEach((num) => {
//         if (!numMap.has(num)) numMap.set(num, 1)
//         else numMap.set(num, numMap.get(num) + 1)
//     })

//     return Array.from(
//         new Map([...numMap].sort((a, b) => b[1] - a[1])).keys()
//     ).slice(0, k)
// }

// 1. Создаем мап
// 2. Создаем массив массивов для бакет сорта
// 3. Цикл по nums, если цифры нет в мапе, инициализируем со значением 1, если есть, то добавляем 1
// 4. Цикл по мапе, наполняем массив хитрым бакет сортом. Индекс - сколько раз встретилась цифра, значение - массив цифр, которые встретились столько раз
// 5. Создаем массив для результата
// 6. Цикл по бакет-массиву с конца, если значение есть, то цикл по значению (массиву).
// Значения может не быть, ибо может не быть цифр которые встретились 4 раза, только 3 и 5
// Push каждую цифру, если длина массива-результата равна k, то return resultArr

// Оптимальное решение
function topKFrequent(nums: number[], k: number): number[] {
    const numMap = new Map() // 1
    const frequencyArr: number[][] = [] // 2

    // 3
    nums.forEach((num) => {
        if (!numMap.has(num)) numMap.set(num, 1)
        else numMap.set(num, numMap.get(num) + 1)
    })

    // 4
    numMap.forEach((valueCount, keyNum) => {
        if (!frequencyArr[valueCount]) frequencyArr[valueCount] = []
        frequencyArr[valueCount].push(keyNum)
    })

    const resultArr = [] // 5
    // 6
    for (let i = frequencyArr.length - 1; i > 0; i--) {
        if (frequencyArr[i]) {
            for (const num of frequencyArr[i]) {
                resultArr.push(num)
                if (resultArr.length === k) return resultArr
            }
        }
    }
    return resultArr
}

// Time complexity: O(n)
