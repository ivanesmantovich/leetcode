// Permutation in String (https://leetcode.com/problems/permutation-in-string/)
// Leetcode Solution: https://www.youtube.com/watch?v=UbyhOgBN834
// Time: O(?), Space: O(?)

/*
Краткий алгоритм:


Полный алгоритм:
1. Инит
   мап со значениями-обьектами { originalCount: number; currentCount: number},
   lettersToCheck = s1.length
2. Цикл по s1, считаем буквы
3. Слайдинг виндоу, left = 0, for (right)
    4. Если буква есть в мапе
        5. Проверяем закончилась ли s2[right], если да, то while ее currentCount = 0:
            двигаем left и если буква s2[left] есть в мапе, то s2[left].currentCount++ и lettersLeft++
        6. После этого s2[right].currentCount--, lettersLeft--. Если lettersLeft = 0, return true
    7. Иначе (буквы нет в мапе):
        Cбрасываем мап (все currentCount = originalCount),
        lettersLeft = lettersToCheck,
        while right + 1 нет в мапе двигаем right,
        left = right
8. Если дошли до конца, return false
*/

function checkInclusion(s1: string, s2: string): boolean {
    const mapFirstWord = new Map<
        string,
        { originalCount: number; currentCount: number }
    >()
    // 2
    for (let letter of s1) {
        mapFirstWord.set(letter, {
            originalCount: (mapFirstWord.get(letter)?.originalCount ?? 0) + 1,
            currentCount: (mapFirstWord.get(letter)?.currentCount ?? 0) + 1,
        })
    }

    const lettersToCheck = s1.length
    let lettersLeft = lettersToCheck

    // 3
    let left = 0
    for (let right = left; right < s2.length; right++) {
        // 4
        if (mapFirstWord.has(s2[right])) {
            // 5
            while (
                mapFirstWord.get(s2[right]).currentCount === 0 &&
                left < s2.length
            ) {
                if (mapFirstWord.has(s2[left])) {
                    mapFirstWord.get(s2[left]).currentCount++
                    lettersLeft++
                }
                left++
            }
            // 6
            mapFirstWord.get(s2[right]).currentCount--
            lettersLeft--
            if (lettersLeft === 0) return true
            // 7
        } else {
            for (let key of mapFirstWord.keys()) {
                mapFirstWord.set(key, {
                    originalCount: mapFirstWord.get(key).originalCount,
                    currentCount: mapFirstWord.get(key).originalCount,
                }) // 6
            }
            lettersLeft = lettersToCheck
            while (right < s2.length && !mapFirstWord.has(s2[right + 1])) {
                right++
            }
            left = right
        }
    }

    return false
}
