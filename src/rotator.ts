import { Matrix } from './interfaces';
import { Direction, DIR_UP, DIR_RIGHT, DIR_DOWN, DIR_LEFT } from './directions';

export function rotateCW(matrix: Matrix): Matrix {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const newMatrix: Matrix = [];
    for (let i = 0; i < cols; i++) {
        const r: number[] = [];
        for (let j = rows - 1; j >= 0; j--) {
            r.push(matrix[j][i]);
        }
        newMatrix.push(r);
    }
    return newMatrix;
}

export function rotateCCW(matrix: Matrix): Matrix {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const newMatrix: Matrix = [];
    for (let i = cols - 1; i >= 0; i--) {
        const r: number[] = [];
        for (let j = 0; j < rows; j++) {
            r.push(matrix[j][i]);
        }
        newMatrix.push(r);
    }
    return newMatrix;
}
export function rotate180(matrix: Matrix): Matrix {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const newMatrix: Matrix = [];
    for (let j = rows - 1; j >= 0; j--) {
        const r: number[] = [];
        for (let i = cols - 1; i >= 0; i--) {    
            r.push(matrix[j][i]);
        }
        newMatrix.push(r);
    }
    return newMatrix;
}
export function rotate0(matrix: Matrix): Matrix {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const newMatrix: Matrix = [];
    for (let j = 0; j < rows; j++) {
        const r: number[] = [];
        for (let i = 0; i < cols; i++) {
            r.push(matrix[j][i]);
        }
        newMatrix.push(r);
    }
    return newMatrix;
}

const rotator: Record<Direction, (matrix: Matrix) => Matrix> = {
    [DIR_UP]: rotate0,
    [DIR_RIGHT]: rotateCW,
    [DIR_DOWN]: rotate180,
    [DIR_LEFT]: rotateCCW,
};
export default rotator;