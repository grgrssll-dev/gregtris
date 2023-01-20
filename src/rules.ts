export const RULE_LOCK_DOWN_DELAY = 0.5;
export const RULE_SOFT_DROP_MULTIPLIER = 20;
export const RULE_ROW_CLEAR_DURATION = 0.5;
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

export const Scoring: Record<string, Record<number, (n: number) => number>> = {
    line: {
        1: (level: number):number => 40 * (level + 1),
        2: (level: number):number => 100 * (level + 1),
        3: (level: number):number => 300 * (level + 1),
        4: (level: number):number => 1200 * (level + 1),
    } as Record<number, (n: number) => number>
};

export const MiliSecondsPerDrop = Object.values(Speeds).map((s) => (1 / s) * 1000);

const Rules = {
    Scoring,
    Speeds,
    MiliSecondsPerDrop,
    LOCK_DOWN_DELAY: RULE_LOCK_DOWN_DELAY,
    ROW_CLEAR_DURATION: RULE_ROW_CLEAR_DURATION,
    SOFT_DROP_MULTIPLIER: RULE_SOFT_DROP_MULTIPLIER,
    LINES_LEVEL_CHANGE: RULE_LINES_LEVEL_CHANGE,
};


export default Rules;