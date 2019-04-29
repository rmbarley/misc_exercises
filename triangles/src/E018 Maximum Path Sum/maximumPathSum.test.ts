import { maxPathSum } from "./maximumPathSum";
import { importTriangle } from "./readTriangle";

const bigTriangle = importTriangle("./p018_triangle.txt");
const bighTriangle = importTriangle("./p067_triangle.txt");

test("Calculates longest path for triangle", () => {
  expect(maxPathSum(bigTriangle)).toEqual(1074);
});

test("Calculates longest path for bigh triangle", () => {
  expect(maxPathSum(bighTriangle)).toEqual(7273);
});
