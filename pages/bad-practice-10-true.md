---
layout: default
transition: fade
---

# Bad practice 10

````md magic-move
```ts {*|6|*}{lines:true}
// Example Playwright: bad practice 10 👎
import { test } from '@playwright/test';

test('Github "Sign in" title is visible', async ({ page }) => {
  await page.goto('https://github.com/login');
  await expect(await page.getByText('Sign in to GitHub').isVisible()).toBe(true);
});
```
```ts {*}{lines:true}
// Example Playwright: better 👍
import { test } from '@playwright/test';

test('Github "Sign in" title is visible', async ({ page }) => {
  await page.goto('https://github.com/login');
  await expect(page.getByText('Sign in to GitHub')).toBeVisible();
});
```
````

<v-click>

## 👉 Use web first assertions

Assertions are a way to verify that the expected result and the actual result matched or not. 

By using web first assertions Playwright (or Cypress) will wait until the expected condition is met.

For example, when testing an alert message, a test would click a button that makes a message appear and check that the alert message is there.

If the alert message takes half a second to appear, assertions such as `toBeVisible()` will wait and retry if needed.
 </v-click>

<!--
toto
-->
