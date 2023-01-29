// The K Weakest Rows in a Matrix

function kWeakestRows(mat: number[][], k: number): number[] {
    const result: number[] = [];
    
    for (let column = 0; column < mat[0].length; column++) {
        for (let row = 0; row < mat.length; row++) {
            if (mat[row][column] === 0 && !result.includes(row)) {
                result.push(row);
                k--;
                if (k === 0) return result;
            }
        }
    }
    
    if (k > 0) {
        for (let rowIndex of mat.keys()) {
            if (mat[rowIndex][mat[rowIndex].length - 1] === 1) {
                result.push(rowIndex);
                k--;
                if (k === 0) return result;
            }
        }
    }
    
    return result; 
}