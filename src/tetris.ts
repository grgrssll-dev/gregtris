import { rand } from './utils';
import alphabet, { SPACE_PLACEHOLDER } from './alphabet';
import Piece from './piece';
import CurrentPiece from './currentPiece';
import { Container, CoordType, GameStates } from './interfaces';
import gamePieces, {
    FLAT,
    L_RIGHT,
    S_LEFT,
    MIDDLE,
} from './gamePieces';
import { 
    Direction,
    MovementDirection,
    directionsArray,
    DIR_UP,
    DIR_RIGHT,
    DIR_DOWN,
    DIR_LEFT,
} from './directions';
import {
    ROWS,
    COLS,
    GAME_ROWS,
    GAME_COLS,
    MARGIN,
    MX,
    GAME_SIZE_DIVISOR,
    FACET_DIVISOR,
    ALPHA_DIVISOR,
    DIMENSION_RATIO,
    GAME_STATE_BEFORE_START,
    GAME_STATE_STARTED,
    GAME_STATE_PAUSED,
    GAME_STATE_OVER,
    ANIMATION_STATE_DROPPING,
    ANIMATION_STATE_CLEARING,
    ANIMATION_STATE_WAITING,
} from './constants';

const KEY_LEFT = 'ArrowLeft';
const KEY_A = 'a';

const KEY_UP = 'ArrowUp';
const KEY_W = 'w';

const KEY_RIGHT = 'ArrowRight';
const KEY_D = 'd';
const KEY_SPACE = 'Space'

const KEY_DOWN = 'ArrowDown';
const KEY_S = 's';

const KEY_ENTER = 'Enter';

const KEYS_ROTATE = [KEY_UP, KEY_W];
const KEYS_RIGHT = [KEY_RIGHT, KEY_D];
const KEYS_DROP = [KEY_DOWN, KEY_S, KEY_SPACE];
const KEYS_LEFT = [KEY_LEFT, KEY_A];

const gamePiecesArray = Object.values(gamePieces);
const minDir = Math.min(...directionsArray);
const maxDir = Math.max(...directionsArray);


export default class Tetris {
    opts = {
        dim: 0,
        debug: false,
    };

    gridSize = 0;
    width = 0;
    height = 0;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    bucket: number[][] = [];

    conts: Record<string, Container> = {
        game: { x: 0, y: 0, width: GAME_COLS, height: GAME_ROWS },
        board: { x: 1, y: 3, width: COLS, height: ROWS },
        title: { x: 1, y: 1, width: GAME_COLS - (MARGIN * 2), height: 1 },
        info: { x: COLS + (MARGIN * 2), y: 3, width: GAME_COLS - COLS - (MARGIN * 3), height: 0 },
        score: { x: COLS + (MARGIN * 2), y: 3, width: 7, height: 12 },
        next: { x: COLS + (MARGIN * 2), y: 16, width: 7, height: 7 },
    };

    level = 1;
    linesCleared = 0;
    gameScore = 0;
    topScore = 0;

    currentX = 0;
    currentY = 0;
    currentPiece!: CurrentPiece;
    nextPiece: Piece;

    gameState: GameStates = GAME_STATE_BEFORE_START;

    keyListenerBound = this.keyPressListener.bind(this);

    constructor(canvas: HTMLCanvasElement, opts: Record<any, any>) {
        this.canvas = canvas;
        this.opts = Object.assign(this.opts, {
            dim: opts.dim,
            debug: opts.debug || this.opts.debug,
        });
        if (!this.opts.dim || Number.isNaN(this.opts.dim)) {
            throw new Error('Invalid dimension');
        }
        if (!this.canvas || !(this.canvas instanceof HTMLCanvasElement)) {
            throw new Error('Invalid canvas');
        }
        this.log('options', this.opts);
        const ctx = this.canvas.getContext('2d');
        if (!ctx) {
            throw new Error('Missing Rendering Context');
        }
        this.ctx = ctx;
        this.gridSize = Math.floor(this.opts.dim / GAME_ROWS) * MX;
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
        this.drawGrid();
        this.drawOutlilnes();
        this.setText();

        this.nextPiece = this.getRandomPiece();
        this.setNextPiece();

        const p1 = gamePieces.FLAT.clone(DIR_UP);
        const p2 = gamePieces.L_RIGHT.clone(DIR_RIGHT);
        const p3 = gamePieces.S_LEFT.clone(DIR_LEFT);
        const p4 = gamePieces.MIDDLE.clone(DIR_DOWN);
        this.drawPieceOnBoard(p1, 1, 1);
        this.drawPieceOnBoard(p2, 6, 2);
        this.drawPieceOnBoard(p3, 3, 5);
        this.drawPieceOnBoard(p4, 5, 7);

        window.addEventListener('keypress', this.keyListenerBound);
    }

    keyPressListener(e: KeyboardEvent) {
        const keyCode = e.code || e.key;
        let handled = false;
        if (KEYS_LEFT.includes(keyCode)) {
            handled = true;
            this.moveCurrentPiece(DIR_LEFT);
        }
        if (KEYS_RIGHT.includes(keyCode)) {
            handled = true;
            this.moveCurrentPiece(DIR_RIGHT);
        }
        if (KEYS_ROTATE.includes(keyCode)) {
            handled = true;
            this.rotateCurrentPiece();
        }
        if (KEYS_DROP.includes(keyCode)) {
            handled = true;
            this.dropCurrentPiece();
        }
        if (keyCode === KEY_ENTER) {
            switch(this.gameState) {
                case GAME_STATE_BEFORE_START:
                    handled = true;
                    this.startGame();
                    break;
                case GAME_STATE_OVER:
                    handled = true;
                    this.resetGame();
                    break;
                default:
                    break;
            }
        }
        if (handled) {
            e.preventDefault();
        }
    }

