import { Given, When, Then } from '@wdio/cucumber-framework';
import AddRemoveElements from '../pageobjects/add-remove-element.page.js';


Given(/^user navigates to the Home page$/, async () => {
    await AddRemoveElements.open()
});

When(/^user clicks on AddRemoveElements$/, async () => {
    AddRemoveElements.clickAddRemoveElementsLink();
});


When(/^user clicks on (.+)$/, async (buttonName) => {
    if(buttonName == 'Add Element'){
        await AddRemoveElements.clickAddElementButton();
    } else{
        await AddRemoveElements.clickDeleteButton();
    }
});


// Then(/^(.+) title should (.+)$/, async (pageTitle,existence) => {
//     await expect(AddRemoveElements.pageTitle).toHaveTextContaining(pageTitle);
// });

Then(/^(.+) button should (.+)$/, async (buttonName,existence) => {
    if(existence == 'exist'){
        await expect(AddRemoveElements.buttonName).toBeExisting;
        await expect(AddRemoveElements.addButton).toHaveTextContaining(buttonName);
    } else{
        await expect(AddRemoveElements.addButton).toHaveBeenCalledWith.toBeExisting;
    }
});


// When(/^user clicks on <buttonName>$/, () => {
// 	return true;
// });

// Then(/^<buttonName> button should <existence2>$/, () => {
// 	return true;
// });

after(()=>{
    
})

// scenario
When(/^login with username carrierchris and password Password@123$/, () => {

});

When(/^login with username (-?\w+) and password (-?\w+)$/, (userName,password) => {
    loginPage.treatyLoginPage(userName,password);
});

// scenario outline
When(/^login with username <userName> and password <password>$/, () => {

});

When(/^login with username (.+) and password (.+)$/, (userName, password) => {

});


