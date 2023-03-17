const dataCenter = require('./datacenter');


test('test 1 (36)', () => {
    expect(dataCenter(36)).toBe(24);
});

test('test 2 (13)', () => {
    expect(dataCenter(13)).toBe(28);
});
test('test 3 (1)', () => {
    expect(dataCenter(1)).toBe(4);
});