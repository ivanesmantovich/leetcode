// Minimum Window Substring (https://leetcode.com/problems/minimum-window-substring/)
// Leetcode Solution: https://www.youtube.com/watch?v=jSto0O4AJbM
// Time: O(n), Space: O(n)

/*
Краткий алгоритм:
Слайдинг виндоу.
Мапы need и have.
Встречаем букву из need, have[letter]++.
Достигли нужного значения, haveMatches++.
while (haveMatches = needMatches) сужаем левую границу окна
    Сохраняем новый minWindow
    Встречаем букву из have, have[letter]--
    Потеряли нужное значение, needMatches--
    left++
    Сохраняем новый currentWindow


Полный алгоритм:
Инит:
    minWindow = '', currentWindow = ''
    Мапы: need и have

1. Цикл по t, считаем буквы, наполняем need
Инит:
    needMatches = need.size
    haveMatches = 0
    left = 0

2. Цикл for right < s.length
    3. Сохраняем currentWindow
    4. Если встречаем букву которая есть в need, то прибавляем ее значение
       Если have.get(rLetter) === need.get(rLetter), то haveMatches++

    5. while (haveMatches === needMatches) сужаем левую границу окна
        6. Если currentWindow.length < minWindow.length, то minWindow = currentWindow

        7. Если lLetter есть в have, то уменьшаем ее значение
        8. Если значение lLetter в have стало меньше, чем в need, то haveMatches--

        9. left++
        10. Сохраняем новый currentWindow

return minWindow
*/

function minWindow(s: string, t: string): string {
    if (s.length < t.length) return ''

    let minWindow = '',
        currentWindow = ''

    const need = new Map()
    const have = new Map()

    for (const letter of t) {
        need.set(letter, (need.get(letter) ?? 0) + 1) // 1
    }

    let needMatches = need.size
    let haveMatches = 0

    let left = 0
    for (let right = 0; right < s.length; right++) {
        currentWindow = s.slice(left, right + 1) // 3

        const rLetter = s[right]
        if (need.has(rLetter)) {
            have.set(rLetter, (have.get(rLetter) ?? 0) + 1) // 4
            if (have.get(rLetter) === need.get(rLetter)) haveMatches++ // 5
        }

        while (haveMatches === needMatches) {
            const lLetter = s[left]

            // End the execution early because we found the best possible result
            if (currentWindow.length === t.length) return currentWindow

            if (minWindow.length === 0) minWindow = currentWindow
            if (currentWindow.length < minWindow.length)
                minWindow = currentWindow // 6

            if (have.has(lLetter)) {
                have.set(lLetter, have.get(lLetter) - 1) // 7
                if (have.get(lLetter) < need.get(lLetter)) haveMatches-- // 8
            }

            left++ // 9
            currentWindow = s.slice(left, right + 1) // 10
        }
    }

    return minWindow
}
