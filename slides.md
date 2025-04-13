---
# You can also start simply with 'default'
theme: default
css: unocss
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /assets/first-slide-background.png
# some information about your slides (markdown enabled)
title: (Cypress / Playwright) Web Tests bad practices
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
# seoMeta:
#  ogImage: https://cover.sli.dev
---

<h1 class="gradient">Web Tests bad practices</h1>

<h3 class="absolute left-50px top-330px">ou comment écrire du mauvais code Cypress / Playwright</h3>

<div>
  <img src="/logo/playwright.svg" class="absolute right-40px top-50px h-64px" />
  <img src="/logo/cypress-white.svg" class="absolute right-140px top-50px h-64px" />
</div>

<footer class="absolute bottom-25px right-40px p-2">Alain BEGEY et Alhusaine NEMER</footer>

---
transition: fade-out
---

# Intro

We will present some bad practices (and other pitfalls to avoid) while designing and implementing your tests with Cypress or Playwright.

Some points will be specific to these frameworks, others will be common to any testing framework.

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

<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

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


<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

<<< @/tests/wait-bad.spec.cy.ts {*|11,23}{lines:true,maxHeight:'390px'}

---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 2: dumb wait


<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

<<< @/tests/wait-good.spec.cy.ts {*|12-13,19-20,27}{lines:true,maxHeight:'390px'}

---

# Bad practice 3: ⏭️

<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

<<< @/tests/07-dependent-tests.spec.ts {*|14,20-23}{lines:true,maxHeight:'390px'}

---
hideInToc: true
---

<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

# Bad practice 3: dependency between tests

<<< @/tests/07-independent-tests.spec.ts {*|4-6|8-10,12,14|17,20,21,23,25,28,30|33,36,38,40,42|*}{lines:true,maxHeight:'260px' }

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


<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

<<< @/tests/locator-bad.spec.cy.ts {*|8,9,11}{lines:true}

---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 4: fragile locators

<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

<<< @/tests/locator-good.spec.cy.ts {*|8,9,11}{lines:true}

---
layout: default
transition: fade
---

# Bad practice 5: ⛓️


<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/cypress-white.svg"/></div>
</div>

... **TO BE COMPLETED** ...


---
layout: default
transition: fade
hideInToc: true
---


<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/cypress-white.svg"/></div>
</div>


# Bad practice 5: too long chaining


... **TO BE COMPLETED** ...


---
layout: default
transition: fade
---

# Bad practice 6: 🍱

<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

... **TO BE COMPLETED** ...


---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 6: dataset and Fixture
 
<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

... **TO BE COMPLETED** ...
 

---
layout: default
transition: fade
---

# Bad practice 7: 🗄️


<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

<<< @/tests/page-object-bad.spec.cy.ts {*|6-11,15-20}{lines:true}

---
layout: two-cols-header
transition: fade
hideInToc: true
---

# Bad practice 7: repeat business logic


<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

::left::

<<< @/tests/page-object-good.spec.cy.ts {*|7-12,16-21}{lines:true,maxHeight:'390px'}

::right::

<<< @/tests/pages/dashboard.page.ts {*|6,10,14,18}{lines:true,maxHeight:'390px'}




---
layout: default
transition: fade
---

# Bad practice 8: 🔤

<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>


<<< @/tests/08-bad-titles.spec.ts {*|15,18|27,28,31|44}{lines:true,maxHeight:'390px'}


---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 8: bad titles
 
<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>


<<< @/tests/08-better-titles.spec.ts {*|15,18|27,28,31|44}{lines:true,maxHeight:'300px'}

<v-clicks>

## 👉 Check the title of the tests

- The title of the test should be descriptive and meaningful.
- It should clearly indicate what the test is verifying, and be coherent with the test's purpose.
- Avoid using generic titles like "Test 1" or "Test 2".

</v-clicks>

---
layout: default
transition: fade
---

# Bad practice 9: 🏁


<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

<<< @/tests/09-repeated.spec.ts {*|5-10,15-20}{lines:true}

---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 9: repeated setup


<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

<<< @/tests/09-not-repeated.spec.ts {*|3-10}{lines:true}

## 👉 Group commons actions in setup

Avoid repeated block of code for setup (`beforeAll()`, `beforeEach()`)

---

# Bad practice 10: 🌐


<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>


<<< @/tests/10-no-web-assertions.spec.ts {*|8}{lines:true}

---
hideInToc: true
---

# Bad practice 10: No web-first assertions


<div class="applies-to">
  applies to:
  <div class="flex items-right"><img src="/logo/playwright.svg" /><img src="/logo/cypress-white.svg"/></div>
</div>

<<< @/tests/10-web-assertions.spec.ts {*|8}{lines:true}

<v-clicks>

## 👉 Use web first assertions

Assertions are a way to verify that the expected result and the actual result matched or not. 

By using web first assertions Playwright (or Cypress) will wait until the expected condition is met.

For example, when testing an alert message, a test would click a button that makes a message appear and check that the alert message is there.

If the alert message takes half a second to appear, assertions such as `toBeVisible()` will wait and retry if needed.
</v-clicks>

<!--
toto
-->


---
layout: default
class: text-left
---

# Conclusion

Common:
- fragile selectors
- Hard breaks 
- too weak assertions
- All code in the same file
- Code duplication in multiple files
- Same dataset shared with multiple tests
- Tests dependent on each other
- Tests dependent on external elements to test subject
- `toBe(true)` or `should("be.true")` for everything

Cypress: 
- Too long chaining

<!--
- des sélecteurs fragiles
- Des pauses en dur
- Du chainage trop long
- Assertions trop faibles
- Tout le code dans le même fichier
- Duplication de code dans plusieurs fichiers
- Un jeu de données commun à plusieurs tests
- Des tests dépendants les uns des autres
- Des tests dépendants d'éléments externes au sujet de test
- `toBe(true)` ou should("be.true") pour tout --> utiliser les assertion Web adaptées
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
layout: center
class: text-center
hideInToc: true
---

# Thank you

<PoweredBySlidev mt-10 />
