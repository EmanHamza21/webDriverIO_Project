Feature: The Internet Guinea Pig Website

  Scenario: As a user, I want to open Add/Remove Elements page

    Given user navigates to the Home page
    When user clicks on Add/Remove-Elements
    Then Add/Remove-Elements title should exists
    And Add-Element button should exists

    