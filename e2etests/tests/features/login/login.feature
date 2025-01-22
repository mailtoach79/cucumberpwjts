Feature: To Test Home page functionality

  Scenario: To Test Login functionality 2
    Given User is on home page
    When User enter login details
    Then Login should be successful
    And Home page should be displayed