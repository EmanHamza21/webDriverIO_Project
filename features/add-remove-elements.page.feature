Feature: The Internet Guinea Pig Website

  Scenario: As a user, I want to open Add/Remove Elements page

    Given user navigates to the Home page
    When user clicks on AddRemoveElements
    Then AddRemoveElements title should exists
    And AddElement button should exists



    