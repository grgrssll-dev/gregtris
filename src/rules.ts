export const RULE_LOCK_DOWN_DELAY = 0.5;
export const RULE_SOFT_DROP_MULTIPLIER = 2;
export const RULE_ROW_CLEAR_DURATION = 0.5;

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

const Rules = {
    Speeds,
    LOCK_DOWN_DELAY: RULE_LOCK_DOWN_DELAY,
    ROW_CLEAR_DURATION: RULE_ROW_CLEAR_DURATION,
    SOFT_DROP_MULTIPLIER: RULE_SOFT_DROP_MULTIPLIER,
};


export default Rules;