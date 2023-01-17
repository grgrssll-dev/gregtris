import Piece from './piece';

export const FLAT_COLOR = 'rgba(0, 255, 255, 0.5)';
export const L_LEFT_COLOR = 'rgba(0, 0, 255, 0.5)';
export const L_RIGHT_COLOR = 'rgba(255, 127, 0, 0.5)';
export const BOX_COLOR = 'rgba(255, 255, 0, 0.5)';
export const S_LEFT_COLOR = 'rgba(255, 0, 255, 0.5)';
export const S_RIGHT_COLOR = 'rgba(0, 255, 0, 0.5)';
export const MIDDLE_COLOR = 'rgba(255, 0, 0, 0.5)';

export const FLAT = new Piece('FLAT', FLAT_COLOR, [
    [1,1,1,1],
]);
export const L_LEFT = new Piece('L_LEFT', L_LEFT_COLOR, [
    [1,0,0],
    [1,1,1],
]);
export const L_RIGHT = new Piece('L_RIGHT', L_RIGHT_COLOR, [
    [0,0,1],
    [1,1,1],
]);
export const BOX = new Piece('BOX', BOX_COLOR, [
    [1,1],
    [1,1],
]);
export const S_LEFT = new Piece('S_LEFT', S_LEFT_COLOR, [
    [1,1,0],
    [0,1,1],
]);
export const S_RIGHT = new Piece('S_RIGHT', S_RIGHT_COLOR, [
    [0,1,1],
    [1,1,0],
]);
export const MIDDLE = new Piece('MIDDLE', MIDDLE_COLOR, [
    [0,1,0],
    [1,1,1],
]);


const gamePieces = Object.freeze({
    FLAT,
    L_LEFT,
    L_RIGHT,
    BOX,
    S_LEFT,
    S_RIGHT,
    MIDDLE,
}) as Record<string, Piece>;

export default gamePieces;