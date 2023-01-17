import { Matrix } from './interfaces';
import { Direction, DIR_UP } from './directions';
import rotator from './rotator';

export default class Piece {
    private name: string;
    private color: string;
    private matrix: Matrix;

    constructor(name: string, color: string, matrix: Matrix) {
        this.name = name;
        this.color = color;
        this.matrix = matrix;
    }
    getRows(): number {
        return this.matrix.length;
    }
    getCols(): number {
        return this.matrix[0].length;
    }
    getName(): string {
        return this.name;
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
    clone(rotation: Direction = DIR_UP): Piece {
        const newPiece = new Piece(this.name, this.color, this.matrix);
        return newPiece.rotate(rotation);
    }
}