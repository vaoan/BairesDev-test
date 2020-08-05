export const biggestValuesItterable = (arrayKeys, numberOfItems = 1) => {
    let keys = []

    for (const key of arrayKeys) {

        if (keys.length === 0) {
            keys.push(key)
        } else {
            const currentKeys = keys.length
            const a = keys.shift()

            const intKey = parseInt(key, 10)
            const intA = parseInt(a, 10)

            const order = intKey > intA ?
                [a, key] : intKey < intA ?
                    [key, a] : [a]

            if (currentKeys === numberOfItems) {
                keys = [...keys, order.pop()]
            } else {
                keys = [...keys, ...order]
            }
            keys.sort((a, b) => a - b)
        }
    }

    return keys
}