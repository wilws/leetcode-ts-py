# https://leetcode.com/problems/remove-duplicates-from-sorted-array/
# Time: ?  Space: ?


class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        # TODO
        return 0


# Mirrors LeetCode's custom judge: check k and the first k elements.
def check(nums: list[int], expected: list[int]) -> None:
    ref = nums
    k = Solution().removeDuplicates(nums)
    assert nums is ref, "must modify the same list"
    assert k == len(expected)
    assert nums[:k] == expected


def test_example_1():
    check([1, 1, 2], [1, 2])


def test_example_2():
    check([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4])


def test_single_element():
    check([7], [7])


def test_no_duplicates():
    check([-3, -1, 0, 5], [-3, -1, 0, 5])


def test_all_the_same():
    check([2, 2, 2, 2], [2])


def test_negatives_and_bounds():
    check([-100, -100, -5, 0, 0, 100, 100], [-100, -5, 0, 100])
