export const KEY_LEFT = 'ArrowLeft';
export const KEY_A = 'KeyA';

export const KEY_UP = 'ArrowUp';
export const KEY_W = 'KeyW';

export const KEY_RIGHT = 'ArrowRight';
export const KEY_D = 'KeyD';
export const KEY_SPACE = 'Space'

export const KEY_DOWN = 'ArrowDown';
export const KEY_S = 'KeyS';

export const KEY_ENTER = 'Enter';
export const KEY_NUMPAD_ENTER = 'NumpadEnter';

export const KEY_ESCAPE = 'Escape';
export const KEY_P = 'KeyP';

export const KEY_F2 = 'F2';
export const KEY_R = 'KeyR';

export const KEY_Q = 'KeyQ';
export const KEY_K = 'KeyK';

export const KEYS_ROTATE = [KEY_UP, KEY_W];
export const KEYS_RIGHT = [KEY_RIGHT, KEY_D];
export const KEYS_DROP = [KEY_DOWN, KEY_S];
export const KEYS_HARD_DROP = [KEY_SPACE];
export const KEYS_LEFT = [KEY_LEFT, KEY_A];
export const KEYS_ENTER = [KEY_ENTER, KEY_NUMPAD_ENTER];
export const KEYS_PAUSE = [KEY_ESCAPE, KEY_P];
export const KEYS_RESTART = [KEY_F2, KEY_R];
export const KEYS_KILL = [KEY_Q, KEY_K];

const Keys = {
    ROTATE: KEYS_ROTATE,
    RIGHT: KEYS_RIGHT,
    DROP: KEYS_DROP,
    HARD_DROP: KEYS_HARD_DROP,
    LEFT: KEYS_LEFT,
    ENTER: KEYS_ENTER,
    PAUSE: KEYS_PAUSE,
    RESTART: KEYS_RESTART,
    KILL: KEYS_KILL,
};

export default Keys;