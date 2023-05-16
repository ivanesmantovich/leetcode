// Permutation in String (https://leetcode.com/problems/permutation-in-string/)
// Leetcode Solution: https://www.youtube.com/watch?v=UbyhOgBN834
// Time: O(?), Space: O(?)

/*
Краткий алгоритм:


Полный алгоритм:
1. Инит мап со значениями-обьектами { originalCount: number; currentCount: number}, lettersToCheck = s1.length
2. Цикл по s1, считаем буквы
3. Слайдинг виндоу, left = 0, for (right)
4. Если буква есть в мапе, но она закончилась (currentCount = 0), пока ее currentCount = 0 двигаем left и если буква по left есть в мапе, ее currentCount++ и lettersLeft++
5. Иначе если буква есть в мапе, ее currentCount-- и lettersLeft--. Если lettersLeft = 0, return true
6. Иначе (буквы нет в мапе) сбрасываем мап (все currentCount = originalCount), lettersLeft = lettersToCheck и двигаем right до тех пор пока right + 1 не будет в мапе. left = right
7. Если дошли до конца, return false
*/

function checkInclusion(s1: string, s2: string): boolean {
    const mapFirstWord = new Map<
        string,
        { originalCount: number; currentCount: number }
    >() // 1
    const lettersToCheck = s1.length

    // 2
    for (let letter of s1) {
        mapFirstWord.set(letter, {
            originalCount: (mapFirstWord.get(letter)?.originalCount ?? 0) + 1,
            currentCount: (mapFirstWord.get(letter)?.currentCount ?? 0) + 1,
        })
    }

    let lettersLeft = lettersToCheck

    let left = 0 // 3
    for (let right = left; right < s2.length; right++) {
        if (
            mapFirstWord.has(s2[right]) &&
            mapFirstWord.get(s2[right]).currentCount === 0
        ) {
            while (
                left < s2.length &&
                mapFirstWord.get(s2[right]).currentCount === 0
            ) {
                if (mapFirstWord.has(s2[left])) {
                    mapFirstWord.get(s2[left]).currentCount++ // 4
                    lettersLeft++
                }
                left++
            }
            mapFirstWord.get(s2[right]).currentCount--
            lettersLeft--
            if (lettersLeft === 0) return true
        } else if (mapFirstWord.has(s2[right])) {
            mapFirstWord.get(s2[right]).currentCount-- // 5
            lettersLeft--
            if (lettersLeft === 0) return true
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

    return false // 7
}
