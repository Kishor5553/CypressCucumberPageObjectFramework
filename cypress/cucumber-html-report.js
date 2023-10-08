const report = require('multiple-cucumber-html-reporter');
const dayjs = require('dayjs');
const fs = require('fs');
const runInfo = JSON.parse(fs.readFileSync('cypress/reports/json/cucumber-report.json', 'utf8'));

report.generate({
	jsonDir: 'cypress/reports/json',
	reportPath: 'cypress/reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '110'
        },
        device: 'Local machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress Guru99'},
            {label: 'Release', value: '2.2.0'},
            {label: 'Cycle', value: '4.0'},
            {label: 'Execution Start Time', value: dayjs(runInfo['startedTestsAt']).format('YYYY-MM-DD HH:mm:ss.SSS'),},
            {label: 'Execution End Time', value: dayjs(runInfo['endedTestsAt']).format('YYYY-MM-DD HH:mm:ss.SSS'),}
        ]
    }
});