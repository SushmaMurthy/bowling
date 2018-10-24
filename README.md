# Bowling

Scoring system of 10 pin Bowling game. This application accepts the player bowling data and calculates the score.

## Game Data Format
The application only accepts .txt files, with number of pins rolled in a frame per line. 

#Feature:
* One player only
* In each frame, the bowler has 2 tries to knock down all the pins
* **Spare** is when the player knocks down all the 10 pins in a frame (2 tries), Player is awarded 10 points plus a bonus of whatever is scored in a next ball
* **Strike** is when the player knocks down all the 10 pins in a 1st try of the frame (2 tries), Player is awarded 10 points plus a bonus of whatever is scored in a next 2 balls

#Format:
* **A,B:** A is the number of pins knocked down by player in try 1 of frame 1 and B is the number of pins knocked down by player in try 2 of frame 1.
* **X:** Strike

## Installation
### Requirements
* Node.Js server
* Node Package Manager

This application is written in ECMAScript 6 and TDD and code coverage using JEST framework.

Scoring system can be installed locally simply with NPM.
```bash
npm install
```

Precommit Hook: git precommit hook is added to the repo using husky node library. This script ensures that Lint and Unit tests are run before each commit.
```bash
npm run precommit
# To view code coverage, run the above command and report will be available at ./coverage/lcov-report/index.html
```

Run Score Calculator:
```bash
npm start player.txt
# Game data text file is mandatory, refer to Game Data Format section above for more details
# test data samples are available under test/data folder
```

Examples:
```
# Add the below game data in .txt file

junk
values
X
5,8

> ERROR: Invalid data, Please provide numbers for rolls and X for strike

No input

> ERROR: Please pass player game data to calculate score!

1,2
X
5,4
8

> SCORE: 39

```

## Future Enhancements & Notes
* Implement more robust validations around input game data and frames
* Add logic to handle strike and spare on the last frame
