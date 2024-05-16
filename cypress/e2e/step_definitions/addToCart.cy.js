const cypress= require("cypress")


import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the login page', () => {
  cy.visit('https://www.saucedemo.com/');
});

When('I enter a valid username', () => {
  cy.get('[data-test="username"]').type('standard_user');
});

When('I enter a valid password', () => {
  cy.get('[data-test="password"]').type('secret_sauce');
});

When('I click the login button', () => {
  cy.get('[data-test="login-button"]').click();
});

Then('I should be logged in', () => {
  cy.url().should('include', '/inventory.html');
});

When('I filter products by price from low to high', () => {
  cy.get('[data-test="product_sort_container"]').select('lohi');
});

When('I add the first listed product to the cart', () => {
  cy.get('.inventory_item_name ').first().find('[data-test="Sauce Labs Onesie"]').click();
});

When('I add the last listed product to the cart', () => {
  cy.get('.inventory_item').last().find('button').click();
});

When('I navigate to the cart page', () => {
  cy.get('.shopping_cart_link').click();
});

Then('I should see both products\' descriptions in the cart', () => {
  cy.get('.shopping_cart_badge').should('have.length', 2);
  cy.get('.inventory_item_name ').first().find('.Sauce Labs Onesie').should('exist');
  cy.get('.inventory_item_name ').last().find('.Sauce Labs Fleece Jacket').should('exist');
});

Then('I should see both products\' prices in the cart', () => {
  cy.get('.shopping_cart_badge').should('have.length', 2);
  cy.get('.inventory_item_price').first().find('$7.99').should('exist');
  cy.get('.inventory_item_price').last().find('$49.99).should('exist');
});
