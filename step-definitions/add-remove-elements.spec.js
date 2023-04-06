import { Given, When, Then } from '@wdio/cucumber-framework';
import {expect} from 'chai';
// const { expect } = require('chai');

import HomePage from '../features/pageobjects/home.page.js';
import AddRemoveElements from '../features/pageobjects/add-remove-element.page.js';

const homePage = new HomePage();
const addRemoveElementPage = new AddRemoveElements();

Given(/^user navigates to the Home page$/, async () => {
    await homePage.open()
});

When(/^user clicks on (\w+)$/, async (linkName) => {
    await linkName.replace("-"," ");
    await clickOnLink(linkName);
});

Then(/^(\w+) title should exists$/, async (pageTitle) => {
    await pageTitle.replace("-"," ");
    await expect(addRemoveElementPage.pageTitle).toHaveTextContaining(pageTitle);
});

Then(/^Add-Element button should exists$/, async (buttonName) => {
    await buttonName.replace("-"," ");
    await expect(addRemoveElementPage.addButton).toHaveTextContaining(buttonName);
});


