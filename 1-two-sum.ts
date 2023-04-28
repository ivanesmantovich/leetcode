// Two Sum (https://leetcode.com/problems/two-sum/)

function twoSum(nums: number[], target: number): number[] {
    let result: number[] = []
    // 1. Create a map
    const numMap = new Map()
    nums.forEach((number, index) => {
        // 3. While iterating subtract current num from target
        // and check if map has the needed num (result of substraction)
        const neededNumber = target - number
        if (numMap.has(neededNumber)) {
            // 4. Return the current index and index of needed num
            return (result = [index, numMap.get(neededNumber)])
        }
        // 2. Iterate over nums and fill the map with pairs "num": "index of num"
        numMap.set(number, index)
    })
    return result
}
