const concat = require('./concat');

test('concat two string', () => {
  expect(concat("Juan", "Viafara")).toBe("Juan Viafara");
});