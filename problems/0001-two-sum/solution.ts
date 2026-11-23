// https://leetcode.com/problems/two-sum/
// Time: O(n)  Space: O(n)
import { test } from "node:test";
import assert from "node:assert/strict";

export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const j = seen.get(target - nums[i]);
    if (j !== undefined) return [j, i];
    seen.set(nums[i], i);
  }
  return [];
}

test("example 1", () => {
  assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
});

test("example 2", () => {
  assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
});

test("example 3", () => {
  assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
});

test("negative numbers", () => {
  assert.deepEqual(twoSum([-3, 4, 3, 90], 0), [0, 2]);
});
