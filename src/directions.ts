export const DIR_UP = 0;
export const DIR_RIGHT = 1;
export const DIR_LEFT = 3;
export const DIR_DOWN = 2;

const directions = Object.freeze({
    [DIR_UP]: DIR_UP,
    [DIR_RIGHT]: DIR_RIGHT,
    [DIR_LEFT]: DIR_LEFT,
    [DIR_DOWN]: DIR_DOWN,
});

export type Direction = keyof typeof directions;

export default directions;