import { test, expect } from "@playwright/test";
import MathSolverPage from "./pages/ms-math-solver.page";

test.describe("Factorization with MS Math Solver", () => {
  test.beforeEach(async ({ page }) => {
    await new MathSolverPage(page).goto();
  });

  [
    { a: "9", b: "9", result: "81", hiddenFactorization: "3^{4}" },
    { a: "8", b: "8", result: "64", hiddenFactorization: "2^{6}" },
    { a: "6", b: "9", result: "54", hiddenFactorization: "2\\times 3^{3}" },
  ].forEach(({ a, b, result, hiddenFactorization }) => {
    test(`Should correctly factorize multiplication of composite numbers - example with ${a}x${b}`, async ({ page }) => {
      const po = new MathSolverPage(page);
      await po.calculatorButton(a).click();
      await po.calculatorButton("Multiply").click();
      await po.calculatorButton(b).click();
      await po.calculatorButton("Solve").click();
      await expect(po.visibleAnswerResult('Evaluate')).toHaveText(result);
      await expect(po.hiddenAnswerResult('Factor')).toHaveText(hiddenFactorization);

    });
  });

  [5, 41, 97].forEach((number) => {
    test(`Should correctly factorize x^2 for prime number multiplied by itself - example with ${number}`, async ({ page }) => {
      const po = new MathSolverPage(page);
      await po.calcInput.pressSequentially(number.toString());
      await po.calculatorButton("Multiply").click();
      await po.calcInput.pressSequentially(number.toString());
      await po.calcInput.press('Enter');
      await expect(po.visibleAnswerResult('Evaluate')).toHaveText(`${number * number}`);
      await expect(po.hiddenAnswerResult('Factor')).toHaveText(`${number}^{2}`);
    });
  });

  [
    { a: "41", b: "31", result: "1271", visibleFactorization: "31×41" },
    { a: "31", b: "37", result: "1147", visibleFactorization: "31×37" },
  ].forEach(({ a, b, result, visibleFactorization }) => {
    test(`Two prime numbers cannot be factorized - example with ${a}x${b}`, async ({ page }) => {
      const po = new MathSolverPage(page);
      await po.calcInput.pressSequentially(a);
      await po.calculatorButton("Multiply").click();
      await po.calcInput.pressSequentially(b);
      await po.calculatorButton("Solve").click();
      await expect(po.visibleAnswerResult('Evaluate')).toHaveText(result);
      await expect(po.visibleAnswerResult('Factor')).toHaveText(visibleFactorization);
    });
  });
});
