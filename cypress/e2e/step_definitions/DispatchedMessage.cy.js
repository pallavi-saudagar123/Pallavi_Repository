const cypress= require("cypress")
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

describe('Checkout Process Test', () => {
  it('should login, add product to cart, checkout, and verify order completion message', () => {
    // Visit the login page
    cy.visit('https://www.saucedemo.com/')

    // Login with correct username and valid password
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Wait for the inventory to load
    cy.get('.inventory_item').should('have.length.above', 0)

    // Add a product to cart
    cy.get('.btn_inventory').first().click()

    // Navigate to the cart page
    cy.get('.shopping_cart_link').click()

    // Click on checkout button
    cy.get('#checkout').click()

    // Fill in all required information
    cy.get('#first-name').type('kelly')
    cy.get('#last-name').type('rax')
    cy.get('#postal-code').type('8888')

    // Click on continue button
    cy.get('#continue').click()

    // Complete checkout
    cy.get('#finish').click()

    // Verify checkout completion message
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')

    // Verify order dispatched message
    cy.get('.complete-text').should('contain', 'Your order has been dispatched')
  })
})
