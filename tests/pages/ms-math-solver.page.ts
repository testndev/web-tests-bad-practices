import { Page, Locator } from "@playwright/test";

export default class MathSolverPage {
  constructor(public page: Page) {}

  async goto(): Promise<MathSolverPage> {
    await this.page.goto("https://mathsolver.microsoft.com/en");
    return this;
  }

  calculatorButton(name: string | number): Locator {
    return this.page.getByRole("button", {
      name: name.toString(),
      exact: true,
    });
  }

  get calcInput(): Locator {
    return this.page.getByRole("textbox", { name: "Math input field" });
  }

  get answerCard(): Locator {
    return this.page.locator('div[class*="Answer_card__"]');
  }

  visibleAnswerResult(answerName: "Evaluate" | "Factor"): Locator {
    return this.answerCard
      .filter({ hasText: answerName })
      .locator("div.answer");
  }

  hiddenAnswerResult(answerName: "Evaluate" | "Factor"): Locator {
    return this.answerCard
      .filter({ hasText: answerName })
      .locator("div.hidden");
  }

  relatedVideosThumbnail(visible = true): Locator {
    return this.page
      .locator('div[class*="RelatedVideos_thumbnail"]')
      .filter({ visible });
  }
}
