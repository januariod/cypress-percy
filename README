# _Visual-Regression_ testing with **Cypress** and **Percy**

[![ci](https://github.com/januariod/cypress-percy/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/januariod/cypress-percy/actions/workflows/ci.yml)

Sample project to demonstrate visual regression testing written with Cypress and Percy running on a CI service.

## Pre-requirements

To run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.26.2` while writing this doc)
- [nodejs](https://nodejs.org/en/) (I've used version `14.17.3` while writing this doc)
- NPM (I've used version `6.14.13` while writing this doc)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/) (I've used version `92.0.4515.131` while writing this doc)

**Note:** When installing nodejs, NPM is automatically installed too.

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Exporting the project token created in Percy.io

Export your project token (available in Percy's _dashboard_) as an environment variable. See the examples below for Windows and Unix systems (Mac and Linux).

```
# Windows
$ set PERCY_TOKEN=<your token here>

# Unix
$ export PERCY_TOKEN=<your token here>
```

> Source: https://docs.percy.io/docs/cypress

## Running the tests

In this project, you can run tests in interactive and headless modes.
### Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode.

### Interactive mode

Run `npm run cy:open` to open the Cypress Test Runner to run tests in interactive mode.

### CI mode

Run `npm run cy:e2e` to run all tests in headless mode on cy server.

___

Made with ❤️ by [Daniel Januario](https://github.com/januariod).

Tks to @wlsf82 and TAT School :love_you_gesture:
