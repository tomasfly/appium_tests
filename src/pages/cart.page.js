import { expect } from 'chai';
import Page from "./page";
import commons from "../commons/commons.json"

class CartPage extends Page {

    testScroll() {
        let elem = $(super.getLocatorStringByResourceIdMatches('mash_web_fragment'));
        super.waitForElement(elem);
        super.swipeUp(elem);
    }

    checkCart() {
        super.waitForElement($(super.getLocatorStringByResourceIdMatches('chrome_action_bar_cart_count')));
        let productsOnCart = $(super.getLocatorStringByResourceIdMatches('chrome_action_bar_cart_count')).getText();
        if (productsOnCart !== '0') {
            for (let index = 0; index < productsOnCart; index++) {
                this.emptyCart();
            }
        }
        super.tap($(super.getLocatorStringByResourceIdMatches('chrome_action_bar_home_logo')));
    }

    emptyCart() {
        super.tap($(super.getLocatorStringByResourceIdMatches('chrome_action_bar_cart_image')));
        try {
            $(this.getLocatorStringByResourceIdMatches('activeCartViewForm')).$(super.getLocatorStringByResourceIdMatches('sc-item-'));
            super.tap($("//android.view.View[@resource-id='activeCartViewForm']//android.widget.Button"));
        }
        catch{
            console.log('No items found for deletion');
        }
    }

    goToCart() {
        super.tap($(super.getLocatorStringByResourceIdMatches('chrome_action_bar_cart_image')));
    }

    checkPriceAndQuantity(quantity, price) {
        expect($(super.getLocatorStringByResourceIdMatches('chrome_action_bar_cart_count')).getText()).to.be.equal(quantity);
        $("//android.view.View[@resource-id='sc-proceed-to-checkout-params-form']/android.view.View[3]").waitForExist(Number(commons.waitForExisTimeout));
        let subTotalString = $("//android.view.View[@resource-id='sc-proceed-to-checkout-params-form']/android.view.View[3]").getText();
        let subtotal = subTotalString.split(' ')[1].replace(',', '.');
        browser.sharedStore.set('partialSubtotal', subtotal);
        expect(subtotal).to.be.equal(price.toString());
        super.tap($(super.getLocatorStringByResourceIdMatches('chrome_action_bar_home_logo')));
    }
}
export default new CartPage()