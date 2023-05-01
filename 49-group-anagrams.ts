// Group Anagrams (https://leetcode.com/problems/group-anagrams/)

// 1. Создаем мап
// 2. Цикл по строкам
// 3. Сортируем символы строки и сохраняем результат в переменную
// 4. Если в мапе уже есть ключ равный отсортированной строке, то спрэдом сохраняем в значение неотсортированную-оригинальную строку
// 5. Если в мапе нет ключа равного отсортированной строке, то сохраняем в значение массив с единственным значением равным оригинальной строке
// 6. После цикла возвращаем Array.from(мап.values())

// Мое решение
function groupAnagrams(strs: string[]): string[][] {
    const anagramMap = new Map() // 1

    // 2
    strs.forEach((str) => {
        const sortedStr = str.split('').sort().join('') // 3
        if (anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, [...anagramMap.get(sortedStr), str]) // 4
        } else anagramMap.set(sortedStr, [str]) // 5
    })

    return Array.from(anagramMap.values()) // 6
}
