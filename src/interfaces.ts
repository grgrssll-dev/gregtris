export type Matrix = number[][];

export type CoordType = 'x' | 'y';

export type GameState = 'LOADING' | 'BEFORE_START' | 'STARTED' | 'PAUSED' | 'OVER';

export type Container = {
    x: number;
    y: number;
    width: number;
    height: number;
};