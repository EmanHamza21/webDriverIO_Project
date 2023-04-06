import HomePage from './home.page.js';

class AddRemoveElements extends HomePage {
    get pageTitle (){
        return $('//*[@id="content"]/h3');
    }

    get addButton () {
        return $('//*[@id="content"]/div/button');
    }

    async clickAddElementButton () {
        await this.addButton.click();
    }

}

export default new AddRemoveElements();