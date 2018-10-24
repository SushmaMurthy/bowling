const parseData = gameData => {
  // TODO Refactor this logic, consolidate all data validations into one function

  const gameDataArray = gameData
    .replace(/,/g, "\n")
    .split("\n")
    .map(data => {
      if (data === "X") {
        return 10;
      }
      return parseInt(data);
    });

  for (let i = 0; i < gameDataArray.length; i++) {
    if (isNaN(gameDataArray[i])) {
      return Promise.reject(
        new Error(
          "Invalid data, Please provide numbers for rolls and X for strike"
        )
      );
    }
  }

  return Promise.resolve(gameDataArray);
};

module.exports = { parseData };
