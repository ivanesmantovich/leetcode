// Longest Repeating Character Replacement (https://leetcode.com/problems/longest-repeating-character-replacement/)
// Leetcode Solution: https://www.youtube.com/watch?v=gqXU1UyA8pk
// Time: O(n), Space: O(26) округляется до O(1)

/*
Краткий алгоритм:
Слайдинг виндоу. Левый пойнтер в начале, правый едет, при каждом движении обновляем самую частую букву в текущем окне
При расширении окна проверяем можем ли заменить все остальные буквы в текущем окне (размер окна - колво самой частой буквы), если нет, то сужаем окно

Обьяснение трюка:
Нам всегда нужно заменить ВСЕ ОСТАЛЬНЫЕ буквы в текущем окне, новый лучший результат может возникнуть ТОЛЬКО ЕСЛИ число
самой частой буквы в текущем окне УВЕЛИЧИТСЯ (чем больше число самой частой буквы, тем меньше букв нужно заменить)
Если окно увеличится БЕЗ увеличения самой частой буквы, то это никаким образом не даст новый longest
ОКНО НИКОГДА НЕ УВЕЛИЧИТСЯ БЕЗ УВЕЛИЧЕНИЯ САМОЙ ЧАСТОЙ БУКВЫ потому что при увеличении окна справа, мы проверяем можем ли мы
заменить все оставшиеся буквы и если нет, то мы сужаем окно слева.

Полный алгоритм:
1. Инит currentWindowMap и currentWindowMax (самая частая буква в текущем окне)
2. Два пойнтера left = 0 и for (right = 0; right < s.length)
3. Увеличиваем в currentWindowMap значение (кол-во) rightLetter на 1
4. Если новое значение rightLetter больше currentWindowMax, то это новый currentWindowMax
5. Если кол-во букв которое надо заменить (right - left + 1 - currentWindowMax) > k, то уменьшаем значение leftLetter на 1, и двигаем left (left++)
6. Если размер окна (right - left + 1) больше чем longest, то это новый longest
*/

function characterReplacement(s: string, k: number): number {
    let longest = 0

    const currentWindowMap = new Map()
    let currentWindowMax = 0 // 1

    let left = 0 // 2
    for (let right = 0; right < s.length; right++) {
        const rightLetter = s[right]
        currentWindowMap.set(
            rightLetter,
            (currentWindowMap.get(rightLetter) ?? 0) + 1
        ) // 3
        currentWindowMax = Math.max(
            currentWindowMax,
            currentWindowMap.get(rightLetter)
        ) // 4

        if (right - left + 1 - currentWindowMax > k) {
            const leftLetter = s[left]
            currentWindowMap.set(
                leftLetter,
                currentWindowMap.get(leftLetter) - 1
            ) // 5
            left++
        }

        longest = Math.max(longest, right - left + 1) // 6
    }

    return longest
}
