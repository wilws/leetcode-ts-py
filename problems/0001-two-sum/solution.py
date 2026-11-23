# https://leetcode.com/problems/two-sum/
# Time: O(n)  Space: O(n)


class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        seen: dict[int, int] = {}  # value -> index
        for i, n in enumerate(nums):
            if target - n in seen:
                return [seen[target - n], i]
            seen[n] = i
        return []


def test_example_1():
    assert Solution().twoSum([2, 7, 11, 15], 9) == [0, 1]


def test_example_2():
    assert Solution().twoSum([3, 2, 4], 6) == [1, 2]


def test_example_3():
    assert Solution().twoSum([3, 3], 6) == [0, 1]


def test_negative_numbers():
    assert Solution().twoSum([-3, 4, 3, 90], 0) == [0, 2]
