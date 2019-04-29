export const maxPathSum = (triangle: number[][]): number => {
  const memo = {};
  function findMaxPath(root) {
    if (triangle.length === root[0] + 1) {
      return triangle[root[0]][root[1]];
    }
    let result = memo[root[0] + "," + root[1]];
    if (result) {
      return result;
    }
    result =
      Math.max(
        // Left hand side
        findMaxPath([root[0] + 1, root[1]]),
        // Right hand side
        findMaxPath([root[0] + 1, root[1] + 1])
      ) + triangle[root[0]][root[1]];
    memo[root[0] + "," + root[1]] = result;
    return result;
  }
  // Base case
  return findMaxPath([0, 0]);
};
