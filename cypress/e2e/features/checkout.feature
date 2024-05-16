Feature: Checkout functionality

  Scenario: Login, add product to cart, and complete checkout
    Given I open the login page
    When I enter a valid username
    And I enter a valid password
    And I click the login button
    Then I should be logged in

    When I add a product to the cart
    And I navigate to the cart page
    And I proceed to checkout
    And I fill in the required information
      | firstName | kelly |
      | lastName  | rax   |
      | zipCode   | 88888 |
    And I complete the checkout
    Then I should see the checkout completion message
    And I should see the order dispatched message
