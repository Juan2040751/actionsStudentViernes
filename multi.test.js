const multi = require('./multi');

test('Multiply two numbers', () => {
  expect(multi(1, 2)).toBe(2);
});