# API Testing Project using Playwright

This project is designed to test the API of the [Swagger Petstore](https://petstore.swagger.io/#/). It covers various scenarios including authentication and other functional tests.

## Prerequisites

- Node.js (v14 or higher)
- NPM (v6 or higher)


## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the required npm packages:
    ```sh
    npm install
    ```

3. Install Playwright browsers:
    ```sh
    npx playwright install chromium
    ```

## Running Tests

The following npm scripts are available to run tests:

- Run all tests:
    ```sh
    npm test
    ```

- Run sanity tests:
    ```sh
    npm run sanity
    ```

- Run integration tests:
    ```sh
    npm run integration
    ```

## Test Report

After running the tests, an HTML report is generated under the `playwright-report` directory. To view the report:

1. Open the `playwright-report` directory.
2. Open the `index.html` file in a web browser.

## Project Structure

- `tests/`: Contains the test scripts.
- `playwright-report/`: Contains the generated test reports.
- `playwright.config.js`: Configuration file for Playwright.

## Author

Ajinkya Akotkar
