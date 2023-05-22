// Min Stack (https://leetcode.com/problems/min-stack)
// Leetcode Solution: link
// Time: O(1), Space: O(n)

/*
Краткий алгоритм:
Держим два стэка stack и minStack,
в stack пушим все цифры, из него берем top
в minStack пушим минимум между val и последним элементом minStack, из него берем min


Полный алгоритм:
Инит:
    stack для получения последнего элемента, содержит все цифры
    minStack для получения минимума, содержит минимумы на момент пуша в stack

1. push(val): Пушим val в stack, если minStack.length = 0, то пушим val в minStack, иначе пушим Math.min(val, последнийЭлементMinStack)
2. pop(): stack и minStack должны быть одной длины. stack.pop(), minStack.pop()
3. top(): Возвращаем последний элемент stack, return this.stack[this.stack.length - 1]
4. getMin(): Возвращаем последний элемент minStack, return this.minStack[this.minStack.length - 1]
*/

class MinStack {
    stack: number[]
    minStack: number[]

    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(val: number): void {
        this.stack.push(val)

        if (this.minStack.length === 0) {
            this.minStack.push(val)
        } else {
            this.minStack.push(
                Math.min(val, this.minStack[this.minStack.length - 1])
            )
        }
    }

    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}
