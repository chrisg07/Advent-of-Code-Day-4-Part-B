var assert = require('assert');
const fs = require('fs')
var BingoCard = require('./BingoCard.js')

describe('Bingo Card', function() {
  describe('board should be marked complete after test input', function() {
    it('create bingo cards from test input', function(done) {
      fs.readFile('text-input.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }

      const lines = data.split(/\r?\n/).map(line => line.trim());
      const numbersToDraw = lines.slice(0, 1)[0].split(',');
      let bingoCards = [];
      for (let i = 2; i < lines.length; i = i + 6) {
        bingoCards.push(new BingoCard(
          lines[i].split(/\s+/),
          lines[i + 1].split(/\s+/),
          lines[i + 2].split(/\s+/),
          lines[i + 3].split(/\s+/),
          lines[i + 4].split(/\s+/),
        ));
      }


      // print all lines




      assert.equal(bingoCards.length, 3)
      console.log(numbersToDraw)
      assert.equal(numbersToDraw[11], 24)
      numbersToDraw.slice(0, 12).forEach(number => {
        console.log('drew', number)
        bingoCards[2].markTile(number);
      })

      assert.equal(bingoCards[2].isSolved(), true)
      assert.equal(bingoCards[2].getSumOfUnmarkedNumbers(), 188)
      done();
    })
    });
  });
});