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

// SCORING
// Single 	100 × level
// Double 	300 × level
// Triple 	500 × level
// Tetris 	800 × level; difficult
// T-Spin Mini no lines 	100 × level
// T-Spin no lines 	400 × level
// T-Spin Mini Single 	200 × level; difficult
// T-Spin Single 	800 × level; difficult
// T-Spin Mini Double (if present) 	400 × level; difficult
// T-Spin Double 	1200 × level; difficult
// T-Spin Triple 	1600 × level; difficult
// Back-to-Back difficult line clears 	Action score × 1.5 (excluding soft drop and hard drop)
// Combo 	50 × combo count × level
// Soft drop 	1 per cell
// Hard drop 	2 per cell 

export const MiliSecondsPerDrop = Object.values(Speeds).map((s) => (1 / s) * 1000);

const Rules = {
    Speeds,
    MiliSecondsPerDrop,
    LOCK_DOWN_DELAY: RULE_LOCK_DOWN_DELAY,
    ROW_CLEAR_DURATION: RULE_ROW_CLEAR_DURATION,
    SOFT_DROP_MULTIPLIER: RULE_SOFT_DROP_MULTIPLIER,
};


export default Rules;