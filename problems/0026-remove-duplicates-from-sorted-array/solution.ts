// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Time: ?  Space: ?
import { test } from "vitest";
import assert from "node:assert/strict";

export function removeDuplicates(nums: number[]): number {
  const uniqueArray:number[] = []
  for (let i =0; i < nums.length; i ++) {
    if (!uniqueArray.includes(nums[i])){
      uniqueArray.push(nums[i])
 
    } else {
      nums[i] = 999
    }
  }
  nums.sort((a,b) => a-b)
  return uniqueArray.length;
}

/**
 *  Official 2 Pointer Solutions
 */

/**
 *  if input  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 *  loop 1: 
 *   i = 0 , k = 1
 *   nums[i] = nums[0] = 0
 *   nums[k - 1] =  nums[0] = 0
 *   nums =  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 * 
 *   loop 2: 
 *   i = 1 , k = 1
 *   nums[i] = nums[1] = 0
 *   nums[k - 1] =  nums[0] = 0
 *   nums =  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 * 
 *   loop 3: 
 *   i = 2 , k = 1
 *   nums[i] = nums[2] = 1
 *   nums[k - 1] =  nums[0] = 0
 *   nums[k] = nums[i] = nums[2] = 1
 *   K ＝2
 *   nums = [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
 * 
 *   loop 4: 
 *   i = 3 , k = 2
 *   nums[i] = nums[3] = 1
 *   nums[k - 1] =  nums[1] = 1
  *  nums = [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]

 * 
 *   loop 5: 
 *   i = 4 , k = 2
 *   nums[i] = nums[4] = 1
 *   nums[k - 1] =  nums[1] = 1
 *   nums = [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
 * 
 *   loop 6: 
 *   i = 5 , k = 2
 *   nums[i] = nums[5] = 2
 *   nums[k - 1] =  nums[1] = 1
 *   nums[k] = nums[2] = nums[5] = 2
 *   K ＝3
 *   nums = [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
 * 
 *   loop 7: 
 *   i = 6 , k = 3
 *   nums[i] = nums[6] = 2
 *   nums[k - 1] =  nums[2] = 2
 *   nums = [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
 * 
 *   loop 8: 
 *   i = 7 , k = 3
 *   nums[i] = nums[7] = 3
 *   nums[k - 1] =  nums[2] = 2
 *   nums[k] = nums[3] = nums[7] = 3
 *   K ＝ 4
 *   nums = [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
 * 
 *   loop 9: 
 *   i = 1 , k = 1
 *   nums[i] = nums[1] = 1
 *   nums[k - 1] =  nums[0] = 1
 *   nums = [1, 1, 2]
 * 
 *   loop 10: 
 *   i = 1 , k = 1
 *   nums[i] = nums[1] = 1
 *   nums[k - 1] =  nums[0] = 1
 *   nums = [1, 1, 2]
 */
export function removeDuplicates2(nums: number[]): number {
  let k = 1;                          // k is the index of the last changed position
  
                                      // nums[0] is always unique, so start writing at 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {    // different from the last unique value?
      nums[k] = nums[i];              // write it into the next free slot
      k++;
    }
  }

  return k;
}



// Mirrors LeetCode's custom judge: check k and the first k elements.
function check(nums: number[], expected: number[]) {
  const ref = nums;
  const k = removeDuplicates(nums);
  assert.equal(nums, ref, "must modify the same array");
  assert.equal(k, expected.length);
  assert.deepEqual(nums.slice(0, k), expected);
}

test("example 1", () => {
  check([1, 1, 2], [1, 2]);
});

test("example 2", () => {
  check([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4]);
});

test("single element", () => {
  check([7], [7]);
});

test("no duplicates", () => {
  check([-3, -1, 0, 5], [-3, -1, 0, 5]);
});

test("all the same", () => {
  check([2, 2, 2, 2], [2]);
});

test("negatives and bounds", () => {
  check([-100, -100, -5, 0, 0, 100, 100], [-100, -5, 0, 100]);
});
