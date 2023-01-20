export type Matrix = number[][];

export type CoordType = 'x' | 'y';

export type GameState = 'LOADING' | 'BEFORE_START' | 'STARTED' | 'PAUSED' | 'OVER';
export type AnimState = 'DROPPING' | 'CLEARING' | 'WAITING';

export type Coord = { x: number; y: number};

export type Container = {
    x: number;
    y: number;
    width: number;
    height: number;
};