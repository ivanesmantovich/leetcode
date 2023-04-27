// Roman to Integer (https://leetcode.com/problems/roman-to-integer/)

const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
])

function romanToInt(s: string): number {
    let result: number = 0
    for (let i = 0; i < s.length; i++) {
        const currentletter: string = s[i]
        const nextLetter: string = s[i + 1]
        if (nextLetter && shouldSubstract(currentletter, nextLetter)) {
            result += map.get(nextLetter)! - map.get(currentletter)!
            i++
        } else {
            result += map.get(currentletter)!
        }
    }

    return result
}

function shouldSubstract(currentLetter: string, nextLetter: string): boolean {
    return (
        (currentLetter === 'I' && (nextLetter === 'V' || nextLetter === 'X')) ||
        (currentLetter === 'X' && (nextLetter === 'L' || nextLetter === 'C')) ||
        (currentLetter === 'C' && (nextLetter === 'D' || nextLetter === 'M'))
    )
}
