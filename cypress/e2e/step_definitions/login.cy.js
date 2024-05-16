const cypress= require("cypress")

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the login page', () => {
  cy.visit('https://www.saucedemo.com/');
});

When('I enter a valid username', () => {
  cy.get('#user-name"').type('kelly');
});

When('I enter an invalid password', () => {
  cy.get('#password').type('kelly@123');
});

When('I click the login button', () => {
  cy.get('#login-button').click();
});

Then('I should see a password validation message', () => {
  cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
});
