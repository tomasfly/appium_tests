import { expect } from 'chai';
import Page from "./page";
import commons from "../commons/commons.json"

class CartPage extends Page {

    get chromeActionBarCartCount() { return $(super.getLocatorStringByResourceIdMatches(commons.cartPage.chromeActionBarCartCount)) }
    get homeLogo() { return $(super.getLocatorStringByResourceIdMatches(commons.cartPage.homeLogo)) }
    get cartImage() { return $(super.getLocatorStringByResourceIdMatches(commons.cartPage.cartImage)) }
    get activeCartViewForm() { return $(super.getLocatorStringByResourceIdMatches(commons.cartPage.activeCartViewForm)) }
    get scItem() { return $(super.getLocatorStringByResourceIdMatches(commons.cartPage.scItem)) }
    get deleteButton() { return $(commons.cartPage.deleteButtonXpath) }
    get subtotal() { return $(commons.cartPage.subtotalXpath) }
    get webViewContainer() { return $(super.getLocatorStringByResourceIdMatches(commons.cartPage.webViewContainer)) }
    get removeItemButton() { return $(commons.cartPage.removeItemButton) }

    checkCart() {
        super.waitForElement(this.chromeActionBarCartCount);
        let productsOnCart = this.chromeActionBarCartCount.getText();
        if (productsOnCart !== '0') {
            for (let index = 0; index < productsOnCart; index++) {
                this.emptyCart();
            }
        }
        super.tap(this.homeLogo);
    }

    emptyCart() {
        super.tap(this.cartImage);
        try {
            $(this.getLocatorStringByResourceIdMatches(commons.cartPage.activeCartViewForm)).$(super.getLocatorStringByResourceIdMatches(commons.cartPage.scItem));
            super.tap(this.deleteButton);
        }
        catch{
            console.log('No items found for deletion');
        }
    }

    goToCart() {
        super.tap(this.cartImage);
    }

    checkPriceAndQuantity(quantity, price) {
        let priceTwoDecimals = price.toFixed(2);
        expect(this.chromeActionBarCartCount.getText()).to.be.equal(quantity);
        this.subtotal.waitForExist(Number(commons.waitForExisTimeout));
        let subTotalString = this.subtotal.getText();
        let subtotal = subTotalString.split(' ')[1].replace(',', '.');
        browser.sharedStore.set('partialSubtotal', subtotal);
        expect(subtotal).to.be.equal(priceTwoDecimals.toString());
        super.tap(this.homeLogo);
    }

    removeOneItem() {
        super.swipeUntilElementDisplayed(commons.cartPage.removeItemButton);
        super.tap(this.removeItemButton);
    }
}
export default new CartPage()