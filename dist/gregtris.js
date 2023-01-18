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
define("constants", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ANIMATION_STATE_WAITING = exports.ANIMATION_STATE_CLEARING = exports.ANIMATION_STATE_DROPPING = exports.GAME_STATE_OVER = exports.GAME_STATE_PAUSED = exports.GAME_STATE_STARTED = exports.GAME_STATE_BEFORE_START = exports.GAME_STATE_LOADING = exports.HIGH_SCORE_KEY = exports.DIMENSION_RATIO = exports.ALPHA_DIVISOR = exports.FACET_DIVISOR = exports.GAME_SIZE_DIVISOR = exports.PX = exports.MX = exports.MARGIN = exports.GAME_COLS = exports.GAME_ROWS = exports.COLS = exports.ROWS = void 0;
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
        GAME_STATE_LOADING: exports.GAME_STATE_LOADING,
        GAME_STATE_BEFORE_START: exports.GAME_STATE_BEFORE_START,
        GAME_STATE_STARTED: exports.GAME_STATE_STARTED,
        GAME_STATE_PAUSED: exports.GAME_STATE_PAUSED,
        GAME_STATE_OVER: exports.GAME_STATE_OVER,
        ANIMATION_STATE_DROPPING: exports.ANIMATION_STATE_DROPPING,
        ANIMATION_STATE_CLEARING: exports.ANIMATION_STATE_CLEARING,
        ANIMATION_STATE_WAITING: exports.ANIMATION_STATE_WAITING,
        HIGH_SCORE_KEY: exports.HIGH_SCORE_KEY,
    };
    exports.default = Constants;
});
define("container", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces", ["require", "exports"], function (require, exports) {
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
    exports.rand = void 0;
    function rand(min, max) {
        return min + (Math.round(Number.MAX_SAFE_INTEGER * Math.random()) % (max - min + 1));
    }
    exports.rand = rand;
});
define("gregtris", ["require", "exports", "utils", "alphabet", "currentPiece", "gamePieces", "directions", "constants"], function (require, exports, utils_1, alphabet_1, currentPiece_1, gamePieces_1, directions_4, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const KEY_LEFT = 'ArrowLeft';
    const KEY_A = 'KeyA';
    const KEY_UP = 'ArrowUp';
    const KEY_W = 'KeyW';
    const KEY_RIGHT = 'ArrowRight';
    const KEY_D = 'KeyD';
    const KEY_SPACE = 'Space';
    const KEY_DOWN = 'ArrowDown';
    const KEY_S = 'KeyS';
    const KEY_ENTER = 'Enter';
    const KEY_NUMPAD_ENTER = 'NumpadEnter';
    const KEY_ESCAPE = 'Escape';
    const KEY_P = 'KeyP';
    const KEY_F2 = 'F2';
    const KEY_R = 'KeyR';
    const KEY_Q = 'KeyQ';
    const KEY_K = 'KeyK';
    const KEYS_ROTATE = [KEY_UP, KEY_W];
    const KEYS_RIGHT = [KEY_RIGHT, KEY_D];
    const KEYS_DROP = [KEY_DOWN, KEY_S, KEY_SPACE];
    const KEYS_LEFT = [KEY_LEFT, KEY_A];
    const KEYS_ENTER = [KEY_ENTER, KEY_NUMPAD_ENTER];
    const KEYS_PAUSE = [KEY_ESCAPE, KEY_P];
    const KEYS_RESTART = [KEY_F2, KEY_R];
    const KEYS_KILL = [KEY_Q, KEY_K];
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
                info: { x: constants_1.COLS + (constants_1.MARGIN * 2), y: 3, width: constants_1.GAME_COLS - constants_1.COLS - (constants_1.MARGIN * 3), height: 0 },
                score: { x: constants_1.COLS + (constants_1.MARGIN * 2), y: 3, width: 7, height: 12 },
                next: { x: constants_1.COLS + (constants_1.MARGIN * 2), y: 16, width: 7, height: 7 },
                modal: { x: 5, y: 6, width: 10, height: 12 },
            };
            this.killed = false;
            this.level = 1;
            this.linesCleared = 0;
            this.currentScore = 0;
            this.highScore = 0;
            this.isNewHighScore = false;
            this.gameState = constants_1.GAME_STATE_LOADING;
            this.previousTime = null;
            this.beginTime = null;
            this.loadingTime = null;
            this.startTime = null;
            this.pauseTime = null;
            this.overTime = null;
            this.boundKeyListener = this.keyListener.bind(this);
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
            this.log('KeyBoardShorcuts', { KEYS_ROTATE, KEYS_RIGHT, KEYS_DROP, KEYS_LEFT, KEYS_ENTER, KEYS_PAUSE, KEYS_RESTART, KEYS_KILL });
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
                    row.push(0);
                }
                this.bucket.push(row);
            }
            const storageHighScore = parseInt(`${localStorage.getItem(constants_1.HIGH_SCORE_KEY) || 0}`, 10);
            if (!Number.isNaN(storageHighScore)) {
                this.highScore = storageHighScore;
            }
            window.addEventListener('keydown', this.boundKeyListener);
        }
        log(...msg) {
            if (this.opts.debug === true) {
                console.log('[Gregtris]', ...msg);
            }
        }
        keyListener(e) {
            const { code, key, metaKey, shiftKey, altKey, ctrlKey, } = e;
            const keyCode = code || key;
            const modifierKey = metaKey || shiftKey || altKey || ctrlKey;
            let handled = false;
            if (!modifierKey) {
                if (this.isStarted()) {
                    if (KEYS_LEFT.includes(keyCode)) {
                        handled = true;
                        this.moveCurrentPiece(directions_4.DIR_LEFT);
                    }
                    if (KEYS_RIGHT.includes(keyCode)) {
                        handled = true;
                        this.moveCurrentPiece(directions_4.DIR_RIGHT);
                    }
                    if (KEYS_ROTATE.includes(keyCode)) {
                        handled = true;
                        this.rotateCurrentPiece();
                    }
                    if (KEYS_DROP.includes(keyCode)) {
                        handled = true;
                        this.dropCurrentPiece();
                    }
                    if (KEYS_PAUSE.includes(keyCode)) {
                        handled = true;
                        this.pauseGame();
                    }
                }
                if (KEYS_ENTER.includes(keyCode)) {
                    if (this.isDoneLoading() || this.isPaused()) {
                        handled = true;
                        this.startGame();
                    }
                    else if (this.isGameOver()) {
                        handled = true;
                        this.resetGame();
                    }
                }
                if (KEYS_RESTART.includes(keyCode)) {
                    handled = true;
                    this.resetGame();
                }
                if (KEYS_KILL.includes(keyCode)) {
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
            const curr = this.currentPiece;
            let newX = curr.getX();
            switch (dir) {
                case directions_4.DIR_LEFT: {
                    const { safeX } = this.fitPiece(curr, curr.getX() - 1, curr.getY());
                    newX = safeX;
                    break;
                }
                case directions_4.DIR_RIGHT: {
                    const { safeX } = this.fitPiece(curr, curr.getX() + 1, curr.getY());
                    newX = safeX;
                    break;
                }
                default:
                    break;
            }
            this.currentPiece.setX(newX);
        }
        rotateCurrentPiece() {
            this.currentPiece = this.currentPiece.clone(directions_4.DIR_RIGHT);
        }
        dropCurrentPiece() {
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
            this.writeWord('TOP', 12, 3);
            this.writeWord(`${this.highScore}`, 12, 4);
            this.writeWord('SCORE', 12, 7);
            this.writeWord(`${this.currentScore}`, 12, 8);
            this.writeWord('LINES', 12, 11);
            this.writeWord(`${this.linesCleared}`, 12, 12);
            this.writeWord('NEXT', 12, 16);
        }
        getRandomPiece() {
            gamePiecesArray.sort();
            const direction = this.randDirection();
            return this.randItem(gamePiecesArray).clone(direction);
        }
        setNextPiece() {
            const x = Math.floor((constants_1.COLS - this.nextPiece.getCols()) / 2);
            const y = 0;
            this.currentPiece = currentPiece_1.default.fromPiece(this.nextPiece, x, y);
            this.nextPiece = this.getRandomPiece();
            this.log('NextPiece', this.nextPiece);
            this.placePiece(this.nextPiece, this.conts.next.x + constants_1.MARGIN, this.conts.next.y + (constants_1.MARGIN * 2));
            return this.currentPiece;
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
            const { board, title, info, next, score, } = this.conts;
            this.ctx.strokeStyle = '#000';
            this.ctx.lineWidth = constants_1.PX;
            this.ctx.strokeRect(this.px(board.x), this.px(board.y), this.px(board.width), this.px(board.height));
            this.ctx.strokeRect(this.px(title.x), this.px(title.y), this.px(title.width), this.px(title.height));
            this.ctx.strokeRect(this.px(info.x), this.px(info.y), this.px(info.width), this.px(info.height));
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
            let toX = x;
            let toY = y;
            if (piece.getRows() + y >= constants_1.ROWS) {
                toY = constants_1.ROWS - piece.getRows();
            }
            if (piece.getCols() + x >= constants_1.COLS) {
                toX = constants_1.COLS - piece.getCols();
            }
            return {
                safeX: toX,
                safeY: toY,
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
        drawPieceOnBoard(piece, x, y) {
            const { safeX, safeY } = this.fitPiece(piece, x, y);
            this.placePiece(piece, this.boardOffset('x', safeX), this.boardOffset('y', safeY));
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
        addPieceToBucket(piece, x, y) {
            // TODO
        }
        clearBucketRectangle() {
            this.ctx.clearRect(this.px(this.conts.board.x) + constants_1.PX, this.px(this.conts.board.y) + constants_1.PX, this.px(this.conts.board.width) - (constants_1.PX * 2), this.px(this.conts.board.height) - (constants_1.PX * 2));
        }
        drawBucket() {
            // TODO
        }
        detectCollision(piece, x, y) {
            // TODO
        }
        detectFullRows() {
            // TODO
        }
        clearRow(y) {
            // TODO
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
        loop(time) {
            const currentTime = Date.now();
            this.log('loop', this.gameState, (currentTime - (this.previousTime || currentTime)));
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
        loopStarted(time) {
            this.clearGameBoard();
            this.drawGrid();
            this.drawOutlilnes();
            this.setGameText();
            // TODO game mechanics
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
            this.previousTime = null;
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
            this.previousTime = null;
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