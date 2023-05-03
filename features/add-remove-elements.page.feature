Feature: Navigate to Add/Remove Elements page

  Scenario Outline: As a user, I want to open the page and click on add element/delete button
    Given user navigates to the Home page
    When user clicks on AddRemoveElements
    Then <buttonName> button should <existence1>
    When user clicks on <button>
    Then <buttonName> button should <existence1>
    When user clicks on <buttonName>
    Then <buttonName> button should <existence2>

    Examples: 
      | button      | buttonName | existence1 | existence2 |
      | Add Element | Delete     | exist      | not.exist  |

  Scenario Outline: As a user, I want to open the page and click on add element/delete button
    Given user navigates to the Home page
    When user clicks on <pageName>
    Then <buttonName> button should <existence1>
    When user clicks on <button>
    Then <buttonName> button should <existence1>
    When user clicks on <buttonName>
    Then <buttonName> button should <existence2>

    Examples: 
      | button      | buttonName  | existence1 | existence2 |
      | Add Element | Delete      | exist      | not.exist  |
      | Delete      | Add Element | exist      | not.exist  |

  Scenario Outline: As a user, I want to check the sidebar menu
    Given Open application url
    When login with username <userName> and password <password>
    Then Verify logged in Broker user name is displayed at portal details section
    Then Verify sidebar content
    Then Click on Premiums tab
    Then Verify <content> on Premiums page

    Examples: 
      | userName     | password     | content |
      | carrierchris | Password@123 |         |
      | broker       | Password@123 |         |

  Scenario: As a user, I want to check the sidebar menu
    Given Open application url
    When login with username carrierchris and password Password@123
    Then Verify logged in Broker user name is displayed at portal details section
    Then Verify sidebar content
    Then Click on Premiums tab
    Then Verify content on Premiums page

  Scenario: As a user, I want to check the sidebar menu
    Given Open application url
    When login with username broker and password Password@123
    Then Verify logged in Broker user name is displayed at portal details section
    Then Verify sidebar content
    Then Click on Premiums tab
    Then Verify content on Premiums page
