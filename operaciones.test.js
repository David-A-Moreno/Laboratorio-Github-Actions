const sum = require('./operaciones');
const mult = require('./operaciones');
const div = require('./operaciones')

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
  expect(mult(2, 3)).toBe(6);
  expect(div(10, 2)).toBe(5);
});
