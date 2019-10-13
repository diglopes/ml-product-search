const items = require("../../src/services/items");
const mocks = require("../__mocks__/items.mocks");

describe("Items", () => {
  it("should bring items by given a query", async () => {
    const response = await items.searchItems(mocks.query);

    expect(response.query).toBe(mocks.query);
  });

  it("should bring an item when given a valid item id", async () => {
    const response = await items.searchItemByid(mocks.itemId);

    expect(response.id).toBe(mocks.itemId);
  });

  it("should bring a array of categories when given a valid category id", async () => {
    const response = await items.searchCategories(mocks.categoryId);

    expect(Array.isArray(response)).toBeTruthy();
  });

  it("should bring a description text when given a valid item id", async () => {
    const response = await items.searchDescription(mocks.itemId);

    expect(response.length).toBeGreaterThan(10);
  });
});
