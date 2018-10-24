const fileReader = require("../../src/helpers/file-reader");
const path = require("path");

describe("FileReader", () => {
  it("should throw an error if the file is not a valid file", () => {
    fileReader
      .readInputFile(path.join("./test/data/nonTextFile"))
      .catch(err => {
        expect(err).toBeDefined();
      });
  });

  it("should throw an error if the file is not a text file", () => {
    fileReader
      .readInputFile(path.join("./test/data/nonTextFile.xml"))
      .catch(err => {
        expect(err).toBeDefined();
      });
  });

  it("should throw an error if file is empty", () => {
    fileReader
      .readInputFile(path.join("./test/data/emptyInstructions.txt"))
      .catch(err => {
        expect(err).toBeDefined();
      });
  });

  it("should correctly read in the contents of a text file", () => {
    fileReader
      .readInputFile(path.join("./test/data/gameData1.txt"))
      .then(response => {
        expect(response).toEqual(expect.stringMatching("3,5\n8,0\nX\n7,2"));
      });
  });
});
