import BasePage from "./Base.page";

class HomePage extends BasePage {
    protected elementSelector ={
        addRemoveElementsLink: '//*[@id="content"]/ul/li[2]/a',   
    }

    
    async clickAddRemoveElementsLink(){
        await this.click(this.elementSelector.addRemoveElementsLink);
    }
}

export default new HomePage();