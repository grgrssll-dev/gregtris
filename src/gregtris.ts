import { rand } from './utils';
import alphabet, { SPACE_PLACEHOLDER } from './alphabet';
import Piece from './piece';
import CurrentPiece from './currentPiece';
import { Container, CoordType, GameState } from './interfaces';
import gamePieces from './gamePieces';
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
    PX,
    GAME_SIZE_DIVISOR,
    FACET_DIVISOR,
    ALPHA_DIVISOR,
    DIMENSION_RATIO,
    GAME_STATE_LOADING,
    GAME_STATE_BEFORE_START,
    GAME_STATE_STARTED,
    GAME_STATE_PAUSED,
    GAME_STATE_OVER as GAME_STATE_GAME_OVER,
    ANIMATION_STATE_DROPPING,
    ANIMATION_STATE_CLEARING,
    ANIMATION_STATE_WAITING,
    HIGH_SCORE_KEY,
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
const KEY_ESCAPE = 'Escape';
const KEY_F2 = 'F2';

const KEYS_ROTATE = [KEY_UP, KEY_W];
const KEYS_RIGHT = [KEY_RIGHT, KEY_D];
const KEYS_DROP = [KEY_DOWN, KEY_S, KEY_SPACE];
const KEYS_LEFT = [KEY_LEFT, KEY_A];

const gamePiecesArray = Object.values(gamePieces);
const minDir = Math.min(...directionsArray);
const maxDir = Math.max(...directionsArray);


export default class Gregtris {
    private opts = {
        dim: 0,
        debug: false,
    };

    private gridSize = 0;
    private width = 0;
    private height = 0;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private bucket: number[][] = [];

    private conts: Record<string, Container> = {
        game: { x: 0, y: 0, width: GAME_COLS, height: GAME_ROWS },
        board: { x: 1, y: 3, width: COLS, height: ROWS },
        title: { x: 1, y: 1, width: GAME_COLS - (MARGIN * 2), height: 1 },
        info: { x: COLS + (MARGIN * 2), y: 3, width: GAME_COLS - COLS - (MARGIN * 3), height: 0 },
        score: { x: COLS + (MARGIN * 2), y: 3, width: 7, height: 12 },
        next: { x: COLS + (MARGIN * 2), y: 16, width: 7, height: 7 },
        modal: { x: 5, y: 6, width: 10, height: 12 },
    };

    private level = 1;
    private linesCleared = 0;
    private currentScore = 0;
    private highScore = 0;
    private isNewHighScore = false;

    private currentPiece!: CurrentPiece;
    private nextPiece!: Piece;

    private gameState: GameState = GAME_STATE_LOADING;

    private previousTime: number|null = null;
    private beginTime: number|null = null;
    private loadingTime: number|null = null;
    private startTime: number|null = null;
    private pauseTime: number|null = null;
    private overTime: number|null = null;

    private boundKeyPressListener = this.keyPressListener.bind(this);
    private boundLoop = this.loop.bind(this);

    private requestAnimationFrameHandle: number|null = null;

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
        const storageHighScore = parseInt(`${localStorage.getItem(HIGH_SCORE_KEY) || 0}`, 10);
        if (!Number.isNaN(storageHighScore)) {
            this.highScore = storageHighScore;
        }

        // this.nextPiece = this.getRandomPiece();
        // this.setNextPiece();

        // const p1 = gamePieces.FLAT.clone(DIR_UP);
        // const p2 = gamePieces.L_RIGHT.clone(DIR_RIGHT);
        // const p3 = gamePieces.S_LEFT.clone(DIR_LEFT);
        // const p4 = gamePieces.MIDDLE.clone(DIR_DOWN);
        // this.drawPieceOnBoard(p1, 1, 1);
        // this.drawPieceOnBoard(p2, 6, 2);
        // this.drawPieceOnBoard(p3, 3, 5);
        // this.drawPieceOnBoard(p4, 5, 7);

        // this.loop();

