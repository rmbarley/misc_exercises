import { mergeSort, merge } from "./mergeSort";

const unsortedArray = [5, 1, 7, 3, 2, 8, 6, 4];

test("Sorts an array using Merge Sort", () => {
  expect(mergeSort(unsortedArray)).toEqual(unsortedArray.sort());
});

test("Merge() merges two sorted single element arrays", () => {
  expect(merge([5], [1])).toEqual([1, 5]);
});

test("Merge() merges two sorted two element arrays", () => {
  expect(merge([1, 5], [3, 7])).toEqual([1, 3, 5, 7]);
});

test("Merge() merges two sorted two element arrays part two", () => {
  expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
});

test("Merge() merges two sorted two element arrays part three", () => {
  expect(merge([3, 4], [1, 2])).toEqual([1, 2, 3, 4]);
});
