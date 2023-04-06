export default class HomePage {

    get AddRemoveElementsLink () {
        return $('//*[@id="content"]/ul/li[2]/a');
    }
    
    open() {
        browser.maximizeWindow();
        browser.deleteCookies();
        return browser.url("https://the-internet.herokuapp.com/")
    }

    clickAddRemoveElementsLink(){
      this.AddRemoveElementsLink.click();
    }
}