        window.addEventListener('keypress', this.boundKeyPressListener);
    }

    private log(...msg :any[]): void {
        if (this.opts.debug === true) {
            console.log('[Gregtris]', ...msg);
        }
    }

    private keyPressListener(e: KeyboardEvent) {
        const keyCode = e.code || e.key;
        let handled = false;
        if (this.gameState === GAME_STATE_STARTED) {
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
        }
        if (keyCode === KEY_ENTER) {
            if (this.gameState === GAME_STATE_BEFORE_START || this.gameState === GAME_STATE_PAUSED) {
                handled = true;
                this.startGame();
            } else if (this.gameState === GAME_STATE_GAME_OVER) {
                handled = true;
                this.resetGame();
            }
        }
        if (keyCode === KEY_ESCAPE) {
            this.pauseGame();
            handled = true;
        }
        if (keyCode === KEY_F2) {
            this.resetGame();
            handled = true;
        }
        if (handled) {
            e.preventDefault();
        }
    }

    private moveCurrentPiece(dir: MovementDirection) {
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

    private rotateCurrentPiece() {
        this.currentPiece = this.currentPiece.clone(DIR_RIGHT);
    }

    private dropCurrentPiece() {
        
    }

    private randDirection(): Direction {
        return rand(minDir, maxDir) as Direction;
    }

    private randItem<T>(arr: Array<T>): T {
        return arr[rand(0, arr.length - 1)] as T;
    }

    private setText() {
        const levelText = `LEVEL ${this.level}`;
        this.writeWord(levelText, Math.floor((GAME_COLS - 2 - levelText.length) / 2) + 1 , 1);
        this.writeWord('TOP', 12, 3);
        this.writeWord(`${this.highScore}`, 12, 4);
        this.writeWord('SCORE', 12, 7);
        this.writeWord(`${this.currentScore}`, 12, 8);
        this.writeWord('LINES', 12, 11);
        this.writeWord(`${this.linesCleared}`, 12, 12);
        this.writeWord('NEXT', 12, 16);
    }

    private getRandomPiece() {
        gamePiecesArray.sort();
        const direction = this.randDirection();
        return this.randItem<Piece>(gamePiecesArray).clone(direction);
    }

    private setNextPiece(): CurrentPiece {
        const x = Math.floor((COLS - this.nextPiece.getCols()) / 2);
        const y = 0;
        this.currentPiece = CurrentPiece.fromPiece(this.nextPiece, x, y);
        this.nextPiece = this.getRandomPiece();
        this.log('NextPiece', this.nextPiece);
        this.placePiece(this.nextPiece, this.conts.next.x + MARGIN, this.conts.next.y + (MARGIN * 2));
        return this.currentPiece;
    }

    private px(gridCoord: number) :number {
        return this.gridSize * gridCoord;
    }

    private boardOffset(coord: CoordType, n: number): number {
        return n + this.conts.board[coord];
    }

    private drawGrid() {
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
    
    private drawOutlilnes() {
        const {
            board,
            title,
            info,
            next,
            score,
        } = this.conts;
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = PX;
        this.ctx.strokeRect(
            this.px(board.x), 
            this.px(board.y), 
            this.px(board.width), 
            this.px(board.height)
        );
        this.ctx.strokeRect(
            this.px(title.x), 
            this.px(title.y), 
            this.px(title.width), 
            this.px(title.height)
        );
        this.ctx.strokeRect(
            this.px(info.x), 
            this.px(info.y), 
            this.px(info.width), 
            this.px(info.height)
        );
        this.ctx.strokeRect(
            this.px(next.x), 
            this.px(next.y), 
            this.px(next.width), 
            this.px(next.height)
        );
        this.ctx.strokeRect(
            this.px(score.x), 
            this.px(score.y), 
            this.px(score.width), 
            this.px(score.height)
        );
    }

    private setHighScore(score: number) {
        localStorage.set(HIGH_SCORE_KEY, score);
    }

    private drawModal() {
        this.drawGrid();
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
        this.ctx.fillRect(
            this.px(this.conts.modal.x), 
            this.px(this.conts.modal.y), 
            this.px(this.conts.modal.width), 
            this.px(this.conts.modal.height)
        );
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = PX;
        this.ctx.strokeRect(
            this.px(this.conts.modal.x), 
            this.px(this.conts.modal.y), 
            this.px(this.conts.modal.width), 
            this.px(this.conts.modal.height)
        );
    }

    private clearModal() {
        this.ctx.clearRect(
            this.px(this.conts.modal.x) + PX, 
            this.px(this.conts.modal.y) + PX, 
            this.px(this.conts.modal.width) + (PX * 2), 
            this.px(this.conts.modal.height) + (PX * 2)
        );
    }

    private fitPiece(piece: Piece, x: number, y: number): { safeX: number, safeY: number} {
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

    private drawFacets(x: number, y: number) {
        const dim = this.px(1);
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

    private drawPieceOnBoard(piece: Piece, x: number, y: number) {
        const { safeX, safeY } = this.fitPiece(piece, x, y);
        this.placePiece(piece, this.boardOffset('x', safeX), this.boardOffset('y', safeY));
        return this;
    }

    private placePiece(piece: Piece, x: number, y: number) {
        const dim = this.px(1);
        const pxX = this.px(x);
        const pxY = this.px(y);
        piece.getMatrix().forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                if (col === 1) {
                    this.ctx.fillStyle = piece.getColor();
                    this.ctx.globalCompositeOperation = 'source-over';
                    const pX = pxX + this.px(colIndex);
                    const pY = pxY + this.px(rowIndex);
                    this.ctx.fillRect(pX, pY, dim, dim);
                    this.drawFacets(pX, pY);
                }
            });
        });
        return this;
    }

    private drawLetter(letter: string, x: number, y: number, color = '#000') {
        const startX = this.px(x);
        const startY = this.px(y);
        const dim = this.gridSize / ALPHA_DIVISOR;
        let key = letter.toLowerCase();
        if (key === ' ') {
            key = SPACE_PLACEHOLDER;
        }
        const letterForm = alphabet[key];
        this.ctx.fillStyle = color;
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

    private writeWord(word: string, x: number, y: number, color = '#000') {
        word.split('').forEach((letter, index) => {
            this.drawLetter(letter, x + index, y, color);
        });
        return this;
    }

    private setGameState(gameState: GameState) {
        this.log('GameState', gameState);
        this.gameState = gameState;
    }

    private clearGameBoard() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private addPieceToBucket(piece: Piece, x: number, y: number) {
        // TODO
    }

    private clearBucketRectangle() {
        this.ctx.clearRect(
            this.px(this.conts.board.x) + PX, 
            this.px(this.conts.board.y) + PX, 
            this.px(this.conts.board.width) - (PX * 2),
            this.px(this.conts.board.height) - (PX * 2)
        );
    }

    private drawBucket() {
        // TODO
    }

    private detectCollision(piece: Piece, x: number, y: number) {
        // TODO
    }

    private detectFullRows() {
        // TODO
    }

    private clearRow(y: number) {
        // TODO
    }

    private setScore(score: number) {
        this.currentScore = score;
        if (this.currentScore > this.highScore) {
            this.isNewHighScore = true;
        }
    }

    private incrementScore(scoreInc: number) {
        this.setScore(this.currentScore + scoreInc);
    }

    private loop(time: number) {
        this.log('loop', this.gameState, (time - (this.previousTime || time)));
        switch(this.gameState) {
            case GAME_STATE_BEFORE_START:
                this.loopBeforeStart(time);
                break;
            case GAME_STATE_LOADING:
                this.loopLoading(time);
                break;
            case GAME_STATE_STARTED:
                this.loopStarted(time);
                break;
            case GAME_STATE_PAUSED:
                this.loopPaused(time);
                break;
            case GAME_STATE_GAME_OVER:
                this.loopGameOver(time);
                break;
        }
        this.previousTime = time;

    }

    private loopBeforeStart(time: number) {
        this.clearGameBoard();
        this.drawModal();
        this.writeWord('GREGTRIS', 6, 7, '#092');
        this.writeWord('PRESS', 7, 9, '#06F');
        this.writeWord('ENTER', 7, 10, '#f60');
        this.writeWord('TO START', 6, 11, '#f00');
        this.writeWord('NEW GAME', 6, 12, '#f0f');
    }

    private loopLoading(time: number) {
        this.clearGameBoard();
        this.drawModal();
        this.writeWord('GREGTRIS', 6, 7, '#092');
        this.writeWord('LOADING…', 6, 9, '#f00');
    }

    private loopStarted(time: number) {
        this.clearGameBoard();
        this.drawGrid();
        this.drawOutlilnes();
        this.setText();
        // TODO game mechanics
    }

    private loopPaused(time: number) {
        this.drawGrid();
        this.drawOutlilnes();
        this.setText();
        this.drawModal();
        this.writeWord('PAUSED', 7, 11, '#777');
    }

    private loopGameOver(time: number) {
        
    }

    init(): Promise<void> {
        this.loadingTime = Date.now();
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.begin();
                this.triggerLoop();
                resolve(void 0);
            }, 1000);
            // const img = new Image();
            // img.onload = () => {
            //     resolve();
            // };
            // img.onerror = reject;
        });
    }

    private triggerLoop() {
        this.requestAnimationFrameHandle = requestAnimationFrame(this.boundLoop);
    }

    private begin() {
        this.setGameState(GAME_STATE_BEFORE_START);
        this.beginTime = Date.now();
    }

    resetGame() {
        this.begin();
        this.previousTime = null;
        this.loadingTime = null;
        this.startTime = null;
        this.pauseTime = null;
        this.overTime = null;
        this.isNewHighScore = false;
        this.triggerLoop();
    }

    startGame() {
        if (!this.startTime) {
            this.startTime = Date.now();
        }
        if (this.gameState === GAME_STATE_PAUSED && this.pauseTime) {
            this.startTime = this.startTime + (Date.now() - this.pauseTime);
            this.pauseTime = null;
        }
        this.setGameState(GAME_STATE_STARTED);
    }

    pauseGame() {
        this.pauseTime = Date.now();
        this.setGameState(GAME_STATE_PAUSED);
    }

    endGame() {
        this.overTime = Date.now();
        this.setGameState(GAME_STATE_GAME_OVER);
        if (this.currentScore > this.highScore) {
            this.setHighScore(this.currentScore);
        }
    }

    kill() {
        // TODO, make this cut screen to some page?
        this.resetGame();
        if (this.requestAnimationFrameHandle) {
            cancelAnimationFrame(this.requestAnimationFrameHandle);
        }
    }

}