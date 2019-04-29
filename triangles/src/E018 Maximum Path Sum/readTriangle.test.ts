import { parseTriangle, importTriangle } from './readTriangle';
const tinyTriangle = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3],
];

test("Parses small triangle", () => {
  expect(parseTriangle(
`3
7 4
2 4 6
8 5 9 3
`)).toEqual(tinyTriangle);
})

test("Imports small triangle", () => {
  expect(importTriangle('./p018_example.txt')).toEqual(tinyTriangle);
})