import { Matrix } from './interfaces';
import { Direction, DIR_UP } from './directions';
import Piece from './piece';
import { COLS } from './constants';

export default class CurrentPiece extends Piece {
    private x: number = 0;
    private y: number = 0;

    constructor(name: string, color: string, matrix: Matrix, x: number, y: number) {
        super(name, color, matrix);
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    setX(x: number): CurrentPiece {
        this.x = x;
        return this;
    }

    setY(y: number): CurrentPiece {
        this.y = y;
        return this;
    }

    clone(rotation: Direction = DIR_UP): CurrentPiece {
        super.clone(rotation);
        const newPiece = CurrentPiece.fromPiece(this, this.x, this.y);
        newPiece.rotate(rotation);
        return newPiece;
    }

    static fromPiece(piece: Piece, x: number, y: number): CurrentPiece {
        return new CurrentPiece(piece.getName(), piece.getColor(), piece.getMatrix(), x, y);
    }
}