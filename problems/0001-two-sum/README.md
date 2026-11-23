# 1. Two Sum

- Link: https://leetcode.com/problems/two-sum/
- Difficulty: Easy
- Topics: Array, Hash Table

## Approach

One pass with a hash map from value to index. For each number, check whether
`target - n` has already been seen; if so, return both indices.

- Time: O(n)
- Space: O(n)

## Notes

- Brute force (check every pair) is O(n²).
