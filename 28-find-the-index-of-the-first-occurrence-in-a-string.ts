// function strStr(haystack: string, needle: string): number {
//     return haystack.indexOf(needle)
// }

function strStr(haystack: string, needle: string): number {
    const hLen = haystack.length
    const nLen = needle.length

    let i = 0
    while (i < hLen) {
        let hIndex = i
        let nIndex = 0

        while (hIndex < hLen && nIndex < nLen && haystack[hIndex] == needle[nIndex]) {
            hIndex++
            nIndex++
        }

        if (nIndex == nLen) {
            return i
        }

        i++
    }

    return -1
}