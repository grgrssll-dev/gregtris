export const SPACE_PLACEHOLDER = '$SPACE$';

const alphabet: Record<string, number[][]> = {
    '0': [
        [0,0,1,1,1,0,0,0],
        [0,1,0,0,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,0,0,1,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    '1': [
        [0,0,0,1,1,0,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    '2': [
        [0,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,1,1,1,0,0],
        [0,0,1,1,1,0,0,0],
        [0,1,1,0,0,0,0,0],
        [1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    '3': [
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,1,1,1,1,0,0],
        [0,0,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    '4': [
        [0,0,0,1,1,1,0,0],
        [0,0,1,1,1,1,0,0],
        [0,1,1,0,1,1,0,0],
        [1,1,0,0,1,1,0,0],
        [1,1,1,1,1,1,1,0],
        [0,0,0,0,1,1,0,0],
        [0,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    '5': [
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,0,0],
        [0,0,0,0,0,1,1,0],
        [0,0,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    '6': [
        [0,0,1,1,1,1,0,0],
        [0,1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    '7': [
        [1,1,1,1,1,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0,0],
        [0,0,1,1,0,0,0,0],
        [0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    '8': [
        [0,1,1,1,1,0,0,0],
        [1,1,0,0,0,1,0,0],
        [1,1,1,0,0,1,0,0],
        [0,1,1,1,1,0,0,0],
        [1,0,1,1,1,1,1,0],
        [1,0,0,0,0,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    '9': [
        [0,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0,0],
        [0,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    'a': [
        [0,0,1,1,1,0,0,0],
        [0,1,1,0,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,1,1,1,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    'c': [
        [0,0,1,1,1,1,0,0],
        [0,1,1,0,0,1,1,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0],
        [0,0,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    'd': [
        [1,1,1,1,1,0,0,0],
        [1,1,0,0,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,1,1,0,0],
        [1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    'e': [
        [1,1,1,1,1,1,1,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    'g': [
        [0,0,1,1,1,1,1,0],
        [0,1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,1,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,0,0,1,1,0],
        [0,0,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    'i': [
        [0,1,1,1,1,1,1,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    'l': [
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    'm': [
        [1,1,0,0,0,1,1,0],
        [1,1,1,0,1,1,1,0],
        [1,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,1,0],
        [1,1,0,1,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    'n': [
        [1,1,0,0,0,1,1,0],
        [1,1,1,0,0,1,1,0],
        [1,1,1,1,0,1,1,0],
        [1,1,1,1,1,1,1,0],
        [1,1,0,1,1,1,1,0],
        [1,1,0,0,1,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    'o': [
        [0,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    'p': [
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    'r': [
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,1,1,1,0],
        [1,1,1,1,1,0,0,0],
        [1,1,0,1,1,1,0,0],
        [1,1,0,0,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    's': [
        [0,1,1,1,1,1,0,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,1,1],
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    't': [
        [0,1,1,1,1,1,1,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    'u': [
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    'v': [
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,1,0,1,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    'w': [
        [1,1,0,0,0,1,1,0],
        [1,1,0,0,0,1,1,0],
        [1,1,0,1,0,1,1,0],
        [1,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,1,0],
        [1,1,1,0,1,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    'x': [
        [1,1,0,0,0,1,1,0],
        [1,1,1,0,1,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,1,1,1,0,0,0],
        [0,1,1,1,1,1,0,0],
        [1,1,1,0,1,1,1,0],
        [1,1,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0],
    ],
    '-': [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    '.': [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,1,1,0,0,0,0,0],
        [0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    '…': [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,1,0,1,1,0,1,1],
        [1,1,0,1,1,0,1,1],
        [0,0,0,0,0,0,0,0],
    ],
    [SPACE_PLACEHOLDER]: [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ]
};

export default alphabet;