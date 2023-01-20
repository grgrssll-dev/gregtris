define("alphabet", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SPACE_PLACEHOLDER = void 0;
    exports.SPACE_PLACEHOLDER = '$SPACE$';
    const alphabet = {
        '0': [
            [0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        '1': [
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        '2': [
            [0, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        '3': [
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        '4': [
            [0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        '5': [
            [1, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        '6': [
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        '7': [
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        '8': [
            [0, 1, 1, 1, 1, 0, 0, 0],
            [1, 1, 0, 0, 0, 1, 0, 0],
            [1, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 1, 1, 1, 0, 0, 0],
            [1, 0, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        '9': [
            [0, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'a': [
            [0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'c': [
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'd': [
            [1, 1, 1, 1, 1, 0, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'e': [
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'g': [
            [0, 0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'i': [
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'l': [
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'm': [
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 1, 0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'n': [
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 1, 1, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'o': [
            [0, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'p': [
            [1, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'r': [
            [1, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 0, 0, 0],
            [1, 1, 0, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        's': [
            [0, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        't': [
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'u': [
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'v': [
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'w': [
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 0, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        'x': [
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 1, 0, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        '-': [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        '.': [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        '…': [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        [exports.SPACE_PLACEHOLDER]: [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]
    };
    exports.default = alphabet;
});
define("interfaces", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("constants", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DROP_STATE_GAME_OVER = exports.DROP_STATE_WAITING = exports.DROP_STATE_STOPPED = exports.DROP_STATE_DROPPING = exports.ANIMATION_STATE_WAITING = exports.ANIMATION_STATE_CLEARING = exports.ANIMATION_STATE_DROPPING = exports.GAME_STATE_OVER = exports.GAME_STATE_PAUSED = exports.GAME_STATE_STARTED = exports.GAME_STATE_BEFORE_START = exports.GAME_STATE_LOADING = exports.HIGH_SCORE_KEY = exports.DIMENSION_RATIO = exports.ALPHA_DIVISOR = exports.FACET_DIVISOR = exports.GAME_SIZE_DIVISOR = exports.PX = exports.MX = exports.MARGIN = exports.GAME_COLS = exports.GAME_ROWS = exports.COLS = exports.ROWS = void 0;
    exports.ROWS = 20;
    exports.COLS = 10;
    exports.GAME_ROWS = 24;
    exports.GAME_COLS = 20;
    exports.MARGIN = 1;
    exports.MX = 2;
    exports.PX = 2;
    exports.GAME_SIZE_DIVISOR = 8;
    exports.FACET_DIVISOR = 8;
    exports.ALPHA_DIVISOR = 8;
    exports.DIMENSION_RATIO = exports.GAME_COLS / exports.GAME_ROWS;
    exports.HIGH_SCORE_KEY = 'HighScore';
    exports.GAME_STATE_LOADING = 'LOADING';
    exports.GAME_STATE_BEFORE_START = 'BEFORE_START';
    exports.GAME_STATE_STARTED = 'STARTED';
    exports.GAME_STATE_PAUSED = 'PAUSED';
    exports.GAME_STATE_OVER = 'OVER';
    exports.ANIMATION_STATE_DROPPING = 'DROPPING';
    exports.ANIMATION_STATE_CLEARING = 'CLEARING';
    exports.ANIMATION_STATE_WAITING = 'WAITING';
    exports.DROP_STATE_DROPPING = 'DROPPING';
    exports.DROP_STATE_STOPPED = 'STOPPED';
    exports.DROP_STATE_WAITING = 'WAITING';
    exports.DROP_STATE_GAME_OVER = 'GAME_OVER';
    const Constants = {
        ROWS: exports.ROWS,
        COLS: exports.COLS,
        GAME_ROWS: exports.GAME_ROWS,
        GAME_COLS: exports.GAME_COLS,
        MARGIN: exports.MARGIN,
        MX: exports.MX,
        PX: exports.PX,
        GAME_SIZE_DIVISOR: exports.GAME_SIZE_DIVISOR,
        FACET_DIVISOR: exports.FACET_DIVISOR,
        ALPHA_DIVISOR: exports.ALPHA_DIVISOR,
        DIMENSION_RATIO: exports.DIMENSION_RATIO,
        HIGH_SCORE_KEY: exports.HIGH_SCORE_KEY,
        GAME_STATE_LOADING: exports.GAME_STATE_LOADING,
        GAME_STATE_BEFORE_START: exports.GAME_STATE_BEFORE_START,
        GAME_STATE_STARTED: exports.GAME_STATE_STARTED,
        GAME_STATE_PAUSED: exports.GAME_STATE_PAUSED,
        GAME_STATE_OVER: exports.GAME_STATE_OVER,
        ANIMATION_STATE_DROPPING: exports.ANIMATION_STATE_DROPPING,
        ANIMATION_STATE_CLEARING: exports.ANIMATION_STATE_CLEARING,
        ANIMATION_STATE_WAITING: exports.ANIMATION_STATE_WAITING,
        DROP_STATE_DROPPING: exports.DROP_STATE_DROPPING,
        DROP_STATE_STOPPED: exports.DROP_STATE_STOPPED,
        DROP_STATE_WAITING: exports.DROP_STATE_WAITING,
        DROP_STATE_GAME_OVER: exports.DROP_STATE_GAME_OVER,
    };
    exports.default = Constants;
});
define("container", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("directions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.directionsArray = exports.DIR_LEFT = exports.DIR_DOWN = exports.DIR_RIGHT = exports.DIR_UP = void 0;
    exports.DIR_UP = 0;
    exports.DIR_RIGHT = 1;
    exports.DIR_DOWN = 2;
    exports.DIR_LEFT = 3;
    const directions = Object.freeze({
        [exports.DIR_UP]: exports.DIR_UP,
        [exports.DIR_RIGHT]: exports.DIR_RIGHT,
        [exports.DIR_LEFT]: exports.DIR_LEFT,
        [exports.DIR_DOWN]: exports.DIR_DOWN,
    });
    const movementDirections = Object.freeze({
        [exports.DIR_RIGHT]: exports.DIR_RIGHT,
        [exports.DIR_LEFT]: exports.DIR_LEFT,
    });
    exports.directionsArray = Object.values(directions);
    exports.default = directions;
});
define("rotator", ["require", "exports", "directions"], function (require, exports, directions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rotate0 = exports.rotate180 = exports.rotateCCW = exports.rotateCW = void 0;
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
    exports.rotateCW = rotateCW;
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
    exports.rotateCCW = rotateCCW;
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
    exports.rotate180 = rotate180;
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
    exports.rotate0 = rotate0;
    const rotator = {
        [directions_1.DIR_UP]: rotate0,
        [directions_1.DIR_RIGHT]: rotateCW,
        [directions_1.DIR_DOWN]: rotate180,
        [directions_1.DIR_LEFT]: rotateCCW,
    };
    exports.default = rotator;
});
define("piece", ["require", "exports", "directions", "rotator"], function (require, exports, directions_2, rotator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Piece {
        constructor(name, color, matrix) {
            this.name = name;
            this.color = color;
            this.matrix = matrix;
        }
        getRows() {
            return this.matrix.length;
        }
        getCols() {
            return this.matrix[0].length;
        }
        getName() {
            return this.name;
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
            if (rotator_1.default[direction]) {
                newMatrix = rotator_1.default[direction](this.matrix);
            }
            else {
                newMatrix = rotator_1.default[directions_2.DIR_UP](this.matrix);
            }
            this.matrix = newMatrix;
            return this;
        }
        clone(rotation = directions_2.DIR_UP) {
            const newPiece = new Piece(this.name, this.color, this.matrix);
            newPiece.rotate(rotation);
            return newPiece;
        }
    }
    exports.default = Piece;
});
define("currentPiece", ["require", "exports", "directions", "piece"], function (require, exports, directions_3, piece_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CurrentPiece extends piece_1.default {
        constructor(name, color, matrix, x, y) {
            super(name, color, matrix);
            this.x = 0;
            this.y = 0;
            this.x = x;
            this.y = y;
        }
        getX() {
            return this.x;
        }
        getY() {
            return this.y;
        }
        setX(x) {
            this.x = x;
            return this;
        }
        setY(y) {
            this.y = y;
            return this;
        }
        clone(rotation = directions_3.DIR_UP) {
            super.clone(rotation);
            const newPiece = CurrentPiece.fromPiece(this, this.x, this.y);
            newPiece.rotate(rotation);
            return newPiece;
        }
        static fromPiece(piece, x, y) {
            return new CurrentPiece(piece.getName(), piece.getColor(), piece.getMatrix(), x, y);
        }
    }
    exports.default = CurrentPiece;
});
define("gamePieces", ["require", "exports", "piece"], function (require, exports, piece_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MIDDLE = exports.S_RIGHT = exports.S_LEFT = exports.BOX = exports.L_RIGHT = exports.L_LEFT = exports.FLAT = exports.MIDDLE_COLOR = exports.S_RIGHT_COLOR = exports.S_LEFT_COLOR = exports.BOX_COLOR = exports.L_RIGHT_COLOR = exports.L_LEFT_COLOR = exports.FLAT_COLOR = void 0;
    exports.FLAT_COLOR = 'rgba(0, 255, 255, 0.5)';
    exports.L_LEFT_COLOR = 'rgba(0, 0, 255, 0.5)';
    exports.L_RIGHT_COLOR = 'rgba(255, 127, 0, 0.5)';
    exports.BOX_COLOR = 'rgba(255, 255, 0, 0.5)';
    exports.S_LEFT_COLOR = 'rgba(255, 0, 255, 0.5)';
    exports.S_RIGHT_COLOR = 'rgba(0, 255, 0, 0.5)';
    exports.MIDDLE_COLOR = 'rgba(255, 0, 0, 0.5)';
    exports.FLAT = new piece_2.default('FLAT', exports.FLAT_COLOR, [
        [1, 1, 1, 1],
    ]);
    exports.L_LEFT = new piece_2.default('L_LEFT', exports.L_LEFT_COLOR, [
        [1, 0, 0],
        [1, 1, 1],
    ]);
    exports.L_RIGHT = new piece_2.default('L_RIGHT', exports.L_RIGHT_COLOR, [
        [0, 0, 1],
        [1, 1, 1],
    ]);
    exports.BOX = new piece_2.default('BOX', exports.BOX_COLOR, [
        [1, 1],
        [1, 1],
    ]);
    exports.S_LEFT = new piece_2.default('S_LEFT', exports.S_LEFT_COLOR, [
        [1, 1, 0],
        [0, 1, 1],
    ]);
    exports.S_RIGHT = new piece_2.default('S_RIGHT', exports.S_RIGHT_COLOR, [
        [0, 1, 1],
        [1, 1, 0],
    ]);
    exports.MIDDLE = new piece_2.default('MIDDLE', exports.MIDDLE_COLOR, [
        [0, 1, 0],
        [1, 1, 1],
    ]);
    const gamePieces = Object.freeze({
        FLAT: exports.FLAT,
        L_LEFT: exports.L_LEFT,
        L_RIGHT: exports.L_RIGHT,
        BOX: exports.BOX,
        S_LEFT: exports.S_LEFT,
        S_RIGHT: exports.S_RIGHT,
        MIDDLE: exports.MIDDLE,
    });
    exports.default = gamePieces;
});
define("utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bucketRowFull = exports.rand = void 0;
    function rand(min, max) {
        return min + (Math.round(Number.MAX_SAFE_INTEGER * Math.random()) % (max - min + 1));
    }
    exports.rand = rand;
    function bucketRowFull(a) {
        const checker = (v) => v !== '';
        return a.every(checker);
    }
    exports.bucketRowFull = bucketRowFull;
});
define("keys", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KEYS_KILL = exports.KEYS_RESTART = exports.KEYS_PAUSE = exports.KEYS_ENTER = exports.KEYS_LEFT = exports.KEYS_HARD_DROP = exports.KEYS_DROP = exports.KEYS_RIGHT = exports.KEYS_ROTATE = exports.KEY_K = exports.KEY_Q = exports.KEY_R = exports.KEY_F2 = exports.KEY_P = exports.KEY_ESCAPE = exports.KEY_NUMPAD_ENTER = exports.KEY_ENTER = exports.KEY_S = exports.KEY_DOWN = exports.KEY_SPACE = exports.KEY_D = exports.KEY_RIGHT = exports.KEY_W = exports.KEY_UP = exports.KEY_A = exports.KEY_LEFT = void 0;
    exports.KEY_LEFT = 'ArrowLeft';
    exports.KEY_A = 'KeyA';
    exports.KEY_UP = 'ArrowUp';
    exports.KEY_W = 'KeyW';
    exports.KEY_RIGHT = 'ArrowRight';
    exports.KEY_D = 'KeyD';
    exports.KEY_SPACE = 'Space';
    exports.KEY_DOWN = 'ArrowDown';
    exports.KEY_S = 'KeyS';
    exports.KEY_ENTER = 'Enter';
    exports.KEY_NUMPAD_ENTER = 'NumpadEnter';
    exports.KEY_ESCAPE = 'Escape';
    exports.KEY_P = 'KeyP';
    exports.KEY_F2 = 'F2';
    exports.KEY_R = 'KeyR';
    exports.KEY_Q = 'KeyQ';
    exports.KEY_K = 'KeyK';
    exports.KEYS_ROTATE = [exports.KEY_UP, exports.KEY_W];
    exports.KEYS_RIGHT = [exports.KEY_RIGHT, exports.KEY_D];
    exports.KEYS_DROP = [exports.KEY_DOWN, exports.KEY_S];
    exports.KEYS_HARD_DROP = [exports.KEY_SPACE];
    exports.KEYS_LEFT = [exports.KEY_LEFT, exports.KEY_A];
    exports.KEYS_ENTER = [exports.KEY_ENTER, exports.KEY_NUMPAD_ENTER];
    exports.KEYS_PAUSE = [exports.KEY_ESCAPE, exports.KEY_P];
    exports.KEYS_RESTART = [exports.KEY_F2, exports.KEY_R];
    exports.KEYS_KILL = [exports.KEY_Q, exports.KEY_K];
    const Keys = {
        ROTATE: exports.KEYS_ROTATE,
        RIGHT: exports.KEYS_RIGHT,
        DROP: exports.KEYS_DROP,
        HARD_DROP: exports.KEYS_HARD_DROP,
        LEFT: exports.KEYS_LEFT,
        ENTER: exports.KEYS_ENTER,
        PAUSE: exports.KEYS_PAUSE,
        RESTART: exports.KEYS_RESTART,
        KILL: exports.KEYS_KILL,
    };
    exports.default = Keys;
});
define("rules", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scoring = exports.SOFT_DROP_SPEED = exports.MiliSecondsPerDrop = exports.Speeds = exports.RULE_LINES_LEVEL_CHANGE = exports.Durations = exports.DURATION_ROW_CLEAR_DURATION = exports.DURATION_LOCK_DOWN_DURATION = void 0;
    const frameRateMultiplier = 16.66666;
    exports.DURATION_LOCK_DOWN_DURATION = 500;
    exports.DURATION_ROW_CLEAR_DURATION = 1000;
    exports.Durations = {
        LOCK_DOWN_DURATION: exports.DURATION_LOCK_DOWN_DURATION,
        ROW_CLEAR_DURATION: exports.DURATION_ROW_CLEAR_DURATION
    };
    exports.RULE_LINES_LEVEL_CHANGE = 10;
    exports.Speeds = {
        1: 0.01667,
        2: 0.021017,
        3: 0.026977,
        4: 0.035256,
        5: 0.04693,
        6: 0.06361,
        7: 0.0879,
        8: 0.1236,
        9: 0.1775,
        10: 0.2598,
        11: 0.388,
        12: 0.59,
        13: 0.92,
        14: 1.46,
        15: 2.36,
    };
    exports.MiliSecondsPerDrop = Object.values(exports.Speeds).map((s) => (1 / s) * frameRateMultiplier);
    exports.SOFT_DROP_SPEED = (exports.MiliSecondsPerDrop[1]) / 20;
    exports.Scoring = {
        line: {
            1: (level) => 40 * (level + 1),
            2: (level) => 100 * (level + 1),
            3: (level) => 300 * (level + 1),
            4: (level) => 1200 * (level + 1),
        }
    };
    const Rules = {
        Scoring: exports.Scoring,
        Speeds: exports.Speeds,
        MiliSecondsPerDrop: exports.MiliSecondsPerDrop,
        MiliSecondsSoftDrop: exports.SOFT_DROP_SPEED,
        MiliSecondsHardDrop: 1,
        Durations: exports.Durations,
        LINES_LEVEL_CHANGE: exports.RULE_LINES_LEVEL_CHANGE,
    };
    exports.default = Rules;
});
define("gregtris", ["require", "exports", "utils", "alphabet", "currentPiece", "gamePieces", "directions", "constants", "keys", "rules"], function (require, exports, utils_1, alphabet_1, currentPiece_1, gamePieces_1, directions_4, constants_1, keys_1, rules_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const gamePiecesArray = Object.values(gamePieces_1.default);
    const minDir = Math.min(...directions_4.directionsArray);
    const maxDir = Math.max(...directions_4.directionsArray);
    class Gregtris {
        constructor(canvas, opts) {
            this.opts = {
                dim: 0,
                debug: false,
            };
            this.gridSize = 0;
            this.width = 0;
            this.height = 0;
            this.bucket = [];
            this.conts = {
                game: { x: 0, y: 0, width: constants_1.GAME_COLS, height: constants_1.GAME_ROWS },
                board: { x: 1, y: 3, width: constants_1.COLS, height: constants_1.ROWS },
                title: { x: 1, y: 1, width: constants_1.GAME_COLS - (constants_1.MARGIN * 2), height: 1 },
                score: { x: constants_1.COLS + (constants_1.MARGIN * 2), y: 3, width: 7, height: 12 },
                next: { x: constants_1.COLS + (constants_1.MARGIN * 2), y: 16, width: 7, height: 7 },
                modal: { x: 5, y: 6, width: 10, height: 12 },
            };
            this.killed = false;
            this.level = 0;
            this.linesCleared = 0;
            this.currentScore = 0;
            this.highScore = 0;
            this.isNewHighScore = false;
            this.isHardDrop = false;
            this.isSoftDrop = false;
            this.gameState = constants_1.GAME_STATE_LOADING;
            this.previousTime = 0;
            this.beginTime = null;
            this.loadingTime = null;
            this.startTime = null;
            this.pauseTime = null;
            this.overTime = null;
            this.pieceTime = null;
            this.dropLockTime = null;
            this.clearRowTime = null;
            this.rowsToClear = [];
            this.loopCounter = 0;
            this.boundKeyDownListener = this.keyDownListener.bind(this);
            this.boundKeyUpListener = this.keyUpListener.bind(this);
            this.boundLoop = this.loop.bind(this);
            this.loopHandlers = {
                [constants_1.GAME_STATE_BEFORE_START]: this.loopBeforeStart.bind(this),
                [constants_1.GAME_STATE_LOADING]: this.loopLoading.bind(this),
                [constants_1.GAME_STATE_STARTED]: this.loopStarted.bind(this),
                [constants_1.GAME_STATE_PAUSED]: this.loopPaused.bind(this),
                [constants_1.GAME_STATE_OVER]: this.loopGameOver.bind(this),
            };
            this.requestAnimationFrameHandle = null;
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
            this.log('KeyBoardShorcuts', Object.assign({}, keys_1.default));
            const ctx = this.canvas.getContext('2d');
            if (!ctx) {
                throw new Error('Missing Rendering Context');
            }
            this.ctx = ctx;
            this.gridSize = Math.floor(this.opts.dim / constants_1.GAME_ROWS) * constants_1.MX;
            if (this.gridSize % constants_1.GAME_SIZE_DIVISOR !== 0) {
                this.gridSize = Math.floor(this.gridSize / constants_1.GAME_SIZE_DIVISOR) * constants_1.GAME_SIZE_DIVISOR;
            }
            this.log('gridSize', this.gridSize);
            this.height = this.gridSize * constants_1.GAME_ROWS;
            this.width = Math.ceil(this.height * constants_1.DIMENSION_RATIO);
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.log('dimensions', this.width, 'x', this.height);
            this.canvas.style.width = `${Math.floor(this.width / constants_1.MX)}px`;
            this.canvas.style.height = `${Math.floor(this.height / constants_1.MX)}px`;
            for (let r = 0; r < constants_1.ROWS; r++) {
                const row = [];
                for (let c = 0; c < constants_1.COLS; c++) {
                    row.push('');
                }
                this.bucket.push(row);
            }
            const storageHighScore = parseInt(`${localStorage.getItem(constants_1.HIGH_SCORE_KEY) || 0}`, 10);
            if (!Number.isNaN(storageHighScore)) {
                this.highScore = storageHighScore;
            }
            this.nextPiece = this.getRandomPiece();
            window.addEventListener('keydown', this.boundKeyDownListener);
            window.addEventListener('keyup', this.boundKeyUpListener);
        }
        log(...msg) {
            if (this.opts.debug === true) {
                console.log('[Gregtris]', ...msg);
            }
        }
        keyUpListener(e) {
            const { code, key, metaKey, shiftKey, altKey, ctrlKey, } = e;
            const keyCode = code || key;
            const modifierKey = metaKey || shiftKey || altKey || ctrlKey;
            let handled = false;
            if (!modifierKey) {
                if (this.isStarted()) {
                    if (keys_1.default.DROP.includes(keyCode)) {
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
        keyDownListener(e) {
            const { code, key, metaKey, shiftKey, altKey, ctrlKey, } = e;
            const keyCode = code || key;
            const modifierKey = metaKey || shiftKey || altKey || ctrlKey;
            let handled = false;
            if (!modifierKey) {
                if (this.isStarted()) {
                    if (keys_1.default.LEFT.includes(keyCode)) {
                        handled = true;
                        this.moveCurrentPiece(directions_4.DIR_LEFT);
                    }
                    if (keys_1.default.RIGHT.includes(keyCode)) {
                        handled = true;
                        this.moveCurrentPiece(directions_4.DIR_RIGHT);
                    }
                    if (keys_1.default.ROTATE.includes(keyCode)) {
                        handled = true;
                        this.rotateCurrentPiece();
                    }
                    if (keys_1.default.DROP.includes(keyCode)) {
                        handled = true;
                        this.setDropPieceModifier(false);
                    }
                    if (keys_1.default.HARD_DROP.includes(keyCode)) {
                        handled = true;
                        this.setDropPieceModifier(true);
                    }
                    if (keys_1.default.PAUSE.includes(keyCode)) {
                        handled = true;
                        this.pauseGame();
                    }
                }
                if (keys_1.default.ENTER.includes(keyCode)) {
                    if (this.isDoneLoading() || this.isPaused()) {
                        handled = true;
                        this.startGame();
                    }
                    else if (this.isGameOver()) {
                        handled = true;
                        this.resetGame();
                    }
                }
                if (keys_1.default.RESTART.includes(keyCode)) {
                    handled = true;
                    this.resetGame();
                }
                if (keys_1.default.KILL.includes(keyCode)) {
                    handled = true;
                    this.kill();
                }
            }
            if (handled) {
                this.log('KeyEvent', keyCode);
                e.preventDefault();
            }
        }
        moveCurrentPiece(dir) {
            if (this.isHardDrop) {
                return;
            }
            let newX = this.currentPiece.getX();
            switch (dir) {
                case directions_4.DIR_LEFT: {
                    if (this.canMoveLeft()) {
                        newX = newX - 1;
                    }
                    break;
                }
                case directions_4.DIR_RIGHT: {
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
        rotateCurrentPiece() {
            if (this.isHardDrop) {
                return;
            }
            this.currentPiece = this.currentPiece.clone(directions_4.DIR_RIGHT);
        }
        randDirection() {
            return (0, utils_1.rand)(minDir, maxDir);
        }
        randItem(arr) {
            return arr[(0, utils_1.rand)(0, arr.length - 1)];
        }
        setGameText() {
            const levelText = `LEVEL ${this.level}`;
            this.writeWord(levelText, Math.floor((constants_1.GAME_COLS - 2 - levelText.length) / 2) + 1, 1);
            this.writeWord('TOP', this.conts.score.x, this.conts.score.y);
            this.writeWord(`${this.highScore}`, this.conts.score.x, this.conts.score.y + constants_1.MARGIN);
            this.writeWord('SCORE', this.conts.score.x, this.conts.score.y + (constants_1.MARGIN * 4));
            this.writeWord(`${this.currentScore}`, this.conts.score.x, this.conts.score.y + (constants_1.MARGIN * 5));
            this.writeWord('LINES', this.conts.score.x, this.conts.score.y + (constants_1.MARGIN * 8));
            this.writeWord(`${this.linesCleared}`, 12, this.conts.score.y + (constants_1.MARGIN * 9));
            this.writeWord('NEXT', this.conts.next.x, this.conts.next.y);
        }
        getRandomPiece() {
            gamePiecesArray.sort();
            const direction = this.randDirection();
            return this.randItem(gamePiecesArray).clone(direction);
        }
        px(gridCoord) {
            return this.gridSize * gridCoord;
        }
        boardOffset(coord, n) {
            return n + this.conts.board[coord];
        }
        drawGrid() {
            this.ctx.strokeStyle = 'rgba(0,0,0,0.1)';
            this.ctx.lineWidth = constants_1.MX;
            for (let i = 0; i < constants_1.GAME_COLS; i++) {
                const x0 = i * this.gridSize;
                const y0 = 0;
                const x1 = i * this.gridSize;
                const y1 = this.height;
                this.ctx.beginPath();
                this.ctx.moveTo(x0, y0);
                this.ctx.lineTo(x1, y1);
                this.ctx.stroke();
            }
            for (let j = 0; j < constants_1.GAME_ROWS; j++) {
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
            const { board, title, next, score, } = this.conts;
            this.ctx.strokeStyle = '#000';
            this.ctx.lineWidth = constants_1.PX;
            this.ctx.strokeRect(this.px(board.x), this.px(board.y), this.px(board.width), this.px(board.height));
            this.ctx.strokeRect(this.px(title.x), this.px(title.y), this.px(title.width), this.px(title.height));
            this.ctx.strokeRect(this.px(next.x), this.px(next.y), this.px(next.width), this.px(next.height));
            this.ctx.strokeRect(this.px(score.x), this.px(score.y), this.px(score.width), this.px(score.height));
        }
        setHighScore(score) {
            localStorage.set(constants_1.HIGH_SCORE_KEY, score);
        }
        drawModal() {
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
            this.ctx.fillRect(this.px(this.conts.modal.x), this.px(this.conts.modal.y), this.px(this.conts.modal.width), this.px(this.conts.modal.height));
            this.ctx.strokeStyle = '#000';
            this.ctx.lineWidth = constants_1.PX;
            this.ctx.strokeRect(this.px(this.conts.modal.x), this.px(this.conts.modal.y), this.px(this.conts.modal.width), this.px(this.conts.modal.height));
        }
        clearModal() {
            this.ctx.clearRect(this.px(this.conts.modal.x) + constants_1.PX, this.px(this.conts.modal.y) + constants_1.PX, this.px(this.conts.modal.width) + (constants_1.PX * 2), this.px(this.conts.modal.height) + (constants_1.PX * 2));
        }
        fitPiece(piece, x, y) {
            return {
                safeX: Math.min(x, Math.max(0, constants_1.COLS - piece.getCols())),
                safeY: Math.min(y, Math.max(0, constants_1.ROWS - piece.getRows())),
            };
        }
        drawFacets(x, y) {
            const dim = this.px(1);
            const shadeW = Math.round(dim / constants_1.FACET_DIVISOR);
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
        drawPieceOnBoard(piece) {
            const { safeX, safeY } = this.fitPiece(piece, piece.getX(), piece.getY());
            this.placePiece(piece, this.boardOffset('x', safeX), this.boardOffset('y', safeY));
            return this;
        }
        initializePiece() {
            let piece = this.nextPiece;
            if (!piece) {
                this.currentPiece = currentPiece_1.default.fromPiece(this.getRandomPiece(), 0, 0);
            }
            else {
                this.currentPiece = currentPiece_1.default.fromPiece(piece, 0, 0);
            }
            this.nextPiece = this.getRandomPiece();
            const x = Math.floor((constants_1.COLS - this.currentPiece.getCols()) / 2);
            this.currentPiece.setX(x);
            this.pieceTime = Date.now();
            return this;
        }
        placePiece(piece, x, y) {
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
        fillSquare(x, y, opacity = 1) {
            if (this.bucket[y][x]) {
                const dim = this.px(1);
                const pX = this.px(x + this.conts.board.x);
                const pY = this.px(y + this.conts.board.y);
                this.ctx.fillStyle = `${this.bucket[y][x]}`;
                this.ctx.globalAlpha = opacity;
                this.ctx.globalCompositeOperation = 'source-over';
                this.ctx.fillRect(pX, pY, dim, dim);
                this.drawFacets(pX, pY);
            }
        }
        drawLetter(letter, x, y, color = '#000') {
            const startX = this.px(x);
            const startY = this.px(y);
            const dim = this.gridSize / constants_1.ALPHA_DIVISOR;
            let key = letter.toLowerCase();
            if (key === ' ') {
                key = alphabet_1.SPACE_PLACEHOLDER;
            }
            const letterForm = alphabet_1.default[key];
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
        writeWord(word, x, y, color = '#000') {
            word.split('').forEach((letter, index) => {
                this.drawLetter(letter, x + index, y, color);
            });
            return this;
        }
        setGameState(gameState) {
            this.log('GameState', gameState);
            this.gameState = gameState;
        }
        clearGameBoard() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        setLevel(level) {
            if (this.level !== level) {
                this.log('SetLevel', level);
            }
            this.level = level;
        }
        incrementLines(lines) {
            let scoreIncrease = 0;
            this.linesCleared = this.linesCleared + lines;
            this.setLevel(Math.floor(this.linesCleared / rules_1.default.LINES_LEVEL_CHANGE));
            if (rules_1.default.Scoring.line[lines]) {
                scoreIncrease = rules_1.default.Scoring.line[lines](this.level);
                this.incrementScore(scoreIncrease);
            }
            this.log('LinesCleared', lines, ', total', this.linesCleared, ', score increase', scoreIncrease);
        }
        setDropPieceModifier(hardDrop) {
            if (!this.isHardDrop) {
                if (hardDrop) {
                    this.isHardDrop = true;
                }
                else {
                    this.isSoftDrop = true;
                }
            }
        }
        clearDropPieceModifier(force = false) {
            if (force || !this.isHardDrop) {
                this.isHardDrop = false;
                this.isSoftDrop = false;
            }
        }
        addPieceToBucket(piece, x, y) {
            this.log('AddingPiece', piece.getMatrix(), x, y);
            const matrix = piece.getMatrix();
            for (let bX = 0; bX < piece.getCols(); bX++) {
                for (let bY = 0; bY < piece.getRows(); bY++) {
                    if (!this.bucket[y + bY][x + bX]) {
                        this.bucket[y + bY][x + bX] = matrix[bY][bX] ? piece.getColor() : '';
                    }
                }
            }
        }
        logBucket() {
            this.bucket.forEach((r, i) => this.log(`${i}`.padStart(2, '0'), '|', r.map(c => +(!!c)).join(',')));
        }
        clearBucketRectangle() {
            this.ctx.clearRect(this.px(this.conts.board.x) + constants_1.PX, this.px(this.conts.board.y) + constants_1.PX, this.px(this.conts.board.width) - (constants_1.PX * 2), this.px(this.conts.board.height) - (constants_1.PX * 2));
        }
        drawBucket(rows = [], tween = 1) {
            rows.length ? this.log('DrawBucket', rows, tween) : null;
            for (let y = 0; y < this.bucket.length; y++) {
                const isAlphaRow = rows.includes(y);
                for (let x = 0; x < this.bucket[y].length; x++) {
                    this.fillSquare(x, y, isAlphaRow ? 1 - tween : 1);
                }
            }
        }
        drawCurrentPiece() {
            this.drawPieceOnBoard(this.currentPiece);
        }
        drawNextPiece() {
            const nextX = this.conts.next.x + Math.floor((this.conts.next.width - this.nextPiece.getCols()) / 2);
            this.placePiece(this.nextPiece, nextX, this.conts.next.y + (constants_1.MARGIN * 2));
        }
        setScore(score) {
            this.log('SetScore', score);
            this.currentScore = score;
            if (this.currentScore > this.highScore) {
                this.isNewHighScore = true;
            }
        }
        incrementScore(scoreInc) {
            this.setScore(this.currentScore + scoreInc);
        }
        canPieceFit(piece, toX, toY) {
            let canMove = true;
            const matrix = piece.getMatrix();
            const rows = piece.getRows();
            const cols = piece.getCols();
            const firstCol = 0;
            const lastCol = cols - 1;
            const lastRow = rows - 1;
            // off board
            if (toX < 0 || toX + lastCol >= constants_1.COLS || toY < 0 || toY + lastRow >= constants_1.ROWS) {
                return false;
            }
            for (let i = 0; i < rows; i++) {
                const row = matrix[i];
                if (!!row[firstCol] && !!this.bucket[toY + i][toX + firstCol]) {
                    this.log('fail fit firstCol', toX + firstCol, toY + i, this.bucket[toY + i][toX + firstCol]);
                    return false;
                }
                if (!!row[lastCol] && !!this.bucket[toY + i][toX + lastCol]) {
                    this.log('fail fit lastCol', toX + lastCol, toY + i, this.bucket[toY + i][toX + lastCol]);
                    return false;
                }
            }
            for (let i = 0; i < cols; i++) {
                const row = matrix[lastRow];
                if (!!row[i] && !!this.bucket[toY + lastRow][toX + i]) {
                    this.log('fail fit lastRow', toX + i, toY + lastRow, this.bucket[toY + lastRow][toX + i]);
                    return false;
                }
            }
            return canMove;
        }
        canMoveRight() {
            return this.canPieceFit(this.currentPiece, this.currentPiece.getX() + 1, this.currentPiece.getY());
        }
        canMoveLeft() {
            return this.canPieceFit(this.currentPiece, this.currentPiece.getX() - 1, this.currentPiece.getY());
        }
        canMoveDown() {
            return this.canPieceFit(this.currentPiece, this.currentPiece.getX(), this.currentPiece.getY() + 1);
        }
        detectFullRows() {
            const fullRows = [];
            for (let y = 0; y < constants_1.ROWS; y++) {
                if ((0, utils_1.bucketRowFull)(this.bucket[y])) {
                    fullRows.push(y);
                }
            }
            this.log('RowsCleared', fullRows.length, fullRows);
            return fullRows;
        }
        clearRow(y) {
            const row = this.bucket[y];
            for (let col = 0; col < constants_1.COLS; col++) {
                if (row[col] === '') {
                    return;
                }
            }
            this.bucket.splice(y, 1);
            const newRow = [];
            for (let i = 0; i < constants_1.COLS; i++) {
                newRow.push('');
            }
            this.bucket.unshift(newRow);
        }
        loop(time) {
            const currentTime = Date.now();
            const handler = this.loopHandlers[this.gameState];
            if (handler) {
                handler(currentTime);
            }
            this.previousTime = currentTime;
            this.triggerLoop();
        }
        loopBeforeStart(time) {
            this.clearGameBoard();
            this.drawGrid();
            this.drawModal();
            this.writeWord('GREGTRIS', 6, 7, '#092');
            this.writeWord('PRESS', 7, 9, '#06f');
            this.writeWord('ENTER', 7, 10, '#f60');
            this.writeWord('TO START', 6, 11, '#f20');
            this.writeWord('NEW GAME', 6, 12, '#f0f');
        }
        loopLoading(time) {
            this.clearGameBoard();
            this.drawGrid();
            this.drawModal();
            this.writeWord('GREGTRIS', 6, 7, '#092');
            this.writeWord('LOADING…', 6, 9, '#f20');
        }
        clearRowAnimationTween(tween) {
            this.log('ClearRowAnim', tween, this.rowsToClear.join(','));
            this.clearGameBoard();
            this.drawGrid();
            this.drawOutlilnes();
            this.setGameText();
            this.drawCurrentPiece();
            this.drawNextPiece();
            this.drawBucket(this.rowsToClear, Math.min(0, Math.max(tween, 1)));
        }
        calculateDrop(time) {
            let dropped = constants_1.DROP_STATE_WAITING;
            const diff = time - (this.pieceTime || 0);
            const showLog = this.loopCounter % 30 === 0;
            let dropSpeed = rules_1.default.MiliSecondsPerDrop[this.level];
            if (this.isSoftDrop) {
                dropSpeed = rules_1.default.MiliSecondsSoftDrop;
            }
            if (this.isHardDrop) {
                dropSpeed = rules_1.default.MiliSecondsHardDrop;
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
                    dropped = constants_1.DROP_STATE_DROPPING;
                }
                else {
                    this.log('Dropped');
                    const canAdd = this.addPieceToBucket(this.currentPiece, this.currentPiece.getX(), this.currentPiece.getY());
                    this.initializePiece();
                    this.clearDropPieceModifier(true);
                    dropped = constants_1.DROP_STATE_STOPPED;
                    this.dropLockTime = time;
                }
            }
            else {
                if (showLog) {
                    this.log('NOTHING', diff, Math.floor(dropTimer), time, this.pieceTime);
                }
            }
            return dropped;
        }
        loopStarted(time) {
            if (this.dropLockTime) {
                const dlDiff = time - this.dropLockTime;
                // this.log('DROP LOCK WAIT', dlDiff - Rules.Durations.LOCK_DOWN_DURATION, dlDiff, Rules.Durations.LOCK_DOWN_DURATION);
                if (dlDiff > rules_1.default.Durations.LOCK_DOWN_DURATION) {
                    this.dropLockTime = null;
                    this.pieceTime = Date.now();
                }
                else {
                    return;
                }
            }
            else if (this.clearRowTime) {
                const crDiff = time - this.clearRowTime;
                // this.log('CLEAR ROW WAIT', crDiff - Rules.Durations.ROW_CLEAR_DURATION, crDiff, Rules.Durations.ROW_CLEAR_DURATION);
                if (crDiff > rules_1.default.Durations.ROW_CLEAR_DURATION) {
                    this.clearRowTime = null;
                    this.clearRowAnimationTween(1);
                    this.rowsToClear.forEach((row) => this.clearRow(row));
                    this.rowsToClear = [];
                    this.pieceTime = Date.now();
                }
                else {
                    this.clearRowAnimationTween(crDiff / rules_1.default.Durations.ROW_CLEAR_DURATION);
                    return;
                }
            }
            else if (this.pieceTime) {
                const dropState = this.calculateDrop(time);
                this.log('DROP STATE', dropState);
                if (dropState === constants_1.DROP_STATE_STOPPED) {
                    this.rowsToClear = this.detectFullRows();
                    this.incrementLines(this.rowsToClear.length);
                    this.clearRowTime = Date.now();
                    return;
                }
                else if (dropState === constants_1.DROP_STATE_GAME_OVER) {
                    this.endGame();
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
        loopPaused(time) {
            this.drawModal();
            this.writeWord('PAUSED', 7, 11, '#f20');
        }
        loopGameOver(time) {
            this.clearGameBoard();
            this.drawGrid();
            this.drawModal();
            this.writeWord('GAME', 6, 7, '#00F');
            this.writeWord('OVER', 10, 7, '#F00');
            this.writeWord('GAME', 6, 8, '#F00');
            this.writeWord('OVER', 10, 8, '#00F');
            this.writeWord('LEVEL', 6, 10, '#666');
            this.writeWord(`${this.level}`, 14 - `${this.level}`.length, 10, '#092');
            this.writeWord('SCORE', 6, 12, '#666');
            this.writeWord(`${this.currentScore}`, 14 - `${this.currentScore}`.length, 13, '#f06');
            this.writeWord('GAME', 6, 15, '#00F');
            this.writeWord('OVER', 10, 15, '#F00');
            this.writeWord('GAME', 6, 16, '#F00');
            this.writeWord('OVER', 10, 16, '#00F');
        }
        isLoading() {
            return this.gameState === constants_1.GAME_STATE_LOADING;
        }
        isDoneLoading() {
            return this.gameState === constants_1.GAME_STATE_BEFORE_START;
        }
        isPaused() {
            return this.gameState === constants_1.GAME_STATE_PAUSED;
        }
        isStarted() {
            return this.gameState === constants_1.GAME_STATE_STARTED;
        }
        isGameOver() {
            return this.gameState === constants_1.GAME_STATE_OVER;
        }
        init() {
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
        triggerLoop() {
            if (!this.killed) {
                this.requestAnimationFrameHandle = requestAnimationFrame(this.boundLoop);
            }
        }
        begin() {
            this.killed = false;
            this.setGameState(constants_1.GAME_STATE_BEFORE_START);
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
            if (this.gameState === constants_1.GAME_STATE_PAUSED && this.pauseTime) {
                this.startTime = this.startTime + (Date.now() - this.pauseTime);
                this.pauseTime = null;
            }
            else {
                this.initializePiece();
            }
            this.setGameState(constants_1.GAME_STATE_STARTED);
        }
        pauseGame() {
            this.log('PauseGame');
            this.pauseTime = Date.now();
            this.setGameState(constants_1.GAME_STATE_PAUSED);
        }
        endGame() {
            this.log('EndGame');
            this.overTime = Date.now();
            this.setGameState(constants_1.GAME_STATE_OVER);
            if (this.currentScore > this.highScore) {
                this.setHighScore(this.currentScore);
            }
        }
        kill() {
            this.loopGameOver(Date.now());
            this.setGameState(constants_1.GAME_STATE_OVER);
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
    exports.default = Gregtris;
});
//# sourceMappingURL=gregtris.js.map