// Valid Anagram (https://leetcode.com/problems/valid-anagram/)

// 1. Если s и t разной длины, то return false
// 2. Создаем мап
// 3. Цикл по s
// 4. Если в мапе нет текущей буквы, то добавляем в мап со значением 1
// 5. Если в мапе есть текущая буква, то увеличиваем значение на 1
// 6. Цикл по t
// 7. Если в мапе есть текущая буква, и ее значение больше 0, то уменьшаем значение на 1
// 8. Если в мапе нет текущей буквы, то return false

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false // 1
    const letterMap = new Map() // 2
    for (const letter of s) {
        // 3
        if (!letterMap.has(letter)) {
            letterMap.set(letter, 1) // 4
        } else letterMap.set(letter, letterMap.get(letter) + 1) // 5
    }
    for (const letter of t) {
        // 6
        if (letterMap.get(letter) > 0) {
            letterMap.set(letter, letterMap.get(letter) - 1) // 7
        } else return false // 8
    }
    return true
}
