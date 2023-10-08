require('./commands');

// app throws some uncaught exception during execution
Cypress.on('uncaught:exception', (err) => {
  return false;
});
