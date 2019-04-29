export const mergeSort = (array: number[]): number[] => {
  if (array.length === 1) {
    return array;
  }
  // Divide and conquer
  const mid = array.length / 2;
  const leftSide = array.slice(0, mid);
  const rightSide = array.slice(mid);

  // Merge left half
  const sortedLeftArray = mergeSort(leftSide);
  // Merge right half
  const sortedRightArray = mergeSort(rightSide);

  return merge(sortedLeftArray, sortedRightArray);
};

export const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = [];
  let i = 0,
    j = 0;
  while (i < left.length || j < right.length) {
    if (left[i] <= right[j] || j >= right.length) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result;
};
