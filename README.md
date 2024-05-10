# EGTAF
EGTAF created for Easygenerator automation test practice assessment


This project contains automated tests for EG Test Pracice page. It utilizes [Cypress](https://www.cypress.io/) for end-to-end testing.

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Test Data](#test-data)
- [Generating Reports](#generating-reports)
- [Contact](#contact)

## About the Project

This project contains automated tests to verify the functionality of Easy Generator Practice page. It includes tests for [dopdown selection], [frame swicthing], etc.

### Built With

- [Cypress](https://www.cypress.io/)
- [JavaScript](https://www.javascript.com/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js installed
- Visual Studio Code installed

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/RahulRajuPlathottathil/EGTAF.git
2. Install npm packages
   ```sh
   npm install

### Usage

1. Running tests 

   - Run tests in headless mode
   - Clean up directories and files
   - Generate mochawesome report
   ```sh
     npm run test
   ```
   ![alt Test Report Image](DocumentationHelper\RunScript.PNG "Run Script")
2. Open cypress app - Test Runner 
    - This will open the Cypress Test Runner, where you can select and run individual tests or the entire test suite.
   ```sh
     npx cypress open
   
### Tests
The test suite is organized as follows:

* cypress/e2e: This directory contains the test files organized by feature or functionality.
* cypress/support: This directory contains support files like commands, fixtures, and plugins used in the tests.
* cypress/fixtures: This directory contains test data in JSON format
 
![alt text](DocumentationHelper\TestStructure.PNG "Test Structure View")

### Test Data
Test Data
Test data is managed using fixture files located in the cypress/fixtures directory. These fixture files contain JSON data used in the tests. You can create fixture files for different scenarios or test data sets.

![alt Test Data Image](DocumentationHelper\TestData.PNG "Test Data View")

### Generating Reports
Test reports can be generated using Cypress plugins or tools like Mochawesome. Here's how you can change Mochawesome reports configuration in reporter-config.json:

  ``` sh
  {
    "reporterEnabled": "cypress-multi-reporters",
    "mochaJunitReporterReporterOptions": {
      "mochaFile": "cypress/results/junit/results-[hash].xml"
    },
    "reporterOptions": {
        "reporterEnabled":"mochawesome",
        "mochawesomeReporterOptions":{
        "reportDir": "cypress/results/mochawesome",
        "quite":true,
        "overwrite": false,
        "html": false,
        "json": true
        }
      }   
}
```
![alt Test Report Image](DocumentationHelper\ReportStructure.PNG "Report View and Configuration")

![alt Test Report Image](DocumentationHelper\mocha_multiple_TestReport.PNG "html report")

### Contact

📞 Phone: 

✉️ Email: not metioning due to privacy concern , since the given project in public domain