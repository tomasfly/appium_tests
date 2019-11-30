export default class Page {
    tap(element) {
        element.waitForExist();
        element.click();
    }
    inputText(element,value){
        element.waitForExist();
        element.setValue(value);
    }    
}