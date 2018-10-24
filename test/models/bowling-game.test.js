const BowlingGame = require("../../src/models/bowling-game");

describe("Bowling Game", () => {
  let player;

  beforeEach(() => {
    player = new BowlingGame();
  });

  it("rolls the pin", () => {
    player.roll(1);
    expect(player.score()).toBe(1);
  });

  it("rolls ball to gutter", () => {
    player.roll(0);
    expect(player.score()).toBe(0);
  });

  it("multiple rolls", () => {
    player.roll(5);
    player.roll(3);
    player.roll(8);
    expect(player.score()).toBe(16);
  });

  it("multiple rolls with a spare", () => {
    player.roll(5);
    player.roll(5);
    player.roll(3);
    expect(player.score()).toBe(16);
  });

  it("multiple rolls with a strike", () => {
    player.roll(10);
    player.roll(5);
    player.roll(3);
    expect(player.score()).toBe(26);
  });

  it("multiple rolls with a spare and a strike", () => {
    player.roll(5);
    player.roll(5);
    player.roll(10);
    player.roll(3);
    player.roll(4);
    expect(player.score()).toBe(44);
  });

  it("full game", () => {
    // TODO create a random roll generator fn
    player.roll(5);
    player.roll(4);
    player.roll(10);
    player.roll(3);
    player.roll(4);
    player.roll(5);
    player.roll(5);
    player.roll(8);
    player.roll(1);
    player.roll(10);
    player.roll(2);
    player.roll(0);
    player.roll(1);
    player.roll(7);
    player.roll(9);
    player.roll(1);
    player.roll(2);
    player.roll(6);
    expect(player.score()).toBe(102);
  });

  it("full game with a strike in the last frame", () => {
    // TODO Add rolls for all 10 frames and Strike at 10th frame
  });
});
