const dimensionRatio = 3 / 4;

function rand(min, max) {
    return min + (Math.round(Number.MAX_SAFE_INTEGER * Math.random()) % (max - min + 1));
}

const DIR_UP = 0;
const DIR_RIGHT = 1;
const DIR_DOWN = 2;
const DIR_LEFT = 3;

function log(...msg) {
    console.log('[Tetris]', ...msg);
}

function rotateCW(p) {
    const rows = p.length;
    const cols = p[0].length;
    const newPiece = [];
    for (let i = 0; i < cols; i++) {
        const r = [];
        for (let j = rows - 1; j >= 0; j--) {
            r.push(p[j][i]);
        }
        newPiece.push(r);
    }
    return newPiece;
}

function rotateCCW(p) {
    const rows = p.length;
    const cols = p[0].length;
    const newPiece = [];
    for (let i = cols - 1; i >= 0; i--) {
        const r = [];
        for (let j = 0; j < rows; j++) {
            r.push(p[j][i]);
        }
        newPiece.push(r);
    }
    return newPiece;
}

const piece0 = [
    [1,1,1,1],
];
const piece1 = [
    [1,0,0],
    [1,1,1],
];
const piece2 = [
    [0,0,1],
    [1,1,1],
];
const piece3 = [
    [1,1],
    [1,1],
];
const piece4 = [
    [0,1,1],
    [1,1,0],
];
const piece5 = [
    [1,1,0],
    [0,1,1],
];
const piece6 = [
    [0,1,0],
    [1,1,1],
];

const pieces = [
    piece0,
    piece1,
    piece2,
    piece3,
    piece4,
    piece5,
    piece6,
]

export default class Tetris {
    opts = {
        dim: 0,
        canvas: null,
        sprite: 'sprite.png',
        debug: false,
    };

    conostructor(opts) {
        this.opts = Object.assign(this.opts, {
            dim: opts.dim || this.opts.dim,
            canvas: opts.canvas || this.opts.canvas,
            sprite: opts.sprite || this.opts.sprite,
            debug: opts.debug || this.opts.debug,
        });
        if (!this.opts.dim || Number.isNaN(this.opts.dim)) {
            throw new Error('Invalid dimension');
        }
        if (!this.opts.canvas || !(this.opts.canvas instanceof HTMLCanvasElement)) {
            throw new Error('Invalid canvas');
        }
        if (!this.opts.sprite || typeof this.opts.sprite !== 'string') {
            throw new Error('Invalid sprite');
        }
        if (this.opts.debug === true) {
            log('options', this.opts);
        }
    }

    init() {
        return new Promise((resolve, reject) => {

        });
    }

}