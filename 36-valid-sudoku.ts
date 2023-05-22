// Valid Sudoku (https://leetcode.com/problems/valid-sudoku/)
// Leetcode Solution: https://www.youtube.com/watch?v=TjFXEUCMqI8
// Time: O(rows * cols), Space: O(rows * cols)

/*
Краткий алгоритм:
Двойной цикл, индекс бокса - `${floor(row/3)}${floor(col/3)}, сохраняем и проверяем через сеты
*/

/*
Полный алгоритм:
1. Создаем мап для сетов в которых будут содержаться ряды, мап для сетов в которых будут колонки, мап для сетов в которых будут боксы 3х3
2. Двойным циклом сканируем. (
    for row = 0; row < 9; row++ {
        for col = 0; col < 9; col++ {
            num = board[row][col]
            ...
        }
    }
)
3. Если num это точка, то continue
4. У нас есть индекс row, есть индекс col, нужен индекс box.
   Берем за box (индекс текущего 3x3 бокса) координату, которую вычисляем вот так: `${Math.floor(row / 3)}${Math.floor(col / 3)}`
5. Если по текущему row, col или box еще нет сета, то создаем новый сет.
6. Если в текущем сете находящемуся по row / col / box есть num, то return false
7. Добавляем num во все сеты
8. Если дошли до конца, то return true
*/

function isValidSudoku(board: string[][]): boolean {
    const rows = new Map() // 1
    const cols = new Map()
    const boxes = new Map()

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const num = board[row][col] // 2

            if (num === '.') {
                continue // 3
            }

            const box = `${Math.floor(row / 3)}${Math.floor(col / 3)}` // 4

            if (!rows[row]) rows[row] = new Set() // 5
            if (!cols[col]) cols[col] = new Set()
            if (!boxes[box]) boxes[box] = new Set()

            if (
                rows[row].has(num) ||
                cols[col].has(num) ||
                boxes[box].has(num)
            ) {
                return false // 6
            }

            rows[row].add(num) // 7
            cols[col].add(num)
            boxes[box].add(num)
        }
    }

    return true // 8
}
