export default class Player {
  #score = 0;
  constructor(ID) {
    this.playerId = ID;
  }
  get playerScore() {
    return this.#score;
  }
  addToScore() {
    this.#score++;
  }
}
