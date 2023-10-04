// Coco Eating Bananas (https://leetcode.com/problems/koko-eating-bananas)
// Leetcode Solution: https://www.youtube.com/watch?v=U2SozAs9RzA
// Time: O(n + log(n)), Space: O(n)

/*
Обьяснение простым языком:
    Скорость поедания ПОСТОЯННАЯ. Нам нужно найти МИНИМАЛЬНУЮ скорость с которой мы успеем все сьесть.
    Какая самая маленькая возможная скорость? 1
    Какая самая большая имеющая смысл скорость? Размер самой большой кучи.
    Берем за начальную минимальную скорость размер самой большой кучи.
    Запускаем бинарный поиск нужной скорости в котором левой границей является 1, а правой размер самой большой кучи.
    Вычисляем время за которое с текущей скоростью все сьедим. Если не успели за h, то нужно есть быстрее, сдвигаем левую границу
    Если успели, то обновляем минимальную скорость и можем попробовать есть медленнее, сдвигаем правую границу
*/

function minEatingSpeed(piles: number[], h: number): number {
    const biggestPile = Math.max(...piles)
    let left = 1
    let right = biggestPile
    let minSpeed = right

    while (left <= right) {
        const eatingSpeed = Math.floor((left + right) / 2)
        let eatingTime = 0

        for (const pile of piles) {
            eatingTime += Math.ceil(pile / eatingSpeed)
        }

        const tooSlow = eatingTime > h
        if (tooSlow) left = eatingSpeed + 1
        else {
            minSpeed = Math.min(minSpeed, eatingSpeed)
            right = eatingSpeed - 1
        }
    }

    return minSpeed
}
