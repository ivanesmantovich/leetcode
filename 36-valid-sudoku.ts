// Valid Sudoku (https://leetcode.com/problems/valid-sudoku/)
// Leetcode Solution: https://www.youtube.com/watch?v=TjFXEUCMqI8
// Time: O(rows * cols), Space: O(rows * cols)

/*
Краткий алгоритм:
Двойной цикл, индекс бокса - `${floor(row/3)}${floor(col/3)}, сохраняем и проверяем через сеты
*/

/*
Полный алгоритм:
1. Создаем мап для rows, мап для cols, мап для boxes
2. Двойным циклом сканируем
3. Число в текущей клетке сохраняем в num
4. Если num это точка, то continue
5. Вычисляем индекс текущего 3x3 бокса `${Math.floor(row / 3)}${Math.floor(col / 3)}`
6. Инициализируем new Set по текущему row / col / boxIndex, если его еще нет
7. Если в сете по текущему row / col / boxIndex есть num, то return false
8. Добавляем во все сеты num
9. Если дошли до конца, то return true
*/

function isValidSudoku(board: string[][]): boolean {
    const rows = new Map() // 1
    const cols = new Map()
    const boxes = new Map()

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const num = board[row][col] // 3

            if (num === '.') {
                continue // 4
            }

            const boxIndex = `${Math.floor(row / 3)}${Math.floor(col / 3)}` // 5

            if (!rows[row]) rows[row] = new Set() // 6
            if (!cols[col]) cols[col] = new Set()
            if (!boxes[boxIndex]) boxes[boxIndex] = new Set()

            if (
                rows[row].has(num) ||
                cols[col].has(num) ||
                boxes[boxIndex].has(num)
            ) {
                return false // 7
            }

            rows[row].add(num) // 8
            cols[col].add(num)
            boxes[boxIndex].add(num)
        }
    }

    return true // 9
}
