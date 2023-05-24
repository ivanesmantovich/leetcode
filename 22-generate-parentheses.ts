// Problem (https://leetcode.com/problems/generate-parentheses)
// Leetcode Solution: https://www.youtube.com/watch?v=s9fokUqJ76A
// Time: O(4n / sqrt(n)), Space: O(n)

/*
Краткий алгоритм:
DFS,
if closed = n: answer.push(str), return;
if (opened < n) dfs(opened + 1, closed, str + '(')
if (opened > closed) dfs(opened, closed + 1, str + ')')

Полный алгоритм:
Инит:
    answer = [], который будет держать строки

1. dfs(opened: number, closed: number, str: string):
    2. Если closed = n, то строка завершена. answer.push(str), return

    3. Если opened < n, то запускаем с добавленной открывающей. dfs(opened + 1, closed, str + '(')

    4. Если opened > closed, то можем запустить с добавленной закрывающей. dfs(opened, closed + 1, str + ')')

5. dfs(0, 0, '')

return answer
*/

function generateParenthesis(n: number): string[] {
    const answer = []

    function dfs(opened: number, closed: number, str: string) {
        if (closed === n) {
            answer.push(str)
            return
        }

        if (opened < n) dfs(opened + 1, closed, str + '(')

        if (opened > closed) dfs(opened, closed + 1, str + ')')
    }

    dfs(0, 0, '')
    return answer
}
