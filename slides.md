---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://unsplash.com/collections/94734566/slidev
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

# (Cypress / Playwright) Web Tests bad practices

ou comment écrire du mauvais code Cypress / Playwright

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  suivant <carbon:arrow-right />
</div>

 <footer class="absolute bottom-0 left-0 right-0 p-2">présenté par Alain et Alhusaine</footer>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# Intro

We will present some bad practices (and other pitfalls to avoid) while designing and implementing your tests with Cypress or Playwright.

Some points will be specific to these frameworks, others will be common to any testing framework.

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

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

# Bad practice 7

<<< @/tests/07-dependent-tests.spec.ts {*|14,20-23}{lines:true}

---
hideInToc: true
---

# Bad practice 7: dependency between tests

<<< @/tests/07-independent-tests.spec.ts {*|4-6|8-10,12,14|17,20,21,23,25,28,30|33,36,38,40,42|*}{lines:true,maxHeight:'260px' }

<v-clicks>

### 👉 Isolate each of your tests

Tests should not depend on the state of previous tests or test runs to avoid flaky tests. 

Each test should run independently, setting up its own state and cleaning up after itself. This ensures that tests can be run in any order and still pass, which is crucial for reliable test suites.
</v-clicks>


---

# Bad practice 4

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

# Bad practice 9: ???

<<< @/tests/09-repeated.spec.ts {*|5-10,15-20}{lines:true}

---
layout: default
transition: fade
hideInToc: true
---

# Bad practice 9: repeated setup

<<< @/tests/09-not-repeated.spec.ts {*|3-10}{lines:true}

## 👉 Group commons actions in setup

Avoid repeated block of code for setup (`beforeAll()`, `beforeEach()`)

---

# Bad practice 10

<<< @/tests/10-no-web-assertions.spec.ts {*|8}{lines:true}

---
hideInToc: true
---

# Bad practice 10: No web-first assertions

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

# Summary

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
---

# Thank you

<PoweredBySlidev mt-10 />
