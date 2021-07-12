const calc = require('./calc')

test("add 1 + 2 to be equal 3", () => {
    expect(calc.sum(1,2)).toBe(3);
});

test("add 2 - 1 to be equal 1", () => {
    expect(calc.sub(2,1)).toBe(1);
});

test("add 1 times 2 to be equal 2", () => {
    expect(calc.times(1,2)).toBe(2);
});

test("add 4 + 2 to be equal 2", () => {
    expect(calc.div(4,2)).toBe(2);
});
