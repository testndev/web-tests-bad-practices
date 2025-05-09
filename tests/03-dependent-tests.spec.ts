import { test, expect } from "@playwright/test";

test.describe("simple multiplication with MS Math Solver  - 👎", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://mathsolver.microsoft.com/fr/solver");
  });

  test("simple multiplication", async ({ page }) => {
    await page.getByRole("button", { name: "4" }).click();
    await page.getByRole("button", { name: "5" }).click();
    await page.getByRole("button", { name: "Multiplier" }).click();
    await page.getByRole("button", { name: "2" }).click();
    await page.getByRole("button", { name: "Résoudre" }).click();
    await expect(page.getByRole("main")).toContainText("45×2=90");
  });

  test.fixme(
    "Multiplication followed by addition",
    async ({ page }) => {
      await page.getByRole("button", { name: "Ajouter" }).click();
      await page.getByRole("button", { name: "1", exact: true }).click();
      await page.getByRole("button", { name: "Résoudre" }).click();
      await expect(page.getByRole("main")).toContainText("45×2+1=91");
    }
  );
});
