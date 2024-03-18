const encryptWithPolybiusSquare = require("../scripts/createPolybiusSquare");

describe('Шифрование с использованием квадрата Полибия', () => {
  test('Путь 1: Шифрование текста без буквы J', () => {
    expect(encryptWithPolybiusSquare("HELLO")).toBe("23 15 31 31 34");
  });

  test('Путь 2: Шифрование текста с буквой J (заменяется на I)', () => {
    expect(encryptWithPolybiusSquare("JELLY")).toBe("24 15 31 31 54");
  });

  test('Путь 3: Шифрование текста со всеми буквами алфавита, кроме J', () => {
    // Алфавит без J для проверки
    const alphabetWithoutJ = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    let expectedResult = '';
    for (let i = 0; i < alphabetWithoutJ.length; i++) {
      const row = Math.floor(i / 5) + 1;
      const col = (i % 5) + 1;
      expectedResult += `${row}${col} `;
    }
    expect(encryptWithPolybiusSquare(alphabetWithoutJ)).toBe(expectedResult.trim());
  });
});
