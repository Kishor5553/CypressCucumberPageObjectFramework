# Cypress Cucumber Framework with Page Object Model

This is a Cypress Cucumber framework that follows the Page Object Model (POM) design pattern, making it a powerful tool for writing and running automated tests for your web applications.

## Installation and Execution

Follow these steps to install and execute the framework:

1. **Install Dependencies**: First, navigate to the project's root directory and install the required dependencies using npm.
   
        npm install

2. **Run Tests**: To run your Cucumber tests using Cypress, use the following command:
        
        npm run test

3. **Generate Test Reports**: To generate test reports for your test runs, run the following command:
        
        npm run generate_report

4. **View Test Reports**: To view the generated test reports in your default web browser, run:
        
        npm run open_report

## Directory Structure

cypress/e2e: Contains Cucumber feature files and corresponding step definitions.

cypress/pages: Houses Page Objects representing web pages and elements.

cypress/support: Includes Cypress-specific support files, commands, and configuration.

cypress/reports: The location of generated test reports.
