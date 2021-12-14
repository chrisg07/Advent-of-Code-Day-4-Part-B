module.exports = class BingoTile {
  marked = false;
  number;
  
  constructor(number) {
    this.number = Number(number);
  }

  mark() {
    this.marked = true;
  }
}