    moveCurrentPiece(dir: MovementDirection) {
        const curr = this.currentPiece;
        let newX = curr.getX();
        switch(dir) {
            case DIR_LEFT: {
                const {safeX } = this.fitPiece(curr, curr.getX() - 1, curr.getY());
                newX = safeX;
                break;
            }
            case DIR_RIGHT:{
                const {safeX } = this.fitPiece(curr, curr.getX() + 1, curr.getY());
                newX = safeX;
                break;
            }
            default:
                break;
        }
        this.currentPiece.setX(newX);
    }

    rotateCurrentPiece() {
        this.currentPiece = this.currentPiece.clone(DIR_RIGHT);
    }

    dropCurrentPiece() {
        
    }

    randDirection(): Direction {
        return rand(minDir, maxDir) as Direction;
    }

    randItem<T>(arr: Array<T>): T {
        return arr[rand(0, arr.length - 1)] as T;
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

    getRandomPiece() {
        gamePiecesArray.sort();
        const direction = this.randDirection();
        return this.randItem<Piece>(gamePiecesArray).clone(direction);
    }

    setNextPiece(): CurrentPiece {
        const x = Math.floor((COLS - this.nextPiece.getCols()) / 2);
        const y = 0;
        this.currentPiece = CurrentPiece.fromPiece(this.nextPiece, x, y);
        this.nextPiece = this.getRandomPiece();
        this.log('NextPiece', this.nextPiece);
        this.placePiece(this.nextPiece, this.conts.next.x + MARGIN, this.conts.next.y + (MARGIN * 2));
        return this.currentPiece;
    }

    gridToPx(gridCoord: number) :number {
        return this.gridSize * gridCoord;
    }

    boardOffset(coord: CoordType, n: number): number {
        return n + this.conts.board[coord];
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
        const {
            board,
            title,
            info,
            next,
            score,
        } = this.conts;
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = MX;
        this.ctx.strokeRect(
            this.gridToPx(board.x), 
            this.gridToPx(board.y), 
            this.gridToPx(board.width), 
            this.gridToPx(board.height)
        );
        this.ctx.strokeRect(
            this.gridToPx(title.x), 
            this.gridToPx(title.y), 
            this.gridToPx(title.width), 
            this.gridToPx(title.height)
        );
        this.ctx.strokeRect(
            this.gridToPx(info.x), 
            this.gridToPx(info.y), 
            this.gridToPx(info.width), 
            this.gridToPx(info.height)
        );
        this.ctx.strokeRect(
            this.gridToPx(next.x), 
            this.gridToPx(next.y), 
            this.gridToPx(next.width), 
            this.gridToPx(next.height)
        );
        this.ctx.strokeRect(
            this.gridToPx(score.x), 
            this.gridToPx(score.y), 
            this.gridToPx(score.width), 
            this.gridToPx(score.height)
        );
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
        const dim = this.gridToPx(1);
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

    drawPieceOnBoard(piece: Piece, x: number, y: number) {
        const { safeX, safeY } = this.fitPiece(piece, x, y);
        this.placePiece(piece, this.boardOffset('x', safeX), this.boardOffset('y', safeY));
        return this;
    }

    placePiece(piece: Piece, x: number, y: number) {
        const dim = this.gridToPx(1);
        const pxX = this.gridToPx(x);
        const pxY = this.gridToPx(y);
        piece.getMatrix().forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                if (col === 1) {
                    this.ctx.fillStyle = piece.getColor();
                    this.ctx.globalCompositeOperation = 'source-over';
                    const pX = pxX + this.gridToPx(colIndex);
                    const pY = pxY + this.gridToPx(rowIndex);
                    this.ctx.fillRect(pX, pY, dim, dim);
                    this.drawFacets(pX, pY);
                }
            });
        });
        return this;
    }

    drawLetter(letter: string, x: number, y: number) {
        const startX = this.gridToPx(x);
        const startY = this.gridToPx(y);
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

    addPieceToBucket(piece: Piece, x: number, y: number) {
        // TODO
    }

    clearBucketRectangle() {
        // TODO
    }

    drawBucket() {
        // TODO
    }

    detectCollision(piece: Piece, x: number, y: number) {
        // TODO
    }

    detectFullRows() {
        // TODO
    }

    clearRow(y: number) {
        // TODO
    }

    log(...msg :any[]): void {
        if (this.opts.debug === true) {
            console.log('[Tetris]', ...msg);
        }
    }

    init(): Promise<void> {
        return Promise.resolve();
        // return new Promise((resolve, reject) => {
        //     const img = new Image();
        //     img.onload = () => {
        //         resolve();
        //     };
        //     img.onerror = reject;
        // });
    }

    resetGame() {

    }


    startGame() {
        this.gameState = GAME_STATE_STARTED;
    }

    pauseGame() {
        this.gameState = GAME_STATE_PAUSED;
    }

    endGame() {
        this.gameState = GAME_STATE_OVER;
    }

}