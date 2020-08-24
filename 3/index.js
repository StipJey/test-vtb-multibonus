function getSmallestMissingPositiveNumber(arr) {
    const store = [];
    arr.forEach(num => {
        if (num > 0) {
            store[num] = num;
        }
    });

    for (let i = 1; i < store.length; i++) {
        if (!store[i]) {
            return i;
        }
    }
}

module.exports = getSmallestMissingPositiveNumber;
