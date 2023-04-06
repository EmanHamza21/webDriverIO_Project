import { Given, When, Then } from '@wdio/cucumber-framework';
import AddRemoveElements from '../pageobjects/add-remove-element.page.js';


Given(/^user navigates to the Home page$/, async () => {
    await AddRemoveElements.open()
});

When(/^user clicks on AddRemoveElements$/, async () => {
    AddRemoveElements.clickAddRemoveElementsLink();
});

Then(/^(\w+) title should exists$/, async (pageTitle) => {
    await pageTitle.replace("-"," ");
    await expect(AddRemoveElements.pageTitle).toHaveTextContaining(pageTitle);
});

Then(/^Add-Element button should exists$/, async (buttonName) => {
    await buttonName.replace("-"," ");
    await expect(AddRemoveElements.addButton).toHaveTextContaining(buttonName);
});