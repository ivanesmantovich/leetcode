// Longest Common Prefix (https://leetcode.com/problems/longest-common-prefix)
// Time: O(n), Space: O(1)

/*
Алгоритм:
1. Изначально берем за префикс целиком первое слово. Префикс может ТОЛЬКО УМЕНЬШАТЬСЯ. Это самый важный момент этой задачи.
2. Цикл по словам
    3. Если длина слова меньше длины префикса, то обрезаем префикс по длине текущего слова
    4. Если длина префикса равна 0, то возвращаем пустую строку

    5. Цикл for i по буквам слова
        6. Если буква по i в слове не равна букве по i в префиксе, то обрезаем префикс по i

return prefix
*/

function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0] // 1

    for (const str of strs) {
        if (str.length < prefix.length) prefix = prefix.slice(0, str.length) // 3
        if (prefix.length === 0) return '' // 4

        for (let i = 0; i < prefix.length; i++) {
            if (str[i] !== prefix[i]) {
                prefix = prefix.slice(0, i) // 6
            }
        }
    }

    return prefix
}
