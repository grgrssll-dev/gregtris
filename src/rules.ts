const frameRateMultiplier = 16.66666;

export const DURATION_LOCK_DOWN_DURATION = 500;
export const DURATION_ROW_CLEAR_DURATION = 1000;

export const Durations: Record<string, number> = {
    LOCK_DOWN_DURATION: DURATION_LOCK_DOWN_DURATION,
    ROW_CLEAR_DURATION: DURATION_ROW_CLEAR_DURATION
};

export const RULE_LINES_LEVEL_CHANGE = 10;

export const Speeds = {
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

export const MaxLevel = Math.max(...Object.keys(Speeds).map((k) => +k));

export const MiliSecondsPerDrop = Object.values(Speeds).map((s) => (1 / s) * frameRateMultiplier);

export const SOFT_DROP_SPEED = (MiliSecondsPerDrop[1]) / 20;

export const Scoring: Record<string, Record<number, (n: number) => number>> = {
    line: {
        1: (level: number):number => 40 * (level + 1),
        2: (level: number):number => 100 * (level + 1),
        3: (level: number):number => 300 * (level + 1),
        4: (level: number):number => 1200 * (level + 1),
    } as Record<number, (n: number) => number>
};

const Rules = {
    Scoring,
    Speeds,
    MaxLevel,
    MiliSecondsPerDrop,
    MiliSecondsSoftDrop: SOFT_DROP_SPEED,
    MiliSecondsHardDrop: 1,
    Durations,
    LINES_LEVEL_CHANGE: RULE_LINES_LEVEL_CHANGE,
};


export default Rules;