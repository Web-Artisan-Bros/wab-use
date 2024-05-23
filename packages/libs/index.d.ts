import { ClassValue } from 'clsx';

declare function arraySplit(list: any[], rows: number): any;

declare function classMerge(...inputs: ClassValue[]): string;

declare function random(min?: number, max?: number): number;
declare function uuid(): string;

export { arraySplit, classMerge, random, uuid };
