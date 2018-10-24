const parser = require("../../src/helpers/data-parser");

describe("Data Parser", () => {
  it("should throw an error if no game data is passed", () => {
    parser.parseData("").catch(err => {
      expect(err).toBeDefined();
    });
  });

  it("should throw an error if only invalid game data is passed", () => {
    parser.parseData("Junk\nData").catch(err => {
      expect(err).toBeDefined();
    });
  });

  it("should correctly parse file contents into an array of game data", () => {
    parser.parseData("3,5\n8,0\nX\n7,2").then(rollsList => {
      expect(rollsList).toEqual(expect.arrayContaining([3, 5, 8, 0, 10, 7, 2]));
    });
  });
});
