/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class HomePage {

    
    open () {
        return browser.url("https://the-internet.herokuapp.com/")
    }

    clickOnLink(linkName){
         linkName.click();
    }
}
