---
theme: default
css: unocss
colorSchema: dark
background: /assets/first-slide-background.png
title: (Cypress / Playwright) Web Tests bad practices
class: text-center
drawings:
  persist: false
transition: fade
mdc: true
hideInToc: true
---

<h1 class="gradient">Web Tests bad practices</h1>

<h3 class="absolute left-50px top-330px">or how to write bad code "Cypress/Playwright"</h3>

<div>
  <img src="/logo/playwright.svg" class="absolute right-40px top-50px h-64px" />
  <img src="/logo/cypress-white.svg" class="absolute right-140px top-50px h-64px" />
</div>

---
transition: fade-out
---

# Introduction

We will present some bad practices (and other pitfalls to avoid) while designing and implementing your tests with Cypress or Playwright.

We have selected 10 bad practices (of course many more exist).

Each one is illustrated with (executable) code examples, using [Cypress.io](https://www.cypress.io/) or [Playwright](https://playwright.dev/).

Some points will be specific to these frameworks, others will be common to any (Web) testing framework: [WebdriverIO](https://webdriver.io/), [Jest](https://jestjs.io/), [JUnit](https://junit.org/junit5/docs/current/user-guide/)...

<!--
Here is another comment.
-->

---
transition: slide-up
level: 2
hideInToc: true
---

# Table of contents

<Toc text-sm minDepth="1" maxDepth="2" />

---

# Bad practice 1: 👀

<AppliesToAllFrameworks />

````md magic-move`

```ts
import { expect, test } from "@playwright/test";

test("Sign in to GitHub - available from main page 👎", async ({ page }) => {
  await page.goto("https://github.com");
  const signInButton = page.getByRole('link', { name: 'Sign in' });
  await expect(signInButton).toBeVisible();
  await signInButton.click();
});
```

```ts
import { expect, test } from "@playwright/test";

test("Sign in to GitHub - available from main page 👍", async ({ page }) => {
  await page.goto("https://github.com");
  const signInButton = page.getByRole('link', { name: 'Sign in' });
  await expect(signInButton).toBeVisible();
  await signInButton.click();
  await expect(page).toHaveURL(/.*login/);
});
```
````

<v-clicks>

## 👉 Every action should be followed by a verification

A test block should contain one or more actions and verifications.

Last step should be a verification.

</v-clicks>

---
layout: default
transition: fade
---

# Bad practice 2: 🐢

<AppliesToAllFrameworks />

<<< @/tests/02-wait-bad.spec.cy.ts {*|8,17}{lines:true,maxHeight:'390px'}

---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 2: dumb wait

<AppliesToAllFrameworks />

<<< @/tests/02-wait-good.spec.cy.ts {*|6,8|14,15,19}{lines:true,maxHeight:'290px'}

<v-clicks>

## 👉 Use the auto-wait mechanism

Understand and know your tested application (interface). Know what to wait...

Cypress  & Playwright provide intelligent auto-wait mechanisms. Use them instead of hardcoded waits/sleeps.

</v-clicks>

---

# Bad practice 3: ⏭️

<AppliesToAllFrameworks />

<<< @/tests/03-dependent-tests.spec.ts {*|20-24,40|11,14-18}{lines:true,maxHeight:'390px'}

---
hideInToc: true
---

<AppliesToAllFrameworks />

# Bad practice 3: dependency between tests

<<< @/tests/03-independent-tests.spec.ts {*|25-29|14-23}{lines:true,maxHeight:'260px' }

<v-clicks>

### 👉 Isolate each of your tests

Tests should not depend on the state of previous tests or test runs to avoid flaky tests.

Each test should run independently, setting up its own state and cleaning up after itself. This ensures that tests can be run in any order and still pass, which is crucial for reliable test suites.

</v-clicks>

---
layout: default
transition: fade
---

# Bad practice 4: 🍹

<AppliesToAllFrameworks />

<<< @/tests/04-locator-bad.spec.cy.ts {*|7-9}{lines:true}

---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 4: fragile locators

<AppliesToAllFrameworks />

<<< @/tests/04-locator-good.spec.cy.ts {*|7-9}{lines:true}

<v-clicks>

### 👉 Use readable dedicated elements' locators

- Each manipulated element should have its own identifier.
- It should be agnostic from internal implementation, resistant to refactoring.
- Cypress recommends `data-*` attributes for each controlled elements,
whereas Playwright promotes user-oriented locators.

</v-clicks>

---
layout: default
transition: fade
---

# Bad practice 5: ⛓️

<AppliesToCypressOnly />

<<< @/tests/05-chaining-bad.spec.cy.ts {*|7-13}{lines:true}

---
layout: default
transition: fade
hideInToc: true
---

<AppliesToCypressOnly />

# Bad practice 5: too long chaining

<<< @/tests/05-chaining-good.spec.cy.ts {*|7-11}{lines:true}


<v-clicks>

### 👉 Avoid long chaining

- Improve readability of code with split command
- Control sequence of actions and controls
- Use chains when needed

</v-clicks>

---
layout: default
transition: fade
---

# Bad practice 6: 🗄️

<AppliesToAllFrameworks />

<<< @/tests/06-page-object-bad.spec.cy.ts {*|6-13,17-26}{lines:true}

---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 6: repeat business logic

<AppliesToAllFrameworks />
 

<<< @/tests/06-page-object-good.spec.cy.ts {*|7-13,17-26}{lines:true,maxHeight:'390px'}

---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 6: repeat business logic
 
<<< @/tests/pages/coffee-cy.page.ts {*|6,9-23}{lines:true,maxHeight:'260px'}


<v-clicks>

### 👉 Use factorization patterns

Use some design patterns to factorize your code and avoid repeated code.

For example: *Page Object Model*, "Screenplay" pattern, ...

</v-clicks>


---
layout: default
transition: fade
---

# Bad practice 7: 🍱

<AppliesToAllFrameworks />

<<< @/tests/07-fixture-bad.spec.cy.ts {*|7,12,17-21,26-29}{lines:true,maxHeight:'380px'}

---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 7: dataset and Fixture

<AppliesToAllFrameworks />

<<< @/tests/07-fixture-good.spec.cy.ts {*|12,19-26,38-42}{lines:true,maxHeight:'280px' }

<v-clicks>

### 👉 Each test should have it's own fixture

- Reduce the search for when is defined the data by putting it not each test
- reduce the risk to break some tests by editing the data

</v-clicks>

---
layout: default
transition: fade
---

# Bad practice 8: 🔤

<AppliesToAllFrameworks />

<<< @/tests/08-bad-titles.spec.ts {*|7,11,15|19,27|*}{lines:true,maxHeight:'390px'}

---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 8: bad titles

<AppliesToAllFrameworks />

<<< @/tests/08-better-titles.spec.ts {*|7,11,15,19,27|*}{lines:true,maxHeight:'280px'}

<v-clicks>

## 👉 Check the titles of the tests

- The title of each test should be descriptive and meaningful.
- It should clearly indicate what the test is verifying, and be coherent with the test's purpose.
- Avoid using generic titles like "Test 1" or "Test 2".

</v-clicks>

---
layout: default
transition: fade
---

# Bad practice 9: 🏁

<AppliesToAllFrameworks />

<<< @/tests/09-repeated.spec.ts {*|4-7,12-15}{lines:true}

---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 9: repeated setup

<AppliesToAllFrameworks />

<<< @/tests/09-not-repeated.spec.ts {*|2-7}{lines:true}

## 👉 Group commons actions in setup

Avoid repeated block of code for setup.

Place common setup in `beforeAll()` or `beforeEach()` block.



---

# Bad practice 10: 🌐

<AppliesToAllFrameworks />

<<< @/tests/10-no-web-assertions.spec.ts {*|6,7}{lines:true}

---
hideInToc: true
---

# Bad practice 10: No web-first assertions

<AppliesToAllFrameworks />

<<< @/tests/10-web-assertions.spec.ts {*|6}{lines:true}

<v-clicks>

## 👉 Use web first assertions

Assertions are a way to verify that the expected result and the actual result matched or not.

By using web first assertions Playwright (or Cypress) will wait until the expected condition is met.

For example, when testing an alert message, a test would click a button that makes a message appear and check that the alert message is there.

If the alert message takes half a second to appear, assertions such as `toBeVisible()` will wait and retry if needed.

</v-clicks>

---
layout: default
---

# Conclusion

Reminder of presented recommendations:

1. 👀 Every action should be followed by a verification
2. 🐢 Use auto-wait mechanisms provided by frameworks
3. ⏭️ Isolate each of your tests
4. 🍹 Avoid fragile selectors
5. ⛓️ Avoid long chaining (with Cypress)
6. 🍱 Manage mocked dataset with fixtures
7. 🗄️ Regroup repeated business logic (with Page Object and commons steps)
8. 🔤 Use coherent titles
9. 🏁 Regroup repeated setups
10. 🌐 Use Web assertions provided by frameworks


<!--
1. Chaque action devrait être suivie d’une vérification
2. Utiliser les mécanismes d’attente automatique fournis par les outils
3. Isolez chacun de vos tests
4. Évitez les sélecteurs fragiles
5. Évitez le chaînage long (avec Cypress)
6. Gérer le jeu de données simulé avec des fixtures
7. Regrouper la logique métier répétée (avec des Page Object et étapes communes)
8. Utiliser des titres cohérents
9. Regrouper les "setup" répétées
10. Utiliser les assertions Web fournies par les outils

-->

---

# ressources

- https://playwright.dev/docs/best-practices
- https://infinitejs.com/posts/common-playwright-pitfalls-beginners-avoid
- https://christianlydemann.com/the-most-common-cypress-mistakes/
- https://www.browserstack.com/guide/cypress-best-practices
- https://www.checklyhq.com/learn/playwright/assertions/
- https://www.checklyhq.com/learn/playwright/writing-tests/
- https://www.brandonpugh.com/better-way/development-guidelines/testing/good-vs-bad-tests.html

---
layout: end
class: text-center
hideInToc: true
---

# Thank you
