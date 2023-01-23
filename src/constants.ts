import { GameState, AnimState } from './interfaces';

export const ROWS = 20;
export const COLS = 10;
export const GAME_ROWS = 24;
export const GAME_COLS = 20;
export const MARGIN = 1;
export const MX = 2;
export const PX = 2;
export const GAME_SIZE_DIVISOR = 8;
export const FACET_DIVISOR = 8;
export const ALPHA_DIVISOR = 8;
export const DIMENSION_RATIO = GAME_COLS / GAME_ROWS;
export const HIGH_SCORE_KEY = 'HighScore';

export const GAME_STATE_LOADING = 'LOADING';
export const GAME_STATE_BEFORE_START = 'BEFORE_START';
export const GAME_STATE_STARTED = 'STARTED';
export const GAME_STATE_PAUSED = 'PAUSED';
export const GAME_STATE_OVER = 'OVER';

export const ANIMATION_STATE_DROPPING = 'DROPPING';
export const ANIMATION_STATE_CLEARING = 'CLEARING';
export const ANIMATION_STATE_WAITING = 'WAITING';

export const DROP_STATE_DROPPING = 'DROPPING';
export const DROP_STATE_STOPPED = 'STOPPED'; 
export const DROP_STATE_WAITING = 'WAITING';


const Constants = {
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
    HIGH_SCORE_KEY,
    GAME_STATE_LOADING,
    GAME_STATE_BEFORE_START,
    GAME_STATE_STARTED,
    GAME_STATE_PAUSED,
    GAME_STATE_OVER,
    ANIMATION_STATE_DROPPING,
    ANIMATION_STATE_CLEARING,
    ANIMATION_STATE_WAITING,
    DROP_STATE_DROPPING,
    DROP_STATE_STOPPED,
    DROP_STATE_WAITING,
};

export default Constants;