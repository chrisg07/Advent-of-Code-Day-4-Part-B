var BingoTile = require('./BingoTile.js');

module.exports = class BingoCard {
  row1 = [];
  row2 = [];
  row3 = [];
  row4 = [];
  row5 = [];
  solved = false;

  constructor(row1, row2, row3, row4, row5) {
    this.row1 = row1.map(tile => new BingoTile(tile));
    this.row2 = row2.map(tile => new BingoTile(tile));
    this.row3 = row3.map(tile => new BingoTile(tile));
    this.row4 = row4.map(tile => new BingoTile(tile));
    this.row5 = row5.map(tile => new BingoTile(tile));
  }

  markTile(number) {
    this.row1.forEach(tile => {
      if (tile.number === Number(number)) {
        tile.mark();
      }
    });
    this.row2.forEach(tile => {
      if (tile.number === Number(number)) {
        tile.mark();
      }
    });
    this.row3.forEach(tile => {
      if (tile.number === Number(number)) {
        tile.mark();
      }
    })
    this.row4.forEach(tile => {
      if (tile.number === Number(number)) {
        tile.mark();
      }
    })
    this.row5.forEach(tile => {
      if (tile.number === Number(number)) {
        tile.mark();
      }
    })
  }

  isSolved() {
    let rowIsSolved = this.isRowSolved(0)
      || this.isRowSolved(1)
      || this.isRowSolved(2)
      || this.isRowSolved(3)
      || this.isRowSolved(4);

    let columnIsSolved = this.isColumnSolved(0)
      || this.isColumnSolved(1)
      || this.isColumnSolved(2)
      || this.isColumnSolved(3)
      || this.isColumnSolved(4);

    return rowIsSolved || columnIsSolved;
  }

  isRowSolved(index) {
    switch(index) {
      case 0:
        return this.row1.every(tile => tile.marked)
      case 1:
        return this.row2.every(tile => tile.marked)
      case 2:
        return this.row3.every(tile => tile.marked)
      case 3:
        return this.row4.every(tile => tile.marked)
      case 4:
        return this.row5.every(tile => tile.marked)
      default:
        console.error('invalid index for row')
    } 
  }

  isColumnSolved(index) {
    return this.row1[index].marked
      && this.row2[index].marked
      && this.row3[index].marked
      && this.row4[index].marked
      && this.row5[index].marked;
  }

  getSumOfUnmarkedNumbers() {
    let sum = 0;
    this.row1.forEach(tile => !tile.marked ? sum += tile.number : sum += 0);
    this.row2.forEach(tile => !tile.marked ? sum += tile.number : sum += 0);
    this.row3.forEach(tile => !tile.marked ? sum += tile.number : sum += 0);
    this.row4.forEach(tile => !tile.marked ? sum += tile.number : sum += 0);
    this.row5.forEach(tile => !tile.marked ? sum += tile.number : sum += 0);
    return sum;
  }
}
