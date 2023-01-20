export function rand(min: number, max: number): number {
    return min + (Math.round(Number.MAX_SAFE_INTEGER * Math.random()) % (max - min + 1));
}

export function bucketRowFull(a: string[]): boolean {
    const checker = (v: string) => v !== '';
    return a.every(checker);
}