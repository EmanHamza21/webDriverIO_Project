import { Given } from '@wdio/cucumber-framework';
import homePage from '../pageobjects/Home.page';

Given(/^user navigates to the Home page$/, async () => {
    await homePage.visit();
});