import { Matrix } from './interfaces';
import { Direction, DIR_UP } from './directions';
import rotator, { rotate0 } from './rotator';

export default class Piece {
    private color: string;
    private matrix: Matrix;

    constructor(color: string, matrix: Matrix) {
        this.color = color;
        this.matrix = matrix;
    }
    getRows(): number {
        return this.matrix.length;
    }
    getCols(): number {
        return this.matrix[0].length;
    }
    getColor(): string {
        return this.color;
    }
    getMatrix(): Matrix {
        return this.matrix;
    }
    isFilledAt(row: number, col: number): boolean {
        return this.matrix[row][col] === 1;
    }
    rotate(direction: Direction): Piece {
        let newMatrix: Matrix;
        if (rotator[direction]) {
            newMatrix = rotator[direction](this.matrix);
        } else {
            newMatrix = rotator[DIR_UP](this.matrix);
        }
        this.matrix = newMatrix;
        return this;
    }
    clone(): Piece {
        return new Piece(this.color, rotate0(this.matrix));
    }
}