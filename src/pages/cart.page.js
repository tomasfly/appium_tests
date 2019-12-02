import { expect } from 'chai';
import Page from "./page";

class CartPage extends Page {

    checkCart() {
        //Temporary pause added. WebdriverIo waitForExist function from element doesnt seem to do the work
        browser.pause(7000);
        let productsOnCart = $(super.getLocatorStringByResourceIdMatches('chrome_action_bar_cart_count')).getText();
        if (productsOnCart !== '0') {
            for (let index = 0; index < productsOnCart; index++) {
                this.emptyCart();
            }
        }
        console.log('going to gome');
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
        let subTotalString = $("//android.view.View[@resource-id='sc-proceed-to-checkout-params-form']/android.view.View[3]").getText();
        let subtotal = subTotalString.split(' ')[1].replace(',', '.');
        expect(subtotal).to.be.equal(price);        
    }
}
export default new CartPage()