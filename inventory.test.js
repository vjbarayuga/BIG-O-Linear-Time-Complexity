const { searchForItem } = require('./inventory');

test('searches for an item in inventory list', () => {
  expect(searchForItem("stapler")).toBe("Found stapler");
});