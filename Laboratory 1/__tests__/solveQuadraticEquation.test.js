const solveQuadraticEquation = require("../scripts/solveQuadraticEquation.js");

describe("solveQuadraticEquation", () => {
  test("Случий вещественных корней", () => {
    expect(solveQuadraticEquation(2, -5, 2)).toEqual([2, 0.5]);
  });

  test("Случий комплексных корней", () => {
    expect(solveQuadraticEquation(3, 2, 5)).toEqual("No real roots");
  });

  test("Нулевой корень", () => {
    expect(solveQuadraticEquation(3, -12, 0)).toEqual([4, 0]);
  });

  test("Неразрешимое уравнение", () => {
    expect(solveQuadraticEquation(0, 0, 10)).toEqual("Not a quadratic equation");
    expect(solveQuadraticEquation(0, 0, 0)).toEqual("Not a quadratic equation");
    expect(solveQuadraticEquation(0, 5, 17)).toEqual("Not a quadratic equation");
  });
});

