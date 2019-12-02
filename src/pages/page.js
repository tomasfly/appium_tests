export default class Page {
    //Tap on any element of the application.
    tap(element) {
        this.beforeAnyActionChecks(element);
        element.click();
    }
    //Input text in an element.
    inputText(element,value){
        this.beforeAnyActionChecks(element);
        element.setValue(value);
    }

    //Call this method before any action.
    beforeAnyActionChecks(element){
        element.waitForExist();
        element.waitForEnabled();
    }

    getLocatorStringByResourceIdMatches(patternToMatch){
        return `android=new UiSelector().resourceIdMatches(\".*${patternToMatch}\")`;
    }
    
    getLocatorStringByClassName(className){
        return `android=new UiSelector().className(\"${className}\")`;
    }
}