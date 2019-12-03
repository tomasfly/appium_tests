import Page from "./page";
import commons from "../commons/commons.json"

class ProductPage extends Page {

    getPrice() {
        super.waitForElement($(super.getLocatorStringByResourceIdMatches('dp')));
        let scrollingElement = $(super.getLocatorStringByResourceIdMatches('dp'));
        while (!super.lookForElement("//android.view.View[@resource-id='price']/android.view.View/android.view.View[2]")) {
            super.swipeUp(scrollingElement, 200, 300);
        }
        let resultado = $("//android.view.View[@resource-id='price']/android.view.View/android.view.View[2]").getText();
        let resultadoArray = resultado.split(/(\s+)/);
        browser.sharedStore.set('menHatPrice', resultadoArray[0].replace(',', '.'));
    }

    addToCart(quantity) {
        let scrollingElement = $(super.getLocatorStringByResourceIdMatches('dp'));
        while (!super.lookForElement("//android.view.View[@resource-id='mobileQuantitySelection']/android.view.View")) {
            super.swipeUp(scrollingElement, 200, 300);
        }
        super.tap($("//android.view.View[@resource-id='mobileQuantitySelection']/android.view.View"));
        $(`//android.view.View[@resource-id='mobileQuantityDropDown_${quantity - 1}']`).waitForExist(Number(commons.waitForExisTimeout));
        super.tap($(`//android.view.View[@resource-id='mobileQuantityDropDown_${quantity - 1}']`));
        while (!super.lookForElement(super.getLocatorStringByResourceIdMatches('add-to-cart-button'))) {
            super.swipeUp(scrollingElement, 200, 300);
        }
        super.swipeUp(scrollingElement, 200, 300);
        super.tap($(super.getLocatorStringByResourceIdMatches('add-to-cart-button')));
    }
}
export default new ProductPage()