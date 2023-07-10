// Longest Repeating Character Replacement (https://leetcode.com/problems/longest-repeating-character-replacement/)
// Leetcode Solution: https://www.youtube.com/watch?v=gqXU1UyA8pk
// Time: O(n), Space: O(26) округляется до O(1)

/*
Краткий алгоритм:
Слайдинг виндоу. Левый пойнтер в начале, правый едет, при каждом движении обновляем самую частую букву в текущем окне
При расширении окна проверяем можем ли заменить все остальные буквы в текущем окне (размер окна - колво самой частой буквы),
если нет, то сужаем окно

Полный алгоритм:
1. Инит currentWindowMap и mostFrequentCharCount (самая частая буква в текущем окне)
2. Два пойнтера left = 0 и for (right = 0; right < s.length)
    3. Увеличиваем в currentWindowMap значение (кол-во) встреченной буквы
    4. Если кол-во rightLetter больше mostFrequentCharCount, обновляем mostFrequentCharCount
    5. countOfCharsToReplace = right - left + 1 - mostFrequentCharCount (размер окна - колво самой частой буквы)
    6. Если countOfCharsToReplace (кол-во букв которое надо заменить) > k, то уменьшаем значение leftLetter на 1, и двигаем left
    7. Если размер окна (right - left + 1) больше чем longest, обновляем longest
*/

function characterReplacement(s: string, k: number): number {
    let longest = 0

    const currentWindowMap = new Map()
    let mostFrequentCharCount = 0 // 1

    let left = 0 // 2
    for (let right = 0; right < s.length; right++) {
        const rightLetter = s[right]

        currentWindowMap.set(
            rightLetter,
            (currentWindowMap.get(rightLetter) ?? 0) + 1
        ) // 3

        mostFrequentCharCount = Math.max(
            mostFrequentCharCount,
            currentWindowMap.get(rightLetter)
        ) // 4

        const countOfCharsToReplace = right - left + 1 - mostFrequentCharCount // 5
        if (countOfCharsToReplace > k) {
            const leftLetter = s[left]
            currentWindowMap.set(
                leftLetter,
                currentWindowMap.get(leftLetter) - 1
            ) // 6
            left++
        }

        const currentWindowSize = right - left + 1
        longest = Math.max(longest, currentWindowSize) // 7
    }

    return longest
}
