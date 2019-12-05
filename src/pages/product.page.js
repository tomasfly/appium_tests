import Page from "./page";
import commons from "../commons/commons.json";
import { expect } from 'chai';

class ProductPage extends Page {

    get price() { return $(commons.productPage.priceXpath) }
    get dpElement() { return $(super.getLocatorStringByResourceIdMatches(commons.productPage.dpElement)) }
    get mobileQuantitySelection() { return $(commons.productPage.quantitySelectionXpath) }
    get addToCartButton() { return $(super.getLocatorStringByResourceIdMatches(commons.productPage.addToCartButton)) }

    getPrice(storedKeyValue) {
        super.waitForElement(this.dpElement);
        let scrollingElement = this.dpElement;
        while (!super.lookForElement(commons.productPage.priceXpath)) {
            super.swipeUpScreen();
        }
        let resultado = this.price.getText();
        let resultadoArray = resultado.split(/(\s+)/);
        browser.sharedStore.set(storedKeyValue, resultadoArray[0].replace(',', '.'));
    }

    addToCart(quantity) {
        let scrollingElement = $(super.getLocatorStringByResourceIdMatches('dp'));
        while (!super.lookForElement(commons.productPage.quantitySelectionXpath)) {
            super.swipeUpScreen();
        }
        super.tap(this.mobileQuantitySelection);
        $(`${commons.productPage.quantityPartialXpath}${quantity - 1}']`).waitForExist(Number(commons.waitForExisTimeout));
        super.tap($(`${commons.productPage.quantityPartialXpath}${quantity - 1}']`));
        while (!super.lookForElement(super.getLocatorStringByResourceIdMatches(commons.productPage.addToCartButton))) {
            super.swipeUpScreen();
        }
        super.swipeUpScreen();
        super.tap(this.addToCartButton);
    }
}
export default new ProductPage()