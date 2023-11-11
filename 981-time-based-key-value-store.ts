// Time Based Key-Value Store (https://leetcode.com/problems/time-based-key-value-store)
// Neetcode Solution: https://www.youtube.com/watch?v=fu2cD_6E8Hw
// Time: O(log n), Space: O(1)

// At the given key return the value of the CLOSEST (or equal) timestamp
class TimeMap {
    hash: {
        [key: string]: { timestamp: number; value: string }[]
    }

    constructor() {
        this.hash = {}
    }

    set(key: string, value: string, timestamp: number): void {
        if (key in this.hash) this.hash[key].push({ timestamp, value })
        else this.hash[key] = [{ timestamp, value }]
    }

    // Binary Search
    get(key: string, timestamp: number): string {
        if (!(key in this.hash)) return ''

        let closestValue = ''
        let timestamps = this.hash[key]

        let [l, r] = [0, timestamps.length - 1]
        while (l <= r) {
            let mid = Math.floor((l + r) / 2)
            let guess = timestamps[mid]

            if (guess.timestamp === timestamp) return guess.value

            // (This works because timestamps are sorted in ascending order)
            // Update largest if guess is less than target
            if (guess.timestamp < timestamp) {
                closestValue = guess.value
                l = mid + 1
            }

            if (guess.timestamp > timestamp) r = mid - 1
        }

        return closestValue
    }
}
