const normalizeString = require("../../src/helpers/normalizeString");
const mocks = require("../__mocks__/normalizeString.mocks");

describe("Normalize string", () => {
  it("should take off the accentuations from the phrases", () => {
    const response = normalizeString(mocks.accentedSentence);

    expect(response).toBe(mocks.notAccentedSentence);
  });
});
