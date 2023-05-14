// Longest Substring Without Repeating Characters (https://leetcode.com/problems/longest-substring-without-repeating-characters/)
// Leetcode Solution: https://www.youtube.com/watch?v=wiGpQwVHdE0
// Time: O(n), Space: O(n)

/*
Краткий алгоритм:
Слайдинг виндоу, левая граница на первом элементе, правая двигается
Если видим букву которая уже в сете, то отрубаем левую часть сета до (включая) повторяющейся буквы
для этого while set.has(letter) удаляем элемент по левой границе и инкрементируем левую границу

Полный алгоритм:
1. Инит сет
2. leftBorder = 0, rightBorder = 0, двигается в цикле for
3. Если видим букву которая уже есть в сете, то отрубаем левую часть сета до (включая) повторяющейся буквы
для этого while set.has(letter) удаляем элемент по левой границе и инкрементируем левую границу
4. Добавляем букву в сет
5. Считаем current длину окна (rightBorder - leftBorder + 1)
6. maximum = Math.max(maximum, current)
*/

function lengthOfLongestSubstring(s: string): number {
    const charSet = new Set() // 1
    let leftBorder = 0 // 2
    let maximum = 0

    for (let rightBorder = 0; rightBorder < s.length; rightBorder++) {
        const letter = s[rightBorder]
        while (charSet.has(letter)) {
            charSet.delete(s[leftBorder]) // 3
            leftBorder++
        }
        charSet.add(letter) // 4
        const current = rightBorder - leftBorder + 1 // 5
        maximum = Math.max(maximum, current) // 6
    }
    return maximum
}
