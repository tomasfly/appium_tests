import CartPage from '../pages/cart.page';
import HomePage from '../pages/home.page';
import { Then } from 'cucumber';

Then('price and quantity are correct', function () {
    CartPage.checkPriceAndQuantity('2', browser.sharedStore.get('menHatPrice') * 2);
});

Then('price and quantity are correct after adding second element', function () {
    let menHatSubtotal = browser.sharedStore.get('menHatPrice') * 2;
    let womenHatSubtotal = browser.sharedStore.get('womenHatPrice') * 1;
    let subtotal = Number(menHatSubtotal) + Number(womenHatSubtotal);
    CartPage.checkPriceAndQuantity('3', subtotal);
});

Then('remove 1 item from the first item added', function () {
    CartPage.removeOneItem();
});

Then('price is udpated correctly', function () {
    let menHatSubtotal = browser.sharedStore.get('menHatPrice') * 1;
    let womenHatSubtotal = browser.sharedStore.get('womenHatPrice') * 1;
    let subtotal = Number(menHatSubtotal) + Number(womenHatSubtotal);
    CartPage.checkPriceAndQuantity('2', subtotal);
});