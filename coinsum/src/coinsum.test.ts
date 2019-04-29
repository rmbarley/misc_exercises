import { coinSum } from "./coinSum";

const amount = 200;
test("coinSum should return 0", () => {
  expect(coinSum(amount)).toEqual(73682);
  console.log(coinSum["timesCalled"]);
});
