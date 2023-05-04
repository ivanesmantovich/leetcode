// Valid Palindrome (https://leetcode.com/problems/valid-palindrome/)
// Time: O(n), Space: O(1)

/*
Краткий алгоритм:
Два пойнтера, один слева, другой справа. Если не альфанумерик, то скипаем. Проверяем равны ли буквы
*/

/*
Полный алгоритм:
1. Если длина строки меньше 2, то return true (если строка пустая или из одного символа, то это палиндром)
2. Всю строку toLowerCase()
3. Создаем два пойнтера left и right и запускаем циклом while left < right один с начала другой с конца строки
4. Пропускаем не альфанумерик буквы (while nonalphanum) left++ / right--
5. Если буквы не равны return false
6. Если дошли до конца цикла return true
*/

function isPalindrome(s: string): boolean {
    if (s.length < 2) return true

    s = s.toLowerCase()

    let left = 0
    let right = s.length - 1
    while (left < right) {
        while (/[a-z0-9]/i.test(s[left]) === false) left++
        while (/[a-z0-9]/i.test(s[right]) === false) right--

        if (s[left] !== s[right]) return false

        left++
        right--
    }
    return true
}
