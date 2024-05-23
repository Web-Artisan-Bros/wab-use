import { ClassValue } from 'clsx';

declare function arraySplitByLimit(list: any[], maxLength: number): any;

declare function classMerge(...inputs: ClassValue[]): string;

declare function random(min?: number, max?: number): number;
declare function uuid(): string;

/**
 * @link https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/
 *
 * @param {number} minVW
 * @param {number} maxVW
 * @param {number} minPX
 * @param {number} maxPX
 * @return {string} CSS clamp function
 */
declare function fluidSize(minVW: number, maxVW: number, minPX: number, maxPX: number): string;

export { arraySplitByLimit, classMerge, fluidSize, random, uuid };
