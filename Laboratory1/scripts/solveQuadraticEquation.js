function solveQuadraticEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (a === 0) {
    return "Not a quadratic equation";
  }

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  }

  if (discriminant === 0) {
    const x = -b / (2 * a);
    return [x, x];
  }

  return "No real roots";
}

module.exports = solveQuadraticEquation;