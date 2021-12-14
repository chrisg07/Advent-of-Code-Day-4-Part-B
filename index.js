const fs = require('fs')
var BingoCard = require('./BingoCard.js')

fs.readFile('input.txt', 'utf8', (err, data) => {
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


  console.log(numbersToDraw)
  let numDrawn = 0;
  while (bingoCards.filter(card => card.isSolved()).length < bingoCards.length) {
    bingoCards = bingoCards.filter(card => !card.isSolved())
    const numberDrawn = Number(numbersToDraw[numDrawn]);
    bingoCards.forEach(card => card.markTile(numberDrawn))
    numDrawn++
  }
  let winner = bingoCards.filter(card => card.isSolved())[0];

  console.log('someone won with score', winner.getSumOfUnmarkedNumbers() * numbersToDraw[numDrawn - 1])
})