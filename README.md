# Web tests bad practices

Some examples of bad practices in writing tests with framework like Cypress or Playwright.

## View

Last version of public presentation is available here: https://testndev.github.io/web-tests-bad-practices.

## Contribute

This presentation uses [Slidev](https://sli.dev/) for animated slides.

The executable tests examples (Cypress and Playwright) are in [`tests`](https://github.com/testndev/web-tests-bad-practices/tree/main/tests) directory.

Create a pull request to propose and collaborate on changes to this repository.

### Prerequisites

You will need [Nodejs](https://nodejs.org/fr) + [pnpm](https://pnpm.io/installation).

Other missing dependencies (slidev, Playwright, Cypress) will be installed with `pnpm install` command.

### Edition

#### Add new executable examples

in [`tests`](./tests) directory, add as many files as needed, at least:
- 1 file with a better solution

#### Add new slide:

Edit the [slides.md](./slides.md) to see the changes.

To start the slide show:
- `pnpm dev`
- visit <http://localhost:3030>

For more information about Slidev: [Documentation](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/resources/showcases)
