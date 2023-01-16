import { rand } from './utils';
import { Direction } from './directions';
import alphabet, { SPACE_PLACEHOLDER } from './alphabet';
import { DIR_UP, DIR_RIGHT, DIR_DOWN, DIR_LEFT } from './directions';
import {
    ROWS,
    COLS,
    GAME_ROWS,
    GAME_COLS,
    MX,
    GAME_SIZE_DIVISOR,
    FACET_DIVISOR,
    ALPHA_DIVISOR,
    DIMENSION_RATIO,
} from './constants';
import Piece from './piece';
import { Container } from './interfaces';



const piece0 = new Piece('rgba(0, 255, 255, 0.5)', [
    [1,1,1,1],
]);
const piece1 = new Piece('rgba(0, 0, 255, 0.5)', [
    [1,0,0],
    [1,1,1],
]);
const piece2 = new Piece('rgba(255, 127, 0, 0.5)', [
    [0,0,1],
    [1,1,1],
]);
const piece3 = new Piece('rgba(255, 255, 0, 0.5)', [
    [1,1],
    [1,1],
]);
const piece4 = new Piece('rgba(0, 255, 0, 0.5)', [
    [0,1,1],
    [1,1,0],
]);
const piece5 = new Piece('rgba(255, 0, 255, 0.5)', [
    [1,1,0],
    [0,1,1],
]);
const piece6 = new Piece('rgba(255, 0, 0, 0.5)', [
    [0,1,0],
    [1,1,1],
]);

const pieces = [
    piece0,
    piece1,
    piece2,
    piece3,
    piece4,
    piece5,
    piece6,
];

export default class Tetris {
    opts = {
        debug: false,
    };

    dim = 0;
    gridSize = 0;
    width = 0;
    height = 0;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    sprite: HTMLImageElement|null;

    bucket: number[][] = [];

    conts: Record<string, Container> = {
        board: { x: 0, y: 0, width: 0, height: 0 },
        title: { x: 0, y: 0, width: 0, height: 0 },
        info: { x: 0, y: 0, width: 0, height: 0 },
        next: { x: 0, y: 0, width: 0, height: 0 },
        score: { x: 0, y: 0, width: 0, height: 0 },
    };

    level = 1;
    linesCleared = 0;
    gameScore = 0;
    topScore = 0;

    currentX = 0;
    currentY = 0;
    currentPiece: Piece;
    nextPiece: Piece;

    constructor(canvas: HTMLCanvasElement, opts: Record<any, any>) {
        this.canvas = canvas;
        this.opts = Object.assign(this.opts, {
            debug: opts.debug || this.opts.debug,
        });
        this.dim = opts.dim;
        if (!this.dim || Number.isNaN(this.dim)) {
            throw new Error('Invalid dimension');
        }
        if (!this.canvas || !(this.canvas instanceof HTMLCanvasElement)) {
            throw new Error('Invalid canvas');
        }
        this.log('options', this.dim);
        const ctx = this.canvas.getContext('2d');
        if (!ctx) {
            throw new Error('Missing Rendering Context');
        }
        this.ctx = ctx;
        this.gridSize = Math.floor(this.dim / GAME_ROWS) * MX;
        if (this.gridSize % GAME_SIZE_DIVISOR !== 0) {
            this.gridSize = Math.floor(this.gridSize / GAME_SIZE_DIVISOR) * GAME_SIZE_DIVISOR; 
        }
        this.log('gridSize', this.gridSize);
        this.height = this.gridSize * GAME_ROWS;
        this.width = Math.ceil(this.height * DIMENSION_RATIO);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.log('dimensions', this.width, 'x', this.height);
        this.canvas.style.width = `${Math.floor(this.width / MX)}px`;
        this.canvas.style.height = `${Math.floor(this.height / MX)}px`;
        for(let r = 0; r < ROWS; r++) {
            const row: number[] = [];
            for (let c = 0; c < COLS; c++) {
                row.push(0);
            }
            this.bucket.push(row);
        }
        this.calculatePositions();
        this.drawOutlilnes();
        this.drawGrid();

        this.nextPiece = pieces[rand(0, pieces.length - 1)].clone().rotate(rand(0, 3) as Direction);

        const p1 = piece0.clone().rotate(DIR_UP);
        const p2 = piece2.clone().rotate(DIR_RIGHT);
        const p3 = piece4.clone().rotate(DIR_LEFT);
        const p4 = piece6.clone().rotate(DIR_DOWN);
        this.drawPiece(p1, 1, 1);
        this.drawPiece(p2, 6, 2);
        this.drawPiece(p3, 3, 5);
        this.drawPiece(p4, 5, 7);
        
        this.setText();
        this.setNextPiece();
    }

