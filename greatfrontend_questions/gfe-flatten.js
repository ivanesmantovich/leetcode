/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
    const result = []
    const copy = value.slice()

    while (copy.length) {
        const item = copy.shift()
        if (Array.isArray(item)) copy.unshift(...item)
        else result.push(item)
    }

    return result
}
