const sumirizeItems = require("../../src/helpers/sumirizeItems");
const mocks = require("../__mocks__/sumirizeItems.mocks");

describe("Sumirize Items", () => {
  it("should sumirize the items query response", async () => {
    const response = await sumirizeItems.many(mocks.manyItems);

    expect(response.items.length).toBe(3);
  });

  it("should sumirize the single item query response", async () => {
    const response = await sumirizeItems.single(mocks.singleItem);

    expect(response).toHaveProperty(...mocks.itemKeys);
  });
});
