const app = require("../../src/app");
const mocks = require("../__mocks__/routes.mocks");
const request = require("supertest");

describe("Routes", () => {
  it("should give items sumarized by given a query", async () => {
    const response = await request(app).get(`${mocks.itemsPath}${mocks.query}`);

    expect(response.body.items.length).toBe(8);
  });

  it("should give a 400 error when query is empty", async () => {
    const response = await request(app).get(`${mocks.itemsPath}`);

    expect(response.status).toBe(400);
  });

  it("should give a item when given a valid item id", async () => {
    const response = await request(app).get(
      `${mocks.itemByIdPath}${mocks.itemId}`
    );

    expect(response.body).toHaveProperty(...mocks.itemByIdKeys);
  });

  it("should give an error when given a invalid item id", async () => {
    const response = await request(app).get(
      `${mocks.itemByIdPath}${mocks.invalidItemId}`
    );

    expect(response.status).toBe(404);
  });
});
