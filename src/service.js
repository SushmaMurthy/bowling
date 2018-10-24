const clc = require("cli-color");
const reader = require("./helpers/file-reader");
const parser = require("./helpers/data-parser");
const BowlingGame = require("./models/bowling-game");

// Predefine styling
const codeRed = clc.red.bold;
const codeGreen = clc.green.bold;

const scoreCalculator = fileName => {
  reader
    .readInputFile(fileName)
    .then(fileData => parser.parseData(fileData))
    .then(rolls => {
      const game = new BowlingGame();
      for (let i = 0; i < rolls.length; i++) {
        game.roll(rolls[i]);
      }
      console.log(codeGreen(`SCORE: ${game.score()}`));
    })
    .catch(error => console.log(codeRed(`ERROR: ${error.message}`)));
};

// run simulator with input file argument
scoreCalculator(process.argv[2]);
