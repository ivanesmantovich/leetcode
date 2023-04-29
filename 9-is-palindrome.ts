// Palindrome number (https://leetcode.com/problems/palindrome-number/)

// Простое решение
// function isPalindrome(x: number): boolean {
//     return x.toString() === x.toString().split('').reverse().join('')
// }

// Оптимальное решение (https://www.youtube.com/watch?v=yubRKwixN-U)
function isPalindrome(x: number): boolean {
    if (x < 0) return false

    // 1. Нужен делитель состоящий из единицы и нулей и равный по длине числу
    let div = 1
    // 2. Начинаем с единицы и добавляем нули умножениями на 10
    while (x >= div * 10) div *= 10

    // 3. Цикл пока число не равно нулю
    while (x) {
        // 4. Получаем ТОЛЬКО левую цифру разделив на делитель
        const leftNum = Math.floor(x / div)
        // 5. Получаем ТОЛЬКО правую цифру взяв остаток от деления на 10
        const rightNum = x % 10
        // 6. Если цифры не равны возвращаем false
        if (leftNum !== rightNum) return false

        // Для отрезания просто разворачиваем операции
        // 7. Отрезаем левую цифру числа, взяв остаток от деления на делитель
        // 1234 -> 234        1234 / 1000    234
        x = x % div
        // 8. Отрезаем правую цифру числа, разделив на 10
        // 234 -> 23         234 / 10       23
        x = Math.floor(x / 10)
        // 9. Отрезаем две правые цифры делителя, разделив на 100
        // так как убрали две цифры у числа
        div = Math.floor(div / 100)
    }
    // 10. Если цикл завершен, то возвращаем true
    return true
}
