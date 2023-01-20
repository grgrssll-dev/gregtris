import { Color } from './interfaces';

export function rand(min: number, max: number): number {
    return min + (Math.round(Number.MAX_SAFE_INTEGER * Math.random()) % (max - min + 1));
}

export function bucketRowFull(a: string[]): boolean {
    const checker = (v: string) => v !== '';
    return a.every(checker);
}

export function deconstructColor(rgba: string): Color {
    const vals = rgba.replace('rgba(', '').replace(')', '');
    const [r,g,b,a] = `${vals}`.trim().split(',').map((v) => `${v || ''}`.trim());
    return {
        r: Math.max(0, Math.min(parseInt(r, 10), 255)),
        g: Math.max(0, Math.min(parseInt(g, 10), 255)),
        b: Math.max(0, Math.min(parseInt(b, 10), 255)),
        a: Math.max(0, Math.min(parseFloat(a), 1)),
    }
}

export function constructColor(color: Color): string {
    return `rgba(${color.r},${color.g},${color.b},${color.a})`;
}