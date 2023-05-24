// Evaluate Reverse Polish Notation (https://leetcode.com/problems/evaluate-reverse-polish-notation)
// Leetcode Solution: https://www.youtube.com/watch?v=iu0082c4HDE
// Time: O(n), Space: O(n)

/*
Краткий алгоритм:
Стэк, цифры просто пушим в стэк, если встречаем операцию, достаем цифры через .pop(), выполняем ее и пушим результат в стэк.
return stack[0]

Полный алгоритм:
Инит:
    stack = []

1. for token of tokens
    2. if token = '+'или'*'
        3. stack.push(Number(stack.pop()) +или* Number(stack.pop()))
    4. else if token = '-'или'/'
        5. Так как в этих операция важны стороны СНАЧАЛА const second = Number(stack.pop()) ПОТОМ const first = Number(stack.pop())
        6. stack.push(first - second) ИЛИ stack.push(Math.trunc(first / second))
        [trunc нужен для условия задачи в котором результат деления truncates to zero]
    7. else stack.push(Number(token))

return stack[0]
*/

function evalRPN(tokens: string[]): number {
    const stack = []

    for (const token of tokens) {
        if (token === '+') {
            stack.push(Number(stack.pop()) + Number(stack.pop())) // 3
        } else if (token === '-') {
            const second = Number(stack.pop()) // 5
            const first = Number(stack.pop())
            stack.push(first - second) // 6
        } else if (token === '*') {
            stack.push(Number(stack.pop()) * Number(stack.pop()))
        } else if (token === '/') {
            const second = Number(stack.pop())
            const first = Number(stack.pop())
            stack.push(Math.trunc(first / second))
        } else stack.push(Number(token)) // 7
    }

    return stack[0]
}
