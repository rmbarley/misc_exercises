// How many different ways can £2 be made using any number of coins?
// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
const coinTypes = [1, 2, 5, 10, 20, 50, 100, 200];
export function coinSum(amount: number, coins: number[] = coinTypes, memo = {}) {
  coinSum["timesCalled"] = (coinSum["timesCalled"] || 0) + 1;
  // If we have no coins, or change is negative, break
  if (amount < 0 || coins.length < 1) {
    return 0;
  }

  // Base case is there is no change leftover
  if (amount === 0) {
    return 1;
  }

  if (coins.length === 1) {
    return amount % coins[0] === 0 ? 1 : 0;
  }

  let largestCoin = coins[coins.length - 1];
  const key = amount + "|" + largestCoin;
  let allCombos = memo[key];
  if (allCombos) return allCombos;

  // We can now recurse since coins is smaller
  const combosWithoutLargestCoin = coinSum(amount, coins.slice(0, coins.length - 1), memo);
  let change = amount - largestCoin;
  let combosWithLargestCoin = coinSum(change, coins, memo);
  allCombos = combosWithLargestCoin + combosWithoutLargestCoin;
  memo[key] = allCombos;
  return allCombos;
}
