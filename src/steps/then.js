import CartPage from '../pages/cart.page';
import { Then } from 'cucumber';

Then('price and quantity are correct', function () {
    CartPage.checkPriceAndQuantity('2', browser.sharedStore.get('menHatPrice') * 2);
});