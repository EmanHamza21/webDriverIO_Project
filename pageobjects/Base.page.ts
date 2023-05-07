import { String } from 'typescript-string-operations';

export default abstract class BasePage {
  protected url: string ;
  protected  elementSelector : {[key: string]: string};

  public async visit(extraParam: string = ''): Promise<void> {
    await browser.url(String.Format(this.url, extraParam));
  }

  public async click(locator) {
  await $(locator).click();
  }
 
  public async addValueInputField(fieldName, value){
    
  }

  

    
}
