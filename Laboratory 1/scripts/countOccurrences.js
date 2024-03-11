function countOccurrences(str, substr) {
  if (!substr) return 0;
  const regex = new RegExp(substr, 'g');
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

module.exports = countOccurrences;