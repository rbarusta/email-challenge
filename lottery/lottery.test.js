
const hitTheLottery = require('./lottery');

test('test 1 (25)', () => {
    expect(hitTheLottery(125)).toBe(3);
});

test('test 2 (43)', () => {
    expect(hitTheLottery(43)).toBe(5);
});
test('test 3 (1000000000)', () => {
    expect(hitTheLottery(1000000000)).toBe(10000000);
});