    setText() {
        const levelText = `LEVEL ${this.level}`;
        this.writeWord(levelText, Math.floor((GAME_COLS - 2 - levelText.length) / 2) + 1 , 1);
        this.writeWord('TOP', 12, 3);
        this.writeWord(`${this.topScore}`, 12, 4);
        this.writeWord('SCORE', 12, 7);
        this.writeWord(`${this.gameScore}`, 12, 8);
        this.writeWord('LINES', 12, 11);
        this.writeWord(`${this.linesCleared}`, 12, 12);
        this.writeWord('NEXT', 12, 16);
    }

    setNextPiece() {
        this.currentPiece = this.nextPiece;
        this.nextPiece = pieces[rand(0, pieces.length - 1)].clone().rotate(rand(0, 3) as Direction);
        this.placePiece(this.nextPiece, this.unit(13), this.unit(18));
    }

    unit(count) {
        return this.gridSize * count;
    }

    calculatePositions() {
        this.conts.board.width = COLS * this.gridSize;
        this.conts.board.height = ROWS * this.gridSize;
        this.conts.board.x = this.gridSize;
        this.conts.board.y = ((GAME_ROWS - ROWS) - 1) * this.unit(1);
        this.conts.title.width = this.width - this.unit(2);
        this.conts.title.height = this.unit(1);
        this.conts.title.x = this.unit(1);
        this.conts.title.y = this.unit(1);
        this.conts.info.width = this.width - (this.conts.board.x + this.conts.board.width + this.unit(2));
        this.conts.info.height = this.conts.board.height;
        this.conts.info.x = this.conts.board.x + this.conts.board.width + this.unit(1);
        this.conts.info.y = this.conts.board.y;
        this.conts.next.width = this.conts.info.width;
        this.conts.next.height = this.conts.next.width;
        this.conts.next.x = this.conts.info.x;
        this.conts.next.y = this.conts.info.y + this.conts.info.height - this.conts.next.height;
        this.conts.score.width = this.conts.info.width;
        this.conts.score.height = this.conts.info.height - this.conts.next.height - this.unit(1);
        this.conts.score.x = this.conts.info.x;
        this.conts.score.y = this.conts.info.y;
    }

    drawGrid() {
        this.ctx.strokeStyle = 'rgba(0,0,0,0.1)';
        this.ctx.lineWidth = MX;
        for (let i = 0; i < GAME_COLS; i++) { 
            const x0 = i * this.gridSize;
            const y0 = 0;
            const x1 = i * this.gridSize;
            const y1 = this.height;
            this.ctx.beginPath();
            this.ctx.moveTo(x0, y0);
            this.ctx.lineTo(x1, y1);
            this.ctx.stroke();
        }
        for (let j = 0; j < GAME_ROWS; j++) {
            const x0 = 0;
            const y0 = j * this.gridSize;
            const x1 = this.height;
            const y1 = j * this.gridSize;
            this.ctx.beginPath();
            this.ctx.moveTo(x0, y0);
            this.ctx.lineTo(x1, y1);
            this.ctx.stroke();
            
        } 
    }
    
    drawOutlilnes() {
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = MX;
        this.ctx.strokeRect(this.conts.board.x, this.conts.board.y, this.conts.board.width, this.conts.board.height);
        this.ctx.strokeRect(this.conts.title.x, this.conts.title.y, this.conts.title.width, this.conts.title.height);
        this.ctx.strokeRect(this.conts.info.x, this.conts.info.y, this.conts.info.width, this.conts.info.height);
        this.ctx.strokeRect(this.conts.next.x, this.conts.next.y, this.conts.next.width, this.conts.next.height);
        this.ctx.strokeRect(this.conts.score.x, this.conts.score.y, this.conts.score.width, this.conts.score.height);
    }

