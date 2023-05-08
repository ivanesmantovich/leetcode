// Valid Parenthesis (https://leetcode.com/problems/valid-parentheses/)
// Leetcode Solution: https://www.youtube.com/watch?v=WTzjTskDFMg
// Time: O(n), Space: O(n)

/*
Краткий алгоритм:
Цикл по s, если paren открывающая, добавляем в стак противоположную, иначе if paren != .pop(), то false.
В конце если stack.length > 0, то false

Полный алгоритм:
Если длина s нечетная, то return false (точно все не закроются)
1. Создаем стак
2. for paren of s
3. Если paren открывающая ( или [ или { то push закрывающую ) или ] или }
4. Else if paren != stack.pop, то return false (pop срабатывает в if'е)
5. В конце цикла if stack.length > 0, то return false
6. Если дошли до конца, return true
*/

function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false

    const stack = []

    for (let paren of s) {
        if (paren === '(') stack.push(')')
        else if (paren === '[') stack.push(']')
        else if (paren === '{') stack.push('}')
        else if (paren !== stack.pop()) return false
    }

    if (stack.length > 0) return false

    return true
}
