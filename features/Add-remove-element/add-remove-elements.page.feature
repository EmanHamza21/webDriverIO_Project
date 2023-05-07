Feature: Navigate to Add/Remove Elements page

  Background: 
    Given user navigates to the Home page
    And user clicks on Add Remove Elements link

  Scenario: verify navigating to add or remove elemnet page and click on add element
    Then Add Element button should exist
    When user clicks on Add Element button
    Then delete button should exist

  Scenario: verify navigating to add or remove elemnet page and click on delete button
    When user clicks on Add Element button
    And user clicks on delete
    Then delete button should not.exist