    fitPiece(piece: Piece, x: number, y: number): { safeX: number, safeY: number} {
        let toX = x;
        let toY = y;
        if (piece.getRows() + y >= ROWS) {
            toY = ROWS - piece.getRows();
        }
        if (piece.getCols() + x >= COLS) {
            toX = COLS - piece.getCols();
        }
        return {
            safeX: toX,
            safeY: toY,
        };
    }

    drawFacets(x: number, y: number) {
        const dim = this.unit(1);
        const shadeW = Math.round(dim / FACET_DIVISOR);
        this.ctx.globalCompositeOperation = 'screen';
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + shadeW, y + shadeW);
        this.ctx.lineTo(x + dim - shadeW, y + shadeW);
        this.ctx.lineTo(x + dim, y);
        this.ctx.fill();
        
        this.ctx.fillStyle = 'rgba(127, 127, 127, 0.4)';
        this.ctx.beginPath();
        this.ctx.moveTo(x + dim, y);
        this.ctx.lineTo(x + dim - shadeW, y + shadeW);
        this.ctx.lineTo(x + dim - shadeW, y + dim - shadeW);
        this.ctx.lineTo(x + dim, y + dim);
        this.ctx.fill();
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + dim);
        this.ctx.lineTo(x + shadeW, y + dim - shadeW);
        this.ctx.lineTo(x + dim - shadeW, y + dim - shadeW);
        this.ctx.lineTo(x + dim, y + dim);
        this.ctx.fill();
        
        this.ctx.fillStyle = 'rgba(127, 127, 127, 0.4)';
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + shadeW, y + shadeW);
        this.ctx.lineTo(x + shadeW, y + dim - shadeW);
        this.ctx.lineTo(x, y + dim);
        this.ctx.fill();

        this.ctx.globalCompositeOperation = 'source-over';
        return this;
    }

    drawPiece(piece: Piece, x: number, y: number) {
        const { safeX, safeY } = this.fitPiece(piece, x, y);
        const startX = this.conts.board.x + this.unit(safeX);
        const startY = this.conts.board.y + this.unit(safeY);
        this.placePiece(piece, startX, startY);
        return this;
    }

    placePiece(piece: Piece, x: number, y: number) {
        const dim = this.unit(1);
        piece.getMatrix().forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                if (col === 1) {
                    this.ctx.fillStyle = piece.getColor();
                    this.ctx.globalCompositeOperation = 'source-over';
                    const pX = x + this.unit(colIndex);
                    const pY = y + this.unit(rowIndex);
                    this.ctx.fillRect(pX, pY, dim, dim);
                    this.drawFacets(pX, pY);
                }
            });
        });
        return this;
    }

    drawLetter(letter: string, x: number, y: number) {
        const startX = this.unit(x);
        const startY = this.unit(y);
        const dim = this.gridSize / ALPHA_DIVISOR;
        let key = letter.toLowerCase();
        if (key === ' ') {
            key = SPACE_PLACEHOLDER;
        }
        const letterForm = alphabet[key];
        this.ctx.fillStyle = '#000';
        if (letterForm) {
            letterForm.forEach((row, rowIndex) => {
                row.forEach((col, colIndex) => {
                    if (col === 1) {
                        this.ctx.fillRect(startX + (colIndex * dim), startY + (rowIndex * dim), dim, dim);
                    }
                });
            });
        }
        return this;
    }

    writeWord(word: string, x: number, y: number) {
        word.split('').forEach((letter, index) => {
            this.drawLetter(letter, x + index, y);
        });
        return this;
    }

    log(...msg): void {
        if (this.opts.debug === true) {
            console.log('[Tetris]', ...msg);
        }
    }

    init(): Promise<void> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                this.sprite = img;
                resolve();
            };
            img.onerror = reject;
        });
    }


    startGame() {

    }

    pauseGame() {

    }

    endGame() {

    }

}