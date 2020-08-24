const getSmallestMissingPositiveNumber = require('./index');

test('"0"', () => {
    expect(getSmallestMissingPositiveNumber([3,5,4,0])).toBe(1);
})

test('"0"', () => {
    expect(getSmallestMissingPositiveNumber([6,7,8,-2,-1,1])).toBe(2);
})

test('"0"', () => {
    expect(getSmallestMissingPositiveNumber([42,43,44])).toBe(1);
})
