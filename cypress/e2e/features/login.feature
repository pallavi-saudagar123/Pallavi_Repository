Feature: Login functionality

  Scenario: Login to website with correct username and invalid password
    Given I open the login page
    When I enter a valid username
    And I enter an invalid password
    And I click the login button
    Then I should see a password validation message

