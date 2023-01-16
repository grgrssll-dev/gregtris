const rows = 20;
const cols = 10;
const gameRows = 24;
const gameCols = 20;
const mx = 2;
const gridSizeDivisor = 8;
const facetDivisor = 8;
const alphaDivisor = 8;

const dimensionRatio = gameCols / gameRows;

const DIR_UP = 0;
const DIR_RIGHT = 1;
const DIR_DOWN = 2;
const DIR_LEFT = 3;

const SPACE_PLACEHOLDER = '$SPACE$';

const alphabet = {
    0: [
        [0,0,1,1,1,0,0,0],
        [0,1,0,0,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,0,0,1,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    1: [
        [0,0,0,1,1,0,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    2: [
        [0,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,1,1,1,1,0,0],
        [0,0,1,1,1,0,0,0],
        [0,1,1,0,0,0,0,0],
        [1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    3: [
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,1,1,1,1,0,0],
        [0,0,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    4: [
        [0,0,0,1,1,1,0,0],
        [0,0,1,1,1,1,0,0],
        [0,1,1,0,1,1,0,0],
        [1,1,0,0,1,1,0,0],
        [1,1,1,1,1,1,1,0],
        [0,0,0,0,1,1,0,0],
        [0,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    5: [
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,0,0],
        [0,0,0,0,0,1,1,0],
        [0,0,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    6: [
        [0,0,1,1,1,1,0,0],
        [0,1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    7: [
        [1,1,1,1,1,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0,0],
        [0,0,1,1,0,0,0,0],
        [0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    8: [
        [0,1,1,1,1,0,0,0],
        [1,1,0,0,0,1,0,0],
        [1,1,1,0,0,1,0,0],
        [0,1,1,1,1,0,0,0],
        [1,0,1,1,1,1,1,0],
        [1,0,0,0,0,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    9: [
        [0,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0,0],
        [0,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    c: [
        [0,0,1,1,1,1,0,0],
        [0,1,1,0,0,1,1,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0],
        [0,0,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    e: [
        [1,1,1,1,1,1,1,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    i: [
        [0,1,1,1,1,1,1,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    l: [
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    n: [
        [1,1,0,0,0,1,1,0],
        [1,1,1,0,0,1,1,0],
        [1,1,1,1,0,1,1,0],
        [1,1,1,1,1,1,1,0],
        [1,1,0,1,1,1,1,0],
        [1,1,0,0,1,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    o: [
        [0,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    p: [
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    r: [
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,1,1,1,0],
        [1,1,1,1,1,0,0,0],
        [1,1,0,1,1,1,0,0],
        [1,1,0,0,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    s: [
        [0,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,1,1],
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    t: [
        [0,1,1,1,1,1,1,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    v: [
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,1,0,1,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    x: [
        [1,1,0,0,0,1,1,0],
        [1,1,1,0,1,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,1,1,1,0,0,0],
        [0,1,1,1,1,1,0,0],
        [1,1,1,0,1,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    '-': [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    [SPACE_PLACEHOLDER]: [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ]
};

function rand(min, max) {
    return min + (Math.round(Number.MAX_SAFE_INTEGER * Math.random()) % (max - min + 1));
}

function rotateCW(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const newMatrix = [];
    for (let i = 0; i < cols; i++) {
        const r = [];
        for (let j = rows - 1; j >= 0; j--) {
            r.push(matrix[j][i]);
        }
        newMatrix.push(r);
    }
    return newMatrix;
}

function rotateCCW(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const newMatrix = [];
    for (let i = cols - 1; i >= 0; i--) {
        const r = [];
        for (let j = 0; j < rows; j++) {
            r.push(matrix[j][i]);
        }
        newMatrix.push(r);
    }
    return newMatrix;
}
function rotate180(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const newMatrix = [];
    for (let j = rows - 1; j >= 0; j--) {
        const r = [];
        for (let i = cols - 1; i >= 0; i--) {    
            r.push(matrix[j][i]);
        }
        newMatrix.push(r);
    }
    return newMatrix;
}
function rotate0(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const newMatrix = [];
    for (let j = 0; j < rows; j++) {
        const r = [];
        for (let i = 0; i < cols; i++) {
            r.push(matrix[j][i]);
        }
        newMatrix.push(r);
    }
    return newMatrix;
}

const rotateMatrix = {
    [DIR_UP]: rotate0,
    [DIR_RIGHT]: rotateCW,
    [DIR_DOWN]: rotate180,
    [DIR_LEFT]: rotateCCW,
};

class Piece {
    constructor(color, matrix) {
        this.color = color;
        this.matrix = matrix;
    }
    getRows() {
        return this.matrix.length;
    }
    getCols() {
        return this.matrix[0].length;
    }
    getColor() {
        return this.color;
    }
    getMatrix() {
        return this.matrix;
    }
    isFilledAt(row, col) {
        return this.matrix[row][col] === 1;
    }
    rotate(direction) {
        let newMatrix;
        if (rotateMatrix[direction]) {
            newMatrix = rotateMatrix[direction](this.matrix);
        } else {
            newMatrix = rotateMatrix[DIR_UP](this.matrix);
        }
        this.matrix = newMatrix;
        return this;
    }
    clone() {
        return new Piece(this.color, rotate0(this.matrix));
    }
}

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
    canvas = null;
    ctx = null;
    sprite = null;
    bucket = [];
    board = {};
    title = {};
    info = {};
    next = {};
    score = {};

    level = 1;
    linesCleared = 0;
    gameScore = 0;
    topScore = 0;

    constructor(opts) {
        this.opts = Object.assign(this.opts, {
            debug: opts.debug || this.opts.debug,
        });
        this.dim = opts.dim;
        this.canvas = opts.canvas;
        if (!this.dim || Number.isNaN(this.dim)) {
            throw new Error('Invalid dimension');
        }
        if (!this.canvas || !(this.canvas instanceof HTMLCanvasElement)) {
            throw new Error('Invalid canvas');
        }
        this.log('options', this.dim);
        this.ctx = this.canvas.getContext('2d');
        this.gridSize = Math.floor(this.dim / gameRows) * mx;
        if (this.gridSize % gridSizeDivisor !== 0) {
            this.gridSize = Math.floor(this.gridSize / gridSizeDivisor) * gridSizeDivisor; 
        }
        this.log('gridSize', this.gridSize);
        this.height = this.gridSize * gameRows;
        this.width = Math.ceil(this.height * dimensionRatio);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.log('dimensions', this.width, 'x', this.height);
        this.canvas.style.width = `${Math.floor(this.width / mx)}px`;
        this.canvas.style.height = `${Math.floor(this.height / mx)}px`;
        for(let r = 0; r < rows; r++) {
            const row = [];
            for (let c = 0; c < cols; c++) {
                row.push(0);
            }
            this.bucket.push(row);
        }
        this.calculatePositions();
        this.drawOutlilnes();
        this.drawGrid();

        this.nextPiece = pieces[rand(0, pieces.length - 1)].clone().rotate(rand(0, 3));

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
        this.writeWord(levelText, Math.floor((gameCols - 2 - levelText.length) / 2) + 1 , 1);
        this.writeWord('TOP', 12, 3);
        this.writeWord(`${this.topScore}`, 12, 4);
        this.writeWord('SCORE', 12, 7);
        this.writeWord(`${this.gameScore}`, 12, 8);
        this.writeWord('LINES', 12, 11);
        this.writeWord(`${this.linesCleared}`, 12, 12);
        this.writeWord('NEXT', 12, 16);
    }

    setNextPiece() {
        this.nextPiece = pieces[rand(0, pieces.length - 1)].clone().rotate(rand(0, 3));
        this.placePiece(this.nextPiece, this.unit(13), this.unit(18));
    }

    unit(count) {
        return this.gridSize * count;
    }

    calculatePositions() {
        this.board.w = cols * this.gridSize;
        this.board.h = rows * this.gridSize;
        this.board.x = this.gridSize;
        this.board.y = ((gameRows - rows) - 1) * this.unit(1);
        this.title.w = this.width - this.unit(2);
        this.title.h = this.unit(1);
        this.title.x = this.unit(1);
        this.title.y = this.unit(1);
        this.info.w = this.width - (this.board.x + this.board.w + this.unit(2));
        this.info.h = this.board.h;
        this.info.x = this.board.x + this.board.w + this.unit(1);
        this.info.y = this.board.y;
        this.next.w = this.info.w;
        this.next.h = this.next.w;
        this.next.x = this.info.x;
        this.next.y = this.info.y + this.info.h - this.next.h;
        this.score.w = this.info.w;
        this.score.h = this.info.h - this.next.h - this.unit(1);
        this.score.x = this.info.x;
        this.score.y = this.info.y;
    }

    drawGrid() {
        this.ctx.strokeStyle = 'rgba(0,0,0,0.1)';
        this.ctx.lineWidth = mx;
        for (let i = 0; i < gameCols; i++) { 
            const x0 = i * this.gridSize;
            const y0 = 0;
            const x1 = i * this.gridSize;
            const y1 = this.height;
            this.ctx.beginPath();
            this.ctx.moveTo(x0, y0);
            this.ctx.lineTo(x1, y1);
            this.ctx.stroke();
        }
        for (let j = 0; j < gameRows; j++) {
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
        this.ctx.lineWidth = mx;
        this.ctx.strokeRect(this.board.x, this.board.y, this.board.w, this.board.h);
        this.ctx.strokeRect(this.title.x, this.title.y, this.title.w, this.title.h);
        this.ctx.strokeRect(this.info.x, this.info.y, this.info.w, this.info.h);
        this.ctx.strokeRect(this.next.x, this.next.y, this.next.w, this.next.h);
        this.ctx.strokeRect(this.score.x, this.score.y, this.score.w, this.score.h);
    }

    fitPiece(piece, x, y) {
        let toX = x;
        let toY = y;
        if (piece.getRows() + y >= rows) {
            toY = rows - piece.getRows();
        }
        if (piece.getCols() + x >= cols) {
            toX = cols - piece.getCols();
        }
        return {
            safeX: toX,
            safeY: toY,
        };
    }

    drawFacets(x, y) {
        const dim = this.unit(1);
        const shadeW = Math.round(dim / facetDivisor);
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
    }

    drawPiece(piece, x, y) {
        const { safeX, safeY } = this.fitPiece(piece, x, y);
        const startX = this.board.x + this.unit(safeX);
        const startY = this.board.y + this.unit(safeY);
        this.placePiece(piece, startX, startY);
    }

    placePiece(piece, x, y) {
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
    }

    drawLetter(letter, x, y) {
        const startX = this.unit(x);
        const startY = this.unit(y);
        const dim = this.gridSize / alphaDivisor;
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
    }

    writeWord(word, x, y) {
        word.split('').forEach((letter, index) => {
            this.drawLetter(letter, x + index, y);
        });
    }

    log(...msg) {
        if (this.opts.debug === true) {
            console.log('[Tetris]', ...msg);
        }
    }

    init() {
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