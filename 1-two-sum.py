# Two sum (https://leetcode.com/problems/two-sum/)


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # 1. Create an empty dict
        num_dict = dict()
        for index in range(len(nums)):
            # 3. While iterating subtract current num from target
            # and check if dict has the needed num (result of substraction)
            needed_num = target - nums[index]
            if needed_num in num_dict:
                # 4. If it has, return the current index and index of needed num
                return [index, num_dict[needed_num]]
            # 2. Iterate over nums and fill the dict with pairs "num": "index of num"
            num_dict[nums[index]] = index
