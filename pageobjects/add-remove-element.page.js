import HomePage from './home.page.js';

class AddRemoveElements extends HomePage {
    get pageTitle (){
        return $('//*[@id="content"]/h3');
    }

    get addButton () {
        return $('//*[@id="content"]/div/button');
    }

    get deleteButton(){
        return $('//*[@id="elements"]/button');
    }

    async clickAddElementButton () {
        await this.addButton.click();
    }

    async clickDeleteButton () {
        await this.deleteButton.click();
        
    }

}

export default new AddRemoveElements();