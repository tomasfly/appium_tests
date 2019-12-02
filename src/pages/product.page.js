import { expect } from 'chai';
import Page from "./page";
import commons from "../commons/commons.json"
import Gestures from "../helpers/Gestures";

class ProductPage extends Page {

    getPrice() {        
        // Maybe adding a wait for exist on the gestures function doesnt seem to work. Or it scrolls before it allows you to scroll.
        //browser.pause(20000);
        //checkIfDisplayedScrollDown sometimes scrolls sometimes not. Trying another alternative from Gestures.
        //Gestures methods sometimes work and sometimes not. I am having problems with scroll.
        Gestures.swipeUp(0.5);
        Gestures.checkIfDisplayedWithScrollDown($("//android.view.View[@resource-id='price']").waitForExist(30000), 5);  
        Gestures.checkIfDisplayedWithScrollDown($("//android.view.View[@resource-id='price']/android.view.View/android.view.View[2]").waitForExist(30000), 5);
        let resultado = $("//android.view.View[@resource-id='price']/android.view.View/android.view.View[2]").getText();
        let resultadoArray = resultado.split(/(\s+)/);
        browser.sharedStore.set('menHatPrice', resultadoArray[0].replace(',', '.'));
        console.log(browser.sharedStore.get('menHatPrice'));
    }

    addToCart(quantity) {
        Gestures.checkIfDisplayedWithScrollDown($("//android.view.View[@resource-id='mobileQuantitySelection']/android.view.View"), 5);
        super.tap($("//android.view.View[@resource-id='mobileQuantitySelection']/android.view.View"));

        browser.pause(10000);
        //the drop down button doesnt seem to support waitForExist. So adding pause. The problem seems to be the overlay with the buttons to select quantity.
        $(`//android.view.View[@resource-id='mobileQuantityDropDown_${quantity - 1}']`).waitForExist(30000);
        super.tap($(`//android.view.View[@resource-id='mobileQuantityDropDown_${quantity - 1}']`));
        browser.pause(10000);
        Gestures.checkIfDisplayedWithScrollDown($(`//android.widget.Button[@resource-id='add-to-cart-button']`), 5);
        super.tap($(`//android.widget.Button[@resource-id='add-to-cart-button']`).waitForExist(30000));
        browser.pause(10000);
    }
}
export default new ProductPage()