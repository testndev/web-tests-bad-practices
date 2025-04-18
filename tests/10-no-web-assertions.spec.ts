import { test, expect } from "@playwright/test";
import MathSolverPage from "./pages/ms-math-solver.page";

test(`Five video thumbnails should be visible 👎`, async ({ page }) => {
  const po = await new MathSolverPage(page).goto();
  await po.calcInput.pressSequentially("2+2");
  await po.calculatorButton("Solve").click();
  expect(await po.relatedVideosThumbnail().count()).toBe(5);
});
