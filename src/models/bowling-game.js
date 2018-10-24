class BowlingGame {
    constructor(){
        this.rolls = [];
    }

    _isSpare(rollIndex) {
        return (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10);
    }

    // TODO handle strike case in last frame
    _isStrike(rollIndex) {
        return (this.rolls[rollIndex] === 10);
    }

    _getFrameScore(rollIndex, noOfRollsToSum){
        let score = 0;
        let i = 0;

        // noOfRollsToSum handles open frame, spare and strike calculation
        while(i < noOfRollsToSum){
            score += this.rolls[rollIndex] !== undefined && this.rolls[rollIndex];
            rollIndex++;
            i++;
        }
        return score;
    }

    roll(pins) {
        this.rolls.push(pins)
    }

    score(){
        let totalScore = 0;
        let rollIndex = 0;

        for(let frame = 0; frame < 10; frame++){
            if (rollIndex < this.rolls.length){
                if (this._isStrike(rollIndex)){
                    totalScore += this._getFrameScore(rollIndex, 3);
                    rollIndex++;
                } else if (this._isSpare(rollIndex)){
                    totalScore += this._getFrameScore(rollIndex, 3);
                    rollIndex += 2;
                } else {
                    totalScore += this._getFrameScore(rollIndex, 2);
                    rollIndex += 2;
                }
            }
        }

        return totalScore;
    }
}

module.exports = BowlingGame;