const isNumber = require('./index.js');

test('"0"', () => {
    expect(isNumber("0")).toBe(true);
})

test('" 0.5 "', () => {
    expect(isNumber(" 0.5 ")).toBe(true);
})

test('"fg"', () => {
    expect(isNumber("fg")).toBe(false);
})

test('"3 z"', () => {
    expect(isNumber("3 z")).toBe(false);
})

test('"1e20"', () => {
    expect(isNumber("1e20")).toBe(true);
})

test('"  -180e3 "', () => {
    expect(isNumber("  -180e3 ")).toBe(true);
})

test('"   7e"', () => {
    expect(isNumber("   7e")).toBe(false);
})

test('"e9"', () => {
    expect(isNumber("e9")).toBe(false);
})

test('" 5e-2"', () => {
    expect(isNumber(" 5e-2")).toBe(true);
})

test('" 42e3.5 "', () => {
    expect(isNumber(" 42e3.5 ")).toBe(false);
})

test('"  84."', () => {
    expect(isNumber("  84.")).toBe(true);
})

test('"   126.e3"', () => {
    expect(isNumber("   126.e3")).toBe(true);
})

test('"71.3e82"', () => {
    expect(isNumber("71.3e82")).toBe(true);
})

test('"+21  "', () => {
    expect(isNumber("+21  ")).toBe(true);
})

test('" --7 "', () => {
    expect(isNumber(" --7 ")).toBe(false);
})

test('"-+1"', () => {
    expect(isNumber("-+1")).toBe(false);
})

test('"42z43f44"', () => {
    expect(isNumber("42z43f44")).toBe(false);
})

