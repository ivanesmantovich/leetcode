function lengthOfLastWord(s: string): number {
    let start = null
    let end = null

    for (let i = s.length - 1; i >= 0; i--) {
        if (!start && s[i] !== ' ') {
            start = i
        }

        if (start) {
            if (s[i] === ' ') end = i + 1
            else if (i === 0) end = i

            if (end !== null) return start - end + 1
        }
    }

    return 1
}
