export function rand(min: number, max: number): number {
    return min + (Math.round(Number.MAX_SAFE_INTEGER * Math.random()) % (max - min + 1));
}