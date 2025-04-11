import { test, expect } from "@playwright/test";

test.describe.parallel("simple multiplication with MS Math Solver  - 👍", () => {
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

  test("Multiplication followed by addition", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "7" }).click();
    await page.getByRole("button", { name: "5" }).click();
    await page.getByRole("button", { name: "Multiplier" }).click();
    await page.getByRole("button", { name: "3" }).click();
    await page.getByRole("button", { name: "Résoudre" }).click();
    await expect(page.getByRole("main")).toContainText("75×3=225");
    await page.getByRole("button", { name: "Clavier" }).click();
    await page.getByRole("button", { name: "Ajouter" }).click();
    await page.getByRole("button", { name: "1", exact: true }).click();
    await page.getByRole("button", { name: "Résoudre" }).click();
    await expect(page.getByRole("main")).toContainText("75×3+1=226");
  });

  test("multiplication and addition with Pi", async ({
    page,
  }) => {
    await page.getByRole("textbox", { name: "Champ" }).pressSequentially("PI");
    await page.getByRole("button", { name: "Multiplier" }).click();
    await page.getByRole("button", { name: "2" }).click();
    await page.getByRole("button", { name: "Ajouter" }).click();
    await page.getByRole("button", { name: "1", exact: true }).click();
    await page.getByRole("button", { name: "Résoudre" }).click();
    await expect(page.getByRole("main")).toContainText("2π+1≈7,283185307");
  });
});
