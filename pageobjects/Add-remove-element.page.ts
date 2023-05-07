import BasePage from "./Base.page";

class AddRemoveElements extends BasePage {
    protected url = 'add_remove_elements'; 
    protected elementSelector ={
        pageTitle: '//*[@id="content"]/h3',
        addElementBtn: '//*[@id="content"]/div/button',
        deleteBtn: '//*[@id="elements"]/button',
    }

    get pageTitle (){
        return $(this.elementSelector.pageTitle);
    }

    get addElementButton () {
        return $(this.elementSelector.addElementBtn);
    }

    get deleteButton(){
        return $(this.elementSelector.deleteBtn);
    }

    async clickAddElementButton () {
        await this.click(this.elementSelector.addElementBtn);
    }

    async clickDeleteButton () {
        await this.click(this.elementSelector.deleteBtn);
    }

}

export default new AddRemoveElements();