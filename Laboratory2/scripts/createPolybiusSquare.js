function createPolybiusSquare() {
  const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
  const squareSize = 5;
  let square = [];

  for (let i = 0; i < squareSize; i++) {
    square[i] = [];
    for (let j = 0; j < squareSize; j++) {
      const letterIndex = i * squareSize + j;
      square[i][j] = alphabet.charAt(letterIndex);
    }
  }

  return square;
}

function encryptWithPolybiusSquare(text) {
  const square = createPolybiusSquare();
  let encryptedText = "";

  text = text.toUpperCase().replace(/J/g, "I");

  for (const char of text) {
    for (let i = 0; i < square.length; i++) {
      for (let j = 0; j < square[i].length; j++) {
        if (square[i][j] === char) {
          encryptedText += `${i + 1}${j + 1} `;
          break;
        }
      }
    }
  }

  return encryptedText.trim();
}

module.exports = encryptWithPolybiusSquare;