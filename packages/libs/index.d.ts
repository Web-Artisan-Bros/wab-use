import { ClassValue } from 'clsx';

declare function arraySplitByLimit(list: any[], maxLength: number): any;

declare function classMerge(...inputs: ClassValue[]): string;

declare function random(min?: number, max?: number): number;
declare function uuid(): string;

export { arraySplitByLimit, classMerge, random, uuid };
