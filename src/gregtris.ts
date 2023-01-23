import { rand, bucketRowFull, deconstructColor, constructColor } from './utils';
import alphabet, { SPACE_PLACEHOLDER } from './alphabet';
import Piece from './piece';
import CurrentPiece from './currentPiece';
import { Container, CoordType, GameState, DropState } from './interfaces';
import gamePieces from './gamePieces';
import Keys from './keys';
import Rules from './rules';
import { 
    Direction,
    MovementDirection,
    directionsArray,
    DIR_RIGHT,
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
    GAME_STATE_OVER,
    HIGH_SCORE_KEY,
    DROP_STATE_WAITING,
    DROP_STATE_DROPPING,
    DROP_STATE_STOPPED,
} from './constants';

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

    private bucket: string[][] = [];

    private conts: Record<string, Container> = {
        game: { x: 0, y: 0, width: GAME_COLS, height: GAME_ROWS },
        board: { x: 1, y: 3, width: COLS, height: ROWS },
        title: { x: 1, y: 1, width: GAME_COLS - (MARGIN * 2), height: 1 },
        score: { x: COLS + (MARGIN * 2), y: 3, width: 7, height: 12 },
        next: { x: COLS + (MARGIN * 2), y: 16, width: 7, height: 7 },
        modal: { x: 5, y: 6, width: 10, height: 12 },
    };

    private killed = false;
    private level = 0;
    private linesCleared = 0;
    private currentScore = 0;
    private highScore = 0;
    private isNewHighScore = false;
    private isHardDrop = false;
    private isSoftDrop = false;

    private currentPiece!: CurrentPiece;
    private nextPiece!: Piece;

    private gameState: GameState = GAME_STATE_LOADING;

    private previousTime: number = 0;
    private beginTime: number|null = null;
    private loadingTime: number|null = null;
    private startTime: number|null = null;
    private pauseTime: number|null = null;
    private overTime: number|null = null;
    private pieceTime: number|null = null;
    private dropLockTime: number|null = null;
    private clearRowTime: number|null = null;
    
    private rowsToClear: number[] = [];

    private loopCounter = 0;

    private boundKeyDownListener = this.keyDownListener.bind(this);
    private boundKeyUpListener = this.keyUpListener.bind(this);
    private boundResizeListener = this.resize.bind(this);
    private boundLoop = this.loop.bind(this);

    private loopHandlers: Record<GameState, (time: number) => void> = {
        [GAME_STATE_BEFORE_START]: this.loopBeforeStart.bind(this),
        [GAME_STATE_LOADING]: this.loopLoading.bind(this),
        [GAME_STATE_STARTED]: this.loopStarted.bind(this),
        [GAME_STATE_PAUSED]: this.loopPaused.bind(this),
        [GAME_STATE_OVER]: this.loopGameOver.bind(this),
    };

    private requestAnimationFrameHandle: number|null = null;

    constructor(canvas: HTMLCanvasElement, opts: Record<any, any>) {
        this.canvas = canvas;
        if (!this.canvas || !(this.canvas instanceof HTMLCanvasElement)) {
            throw new Error('Invalid canvas');
        }
        const parent = this.canvas.parentNode as HTMLElement;
        if (!parent) {
            throw new Error('Unattached Canvas');
        }
        this.opts = Object.assign(this.opts, {
            dim: opts.dim || Math.min(parent.clientWidth, parent.clientHeight), 
            debug: opts.debug || this.opts.debug,
        });
        if (!this.opts.dim || Number.isNaN(this.opts.dim)) {
            throw new Error('Invalid dimension');
        }
        this.log('options', this.opts);
        this.log('KeyBoardShorcuts', { ...Keys });
        const ctx = this.canvas.getContext('2d');
        if (!ctx) {
            throw new Error('Missing Rendering Context');
        }
        this.ctx = ctx;
        this.size();
        for(let r = 0; r < ROWS; r++) {
            const row: string[] = [];
            for (let c = 0; c < COLS; c++) {
                row.push('');
            }
            this.bucket.push(row);
        }
        const storageHighScore = parseInt(`${localStorage.getItem(HIGH_SCORE_KEY) || 0}`, 10);
        if (!Number.isNaN(storageHighScore)) {
            this.highScore = storageHighScore;
        }
        this.nextPiece = this.getRandomPiece();

        window.addEventListener('keydown', this.boundKeyDownListener);
        window.addEventListener('keyup', this.boundKeyUpListener);
        window.addEventListener('resize', this.boundResizeListener);
        window.addEventListener('orientationchange', this.boundResizeListener);
    }

    private resize() {
        const parent = this.canvas.parentNode as HTMLElement;
        this.opts.dim = Math.min(parent.clientWidth, parent.clientHeight),
        this.size();
    }

    private size() {
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
    }

    private log(...msg :any[]): void {
        if (this.opts.debug === true) {
            console.log('[Gregtris]', ...msg);
        }
    }

    private keyUpListener(e: KeyboardEvent) {
        const {
            code,
            key,
            metaKey,
            shiftKey,
            altKey,
            ctrlKey,
        } = e;
        const keyCode = code || key;
        const modifierKey = metaKey || shiftKey || altKey || ctrlKey;
        let handled = false;
        if (!modifierKey) {
            if (this.isStarted()) {
                if (Keys.DROP.includes(keyCode)) {
                    handled = true;
                    this.clearDropPieceModifier();
                }
            }
        }
        if (handled) {
            this.log('KeyEvent', keyCode);
            e.preventDefault();
        }
    }

    private keyDownListener(e: KeyboardEvent) {
        const {
            code,
            key,
            metaKey,
            shiftKey,
            altKey,
            ctrlKey,
        } = e;
        const keyCode = code || key;
        const modifierKey = metaKey || shiftKey || altKey || ctrlKey;
        let handled = false;
        if (!modifierKey) {
            if (this.isStarted()) {
                if (Keys.LEFT.includes(keyCode)) {
                    handled = true;
                    this.moveCurrentPiece(DIR_LEFT);
                }
                if (Keys.RIGHT.includes(keyCode)) {
                    handled = true;
                    this.moveCurrentPiece(DIR_RIGHT);
                }
                if (Keys.ROTATE.includes(keyCode)) {
                    handled = true;
                    this.rotateCurrentPiece();
                }
                if (Keys.DROP.includes(keyCode)) {
                    handled = true;
                    this.setDropPieceModifier(false);
                }
                if (Keys.HARD_DROP.includes(keyCode)) {
                    handled = true;
                    this.setDropPieceModifier(true);
                }
                if (Keys.PAUSE.includes(keyCode)) {
                    handled = true;
                    this.pauseGame();
                }
            }
            if (Keys.ENTER.includes(keyCode)) {
                if (this.isDoneLoading() || this.isPaused()) {
                    handled = true;
                    this.startGame();
                } else if (this.isGameOver()) {
                    handled = true;
                    this.resetGame();
                }
            }
            if (Keys.RESTART.includes(keyCode)) {
                handled = true;
                this.resetGame();
            }
            if (Keys.KILL.includes(keyCode)) {
                handled = true;
                this.kill();
            }
        }
        if (handled) {
            this.log('KeyEvent', keyCode);
            e.preventDefault();
        }
    }

    private moveCurrentPiece(dir: MovementDirection) {
        if (this.isHardDrop) {
            return;
        }
        let newX = this.currentPiece.getX();
        switch(dir) {
            case DIR_LEFT: {
                if (this.canMoveLeft()) {
                    newX = newX - 1;
                }
                break;
            }
            case DIR_RIGHT:{
                if (this.canMoveRight()) {
                    newX = newX + 1;
                }
                break;
            }
            default:
                break;
        }
        this.currentPiece.setX(newX);
    }

    private rotateCurrentPiece() {
        if (this.isHardDrop) {
            return;
        }
        if (this.canRotate()) {
            this.currentPiece = this.currentPiece.clone(DIR_RIGHT);
            this.fixPosition(this.currentPiece);
        }
    }

    private randDirection(): Direction {
        return rand(minDir, maxDir) as Direction;
    }

    private randItem<T>(arr: Array<T>): T {
        return arr[rand(0, arr.length - 1)] as T;
    }

    private setGameText() {
        const levelText = `LEVEL ${this.level}`;
        this.writeWord(levelText, Math.floor((GAME_COLS - 2 - levelText.length) / 2) + 1 , 1);
        const topColor = this.isNewHighScore ? '#F20' : '#000';
        this.writeWord('TOP', this.conts.score.x, this.conts.score.y, '#ddd');
        this.writeWord(`${this.highScore}`, this.conts.score.x, this.conts.score.y + MARGIN, topColor);
        this.writeWord('SCORE', this.conts.score.x, this.conts.score.y + (MARGIN * 4), '#ddd');
        this.writeWord(`${this.currentScore}`, this.conts.score.x, this.conts.score.y + (MARGIN * 5));
        this.writeWord('LINES', this.conts.score.x, this.conts.score.y + (MARGIN * 8), '#ddd');
        this.writeWord(`${this.linesCleared}`, 12, this.conts.score.y + (MARGIN * 9));
        this.writeWord('NEXT', this.conts.next.x, this.conts.next.y, '#ddd');
    }

    private getRandomPiece() {
        gamePiecesArray.sort();
        const direction = this.randDirection();
        return this.randItem<Piece>(gamePiecesArray).clone(direction);
    }

    private px(gridCoord: number) :number {
        return this.gridSize * gridCoord;
    }

    private boardOffset(coord: CoordType, n: number): number {
        return n + this.conts.board[coord];
    }

    private drawGrid() {
        this.ctx.strokeStyle = 'rgba(255,255,255,0.1)';
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
            next,
            score,
        } = this.conts;
        this.ctx.strokeStyle = '#000';
        this.ctx.fillStyle = 'rgba(255,255,255,0.5)';
        this.ctx.lineWidth = PX;
        this.ctx.fillRect(
            this.px(board.x), 
            this.px(board.y), 
            this.px(board.width), 
            this.px(board.height)
        );
        this.ctx.fillRect(
            this.px(title.x), 
            this.px(title.y), 
            this.px(title.width), 
            this.px(title.height)
        );
        this.ctx.fillRect(
            this.px(next.x), 
            this.px(next.y), 
            this.px(next.width), 
            this.px(next.height)
        );
        this.ctx.fillRect(
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
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
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

    private fitPiece(piece: Piece, x: number, y: number): { safeX: number, safeY: number} {
        return {
            safeX: Math.min(x, Math.max(0, COLS - piece.getCols())),
            safeY: Math.min(y, Math.max(0, ROWS - piece.getRows())),
        };
    }

    private drawFacets(x: number, y: number, tween: number = 1) {
        const dim = this.px(1);
        const shadeW = Math.round(dim / FACET_DIVISOR);
        this.ctx.globalCompositeOperation = 'screen';
        this.ctx.fillStyle = `rgba(255, 255, 255, ${0.6 * tween})`;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + shadeW, y + shadeW);
        this.ctx.lineTo(x + dim - shadeW, y + shadeW);
        this.ctx.lineTo(x + dim, y);
        this.ctx.fill();
        
        this.ctx.fillStyle = `rgba(127, 127, 127, ${0.4 * tween})`;
        this.ctx.beginPath();
        this.ctx.moveTo(x + dim, y);
        this.ctx.lineTo(x + dim - shadeW, y + shadeW);
        this.ctx.lineTo(x + dim - shadeW, y + dim - shadeW);
        this.ctx.lineTo(x + dim, y + dim);
        this.ctx.fill();
        
        this.ctx.fillStyle = `rgba(0, 0, 0, ${0.5 * tween})`;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + dim);
        this.ctx.lineTo(x + shadeW, y + dim - shadeW);
        this.ctx.lineTo(x + dim - shadeW, y + dim - shadeW);
        this.ctx.lineTo(x + dim, y + dim);
        this.ctx.fill();
        
        this.ctx.fillStyle = `rgba(127, 127, 127, ${0.4 * tween})`;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + shadeW, y + shadeW);
        this.ctx.lineTo(x + shadeW, y + dim - shadeW);
        this.ctx.lineTo(x, y + dim);
        this.ctx.fill();

        this.ctx.globalCompositeOperation = 'source-over';
        return this;
    }

    private drawPieceOnBoard(piece: CurrentPiece) {
        const { safeX, safeY } = this.fitPiece(piece, piece.getX(), piece.getY());
        this.placePiece(piece, this.boardOffset('x', safeX), this.boardOffset('y', safeY));
        return this;
    }

    private initializePiece() {
        let piece = this.nextPiece;
        if (!piece) {
            this.currentPiece = CurrentPiece.fromPiece(this.getRandomPiece(), 0, 0);
        } else {
            this.currentPiece = CurrentPiece.fromPiece(piece, 0, 0);
        }
        this.nextPiece = this.getRandomPiece();
        const x = Math.floor((COLS - this.currentPiece.getCols()) / 2);
        this.currentPiece.setX(x);
        this.pieceTime = Date.now();
        if (this.doesOverlap(this.currentPiece, x, 0)) {
            this.log('GAME OVER');
            this.endGame();
        }
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

    private fillSquare(x: number, y: number, tween: number = 1) {
        if (this.bucket[y][x]) {
            const dim = this.px(1);
            const pX = this.px(x + this.conts.board.x);
            const pY = this.px(y + this.conts.board.y);
            const fillColor = deconstructColor(this.bucket[y][x]);
            const newFillColor = constructColor({
                ...fillColor,
                a: fillColor.a * tween,
            });
            this.ctx.fillStyle = newFillColor;
            this.ctx.globalCompositeOperation = 'source-over';
            this.ctx.fillRect(pX, pY, dim, dim);
            this.drawFacets(pX, pY, tween);
        }
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
        this.ctx.fillStyle = 'rgb(0,0,0)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private setLevel(level: number) {
        if (this.level !== level) {
            this.log('SetLevel', level);
        }
        this.level = level;
    }

    private incrementLines(lines: number) {
        let scoreIncrease = 0;
        this.linesCleared = this.linesCleared + lines;
        this.setLevel(Math.floor(this.linesCleared / Rules.LINES_LEVEL_CHANGE));
        if (Rules.Scoring.line[lines]) {
            scoreIncrease = Rules.Scoring.line[lines](this.level);
            this.incrementScore(scoreIncrease);
        }
        this.log('LinesCleared', lines, ', total', this.linesCleared, ', score increase', scoreIncrease);
    }

    private setDropPieceModifier(hardDrop: boolean) {
        if (!this.isHardDrop) {
            if (hardDrop) {
                this.isHardDrop = true;
            } else {
                this.isSoftDrop = true;
            }
        }
    }

    private clearDropPieceModifier(force = false) {
        if (force || !this.isHardDrop) {
            this.isHardDrop = false;
            this.isSoftDrop = false;
        }
    }

    private addPieceToBucket(piece: Piece, x: number, y: number) {
        this.log('AddingPiece', piece.getMatrix(), x, y);
        const matrix = piece.getMatrix();
        for (let bX = 0; bX < piece.getCols(); bX++) {
            for (let bY = 0; bY < piece.getRows(); bY ++) {
                if (!this.bucket[y + bY][x + bX]) {
                    this.bucket[y + bY][x + bX] = matrix[bY][bX] ? piece.getColor() : '';
                }
            }
        }
    }

    private drawBucket(rows: number[] = [], tween: number = 1) {
        rows.length ? this.log('DrawBucket',rows, tween) : null;
        for (let y = 0; y < this.bucket.length; y++) {
            const isAlphaRow = rows.includes(y);
            for (let x = 0; x < this.bucket[y].length; x++) {
                this.fillSquare(x, y, isAlphaRow ? 1 - tween : 1);
            }
        }
    }

    private drawCurrentPiece() {
        this.drawPieceOnBoard(this.currentPiece);
    }

    private drawNextPiece() {
        const nextX = this.conts.next.x + Math.floor((this.conts.next.width - this.nextPiece.getCols()) / 2);
        this.placePiece(this.nextPiece, nextX, this.conts.next.y + (MARGIN * 2));
    }

    private setScore(score: number) {
        this.log('SetScore', score);
        this.currentScore = score;
        if (this.currentScore > this.highScore) {
            this.highScore = this.currentScore;
            localStorage.setItem(HIGH_SCORE_KEY, `${this.currentScore}`);
            this.isNewHighScore = true;
        } else {
            this.isNewHighScore = false;
        }
    }

    private incrementScore(scoreInc: number) {
        this.setScore(this.currentScore + scoreInc);
    }

    private canMoveRight() :boolean {
        return !this.doesOverlap(this.currentPiece, this.currentPiece.getX() + 1, this.currentPiece.getY());
    }

    private canMoveLeft() :boolean {
        return !this.doesOverlap(this.currentPiece, this.currentPiece.getX() - 1, this.currentPiece.getY());
    }

    private canMoveDown() :boolean {
        return !this.doesOverlap(this.currentPiece, this.currentPiece.getX(), this.currentPiece.getY() + 1);
    }

    private canRotate(): boolean {
        const piece = this.currentPiece.clone();
        piece.rotate(DIR_RIGHT);
        this.fixPosition(piece);
        return !this.doesOverlap(piece, piece.getX(), piece.getY());
    }

    private doesOverlap(piece: Piece, x: number, y: number) {
        if (x < 0 || y < 0 || x + piece.getCols() > COLS || y + piece.getRows() > ROWS) {
            return true;
        }
        const matrix = piece.getMatrix();
        for (let bY = 0; bY < piece.getRows(); bY++) {
            for (let bX = 0; bX < piece.getCols(); bX++) {
                if (matrix[bY][bX] && this.bucket[y + bY][x + bX]) {
                    return true;
                }
            }
        }
        return false;
    }

    private fixPosition(piece: CurrentPiece) {
        piece.setX(Math.max(0, Math.min(piece.getX(), COLS - 1)));
        piece.setY(Math.max(0, Math.min(piece.getY(), ROWS - 1)));
    }

    private detectFullRows(): number[] {
        const fullRows = [];
        for (let y = 0; y < ROWS; y++) {
            if (bucketRowFull(this.bucket[y])) {
                fullRows.push(y);
            }
        }
        this.log('RowsCleared', fullRows.length, fullRows);
        return fullRows;
    }

    private clearRow(y: number) {
        const row = this.bucket[y];
        for (let col = 0; col < COLS; col++) {
            if (row[col] === '') {
                return;
            }
        }
        this.bucket.splice(y, 1);
        const newRow = [];
        for (let i = 0; i < COLS; i++) {
            newRow.push('');
        }
        this.bucket.unshift(newRow);
    }

    private loop(time: number) {
        const currentTime = Date.now();
        const handler = this.loopHandlers[this.gameState];
        if (handler) {
            handler(currentTime);
        }
        this.previousTime = currentTime;
        this.triggerLoop();
    }

    private loopBeforeStart(time: number) {
        this.clearGameBoard();
        this.drawGrid();
        this.drawModal();
        this.writeWord('GREGTRIS', 6, 7, '#092');
        this.writeWord('PRESS', 7, 9, '#06f');
        this.writeWord('ENTER', 7, 10, '#f20');
        this.writeWord('TO START', 6, 11, '#06f');
        this.writeWord('NEW GAME', 6, 12, '#f20');
    }

    private loopLoading(time: number) {
        this.clearGameBoard();
        this.drawGrid();
        this.drawModal();
        this.writeWord('GREGTRIS', 6, 7, '#092');
        this.writeWord('LOADING…', 6, 9, '#f20');
    }

    private clearRowAnimationTween(tween: number) {
        this.log('ClearRowAnim', tween, this.rowsToClear.join(','));
        this.clearGameBoard();
        this.drawGrid();
        this.drawOutlilnes();
        this.setGameText();
        this.drawCurrentPiece();
        this.drawNextPiece();
        this.drawBucket(this.rowsToClear, Math.max(0, Math.min(tween, 1)));
    }

    private calculateDrop(time: number): DropState {
        let dropped: DropState = DROP_STATE_WAITING;
        const diff = time - (this.pieceTime || 0);
        const showLog = this.loopCounter % 30 === 0;
        let dropSpeed = Rules.MiliSecondsPerDrop[this.level];
        if (this.isSoftDrop) {
            dropSpeed = Rules.MiliSecondsSoftDrop;
        }
        if (this.isHardDrop) {
            dropSpeed = Rules.MiliSecondsHardDrop;
        }
        const dropTimer = dropSpeed;
        if (showLog) {
            this.log('calcDrop', diff, '|', dropTimer, '|', Math.floor(diff / 1000), '|', Math.floor(dropTimer / 1000));
        }
        if (diff >= dropTimer) {
            if (this.canMoveDown()) {
                this.log('CanMoveDown');
                this.currentPiece.setY(this.currentPiece.getY() + 1);
                this.pieceTime = time;
                this.dropLockTime = null;
                dropped = DROP_STATE_DROPPING;
            } else {
                // TODO should still be able too rotate for duration of dropLock timer (and continue falling if able)...
                this.log('Dropped');
                this.addPieceToBucket(this.currentPiece, this.currentPiece.getX(), this.currentPiece.getY());
                this.initializePiece();
                this.clearDropPieceModifier(true);
                dropped = DROP_STATE_STOPPED;
                this.dropLockTime = time;
            }
        } else {
            if (showLog) {
                this.log('NOTHING', diff, Math.floor(dropTimer), time, this.pieceTime);
            }
        }
        return dropped;
    }

    private loopStarted(time: number) {
        if (this.dropLockTime){
            const dlDiff = time - this.dropLockTime;
            // this.log('DROP LOCK WAIT', dlDiff - Rules.Durations.LOCK_DOWN_DURATION, dlDiff, Rules.Durations.LOCK_DOWN_DURATION);
            if (dlDiff > Rules.Durations.LOCK_DOWN_DURATION) {
                this.dropLockTime = null;
                this.pieceTime = Date.now();
            } else {
                return;
            }
        } else if (this.clearRowTime) {
            const crDiff = time - this.clearRowTime;
            // this.log('CLEAR ROW WAIT', crDiff - Rules.Durations.ROW_CLEAR_DURATION, crDiff, Rules.Durations.ROW_CLEAR_DURATION);
            if (crDiff > Rules.Durations.ROW_CLEAR_DURATION) {
                this.clearRowTime = null; 
                this.clearRowAnimationTween(1);
                this.rowsToClear.forEach((row) => this.clearRow(row));
                this.rowsToClear = [];
                this.pieceTime = Date.now();
            } else {
                this.clearRowAnimationTween(crDiff / Rules.Durations.ROW_CLEAR_DURATION);
                return;
            }
        } else if (this.pieceTime) {
            const dropState = this.calculateDrop(time);
            this.log('DROP STATE', dropState);
            if (dropState === DROP_STATE_STOPPED) {
                this.rowsToClear = this.detectFullRows();
                if (this.rowsToClear.length) {
                    this.incrementLines(this.rowsToClear.length);
                    this.clearRowTime = Date.now();
                }
                return;
            }
        }
        this.clearGameBoard();
        this.drawGrid();
        this.drawOutlilnes();
        this.setGameText();
        this.drawCurrentPiece();
        this.drawNextPiece();
        this.drawBucket();
        this.loopCounter++;
    }

    private loopPaused(time: number) {
        this.drawModal();
        this.writeWord('PAUSED', 7, 11, '#f20');
    }

    private loopGameOver(time: number) {
        this.clearGameBoard();
        this.drawGrid();
        this.drawOutlilnes();
        this.setGameText();
        this.drawCurrentPiece();
        this.drawNextPiece();
        this.drawBucket();
        this.drawModal();
        this.writeWord('GAME', 6, 7, '#00F');
        this.writeWord('OVER', 10, 7, '#F00');
        this.writeWord('GAME', 6, 8, '#F00');
        this.writeWord('OVER', 10, 8, '#00F');
        this.writeWord('LEVEL', 6, 10, '#666');
        this.writeWord(`${this.level}`, 14 - `${this.level}`.length, 10, '#092');
        this.writeWord('SCORE', 6, 12, '#666');
        this.writeWord(`${this.currentScore}`, 14 - `${this.currentScore}`.length , 13, '#06f');
        this.writeWord('GAME', 6, 15, '#00F');
        this.writeWord('OVER', 10, 15, '#F00');
        this.writeWord('GAME', 6, 16, '#F00');
        this.writeWord('OVER', 10, 16, '#00F');
    }

    private isLoading() {
        return this.gameState === GAME_STATE_LOADING;
    }

    private isDoneLoading() {
        return this.gameState === GAME_STATE_BEFORE_START;
    }

    private isPaused() {
        return this.gameState === GAME_STATE_PAUSED;
    }

    private isStarted() {
        return this.gameState === GAME_STATE_STARTED;
    }

    private isGameOver() {
        return this.gameState === GAME_STATE_OVER;
    }

    init(): Promise<void> {
        this.loadingTime = Date.now();
        this.triggerLoop();
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.begin();
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
        if (!this.killed) {
            this.requestAnimationFrameHandle = requestAnimationFrame(this.boundLoop);
        }
    }

    private begin() {
        this.killed = false;
        this.setGameState(GAME_STATE_BEFORE_START);
        this.beginTime = Date.now();
    }

    resetGame() {
        this.log('ResetGame');
        this.begin();
        this.killed = false;
        this.previousTime = 0;
        this.loadingTime = null;
        this.startTime = null;
        this.pauseTime = null;
        this.overTime = null;
        this.isNewHighScore = false;
        this.triggerLoop();
    }

    startGame() {
        this.log('StartGame');
        if (!this.startTime) {
            this.startTime = Date.now();
        }
        if (this.gameState === GAME_STATE_PAUSED && this.pauseTime) {
            this.startTime = this.startTime + (Date.now() - this.pauseTime);
            this.pauseTime = null;
        } else {
            this.initializePiece();
        }
        this.setGameState(GAME_STATE_STARTED);
    }

    pauseGame() {
        this.log('PauseGame');
        this.pauseTime = Date.now();
        this.setGameState(GAME_STATE_PAUSED);
    }

    endGame() {
        this.log('EndGame');
        this.overTime = Date.now();
        this.setGameState(GAME_STATE_OVER);
        if (this.currentScore > this.highScore) {
            this.setHighScore(this.currentScore);
        }
    }

    kill() {
        this.loopGameOver(Date.now());
        this.setGameState(GAME_STATE_OVER);
        this.killed = true;
        if (this.requestAnimationFrameHandle) {
            cancelAnimationFrame(this.requestAnimationFrameHandle);
        }
        this.previousTime = 0;
        this.loadingTime = null;
        this.startTime = null;
        this.pauseTime = null;
        this.overTime = null;
        this.isNewHighScore = false;
    }

}