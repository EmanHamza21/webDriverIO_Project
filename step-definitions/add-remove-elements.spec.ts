import { When, Then } from '@wdio/cucumber-framework';
import addRemoveElementsPage from '../pageobjects/Add-remove-element.page';
import homePage from '../pageobjects/Home.page';

When(/^user clicks on Add Remove Elements link$/, async () => {
   await homePage.clickAddRemoveElementsLink();
});

When(/^user clicks on Add Element button$/, async() => {
	await addRemoveElementsPage.clickAddElementButton();
});

When(/^user clicks on delete$/, async() => {
	await addRemoveElementsPage.clickDeleteButton();
});

Then(/^Add Element button should exist$/,async () => {
	await expect(addRemoveElementsPage.addElementButton).toBeExisting();
});

Then(/^delete button should "([^"]*)"$/, async (existence) => {
	if(existence == 'exist'){
        await expect(addRemoveElementsPage.deleteButton).toBeExisting();
    } else{
        await expect(addRemoveElementsPage.deleteButton).not.toBeExisting();
    }
});
