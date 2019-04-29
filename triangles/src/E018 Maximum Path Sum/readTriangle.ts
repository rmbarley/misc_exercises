import { readFileSync } from 'fs';
import { resolve } from 'path';

export function parseTriangle(triangle: string): number[][] {
  return triangle.split('\n').filter(line => line).map(line => line.split(' ').map(x => +x));
}

export function importTriangle(file: string): number[][] {
  return parseTriangle(readFileSync(resolve(__dirname, file), { encoding: "utf-8"}));
}