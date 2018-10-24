const parseData = gameData => {
  if (!gameData.length) {
    return Promise.reject(
      new RangeError("Please pass player game data to calculate score!")
    );
  }

  const gameDataArray = gameData
    .replace(/,/g, "\n")
    .split("\n")
    .map(data => {
      if (data === "X") {
        return 10;
      }
      return parseInt(data);
    });

  return Promise.resolve(gameDataArray);
};

module.exports = { parseData };
