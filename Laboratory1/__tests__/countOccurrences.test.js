const countOccurrences = require("../scripts/countOccurrences.js");


test('Подсчет вхождений подстроки в строку', () => {
  expect(countOccurrences('hello, hello, hello', 'hello')).toBe(3);
});


test('Обработка случая, когда вхождения не найдены', () => {
  expect(countOccurrences('abcde', 'xyz')).toBe(0);
});

test('Обработка пустой строки', () => {
  expect(countOccurrences('', 'test')).toBe(0);
});

test('Обработка пустой подстроки', () => {
  expect(countOccurrences('test', '')).toBe(0);
});