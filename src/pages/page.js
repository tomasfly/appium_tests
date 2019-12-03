import commons from "../commons/commons.json"

export default class Page {
    tap(element) {
        this.beforeAnyActionChecks(element);
        element.click();
    }
    inputText(element, value) {
        this.beforeAnyActionChecks(element);
        element.setValue(value);
    }

    beforeAnyActionChecks(element) {
        element.waitForExist(Number(commons.waitForExisTimeout));
        element.waitForEnabled();
    }

    getLocatorStringByResourceIdMatches(patternToMatch) {
        return `android=new UiSelector().resourceIdMatches(\".*${patternToMatch}\")`;
    }

    getLocatorStringByClassName(className) {
        return `android=new UiSelector().className(\"${className}\")`;
    }

    waitForElement(element) {
        element.waitForExist(Number(commons.waitForExisTimeout));
        element.isExisting();
        element.isEnabled();
    }

    swipeUp(element, x, y) {
        element.touchAction([
            'press',
            { action: 'moveTo', x: x, y: y },
            'release'
        ]);
    }
    
    goToHome(){
        tap($(super.getLocatorStringByResourceIdMatches('chrome_action_bar_home_logo')));
    }

    lookForElement(elementString) {
        let elem = $(elementString);
        let isExisting = elem.isExisting();
        return isExisting;
    };
}