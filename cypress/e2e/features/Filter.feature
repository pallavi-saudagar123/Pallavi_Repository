Feature: Shopping functionality

  Scenario: Login, filter products, add to cart, and verify cart items
    Given I open the login page
    When I enter a valid username
    And I enter a valid password
    And I click the login button
    Then I should be logged in

    When I filter products by price from low to high
    And I add the first listed product to the cart
    And I add the last listed product to the cart
    And I navigate to the cart page
    Then I should see both products' descriptions in the cart
    And I should see both products' prices in the cart