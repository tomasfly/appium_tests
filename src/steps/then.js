import CartPage from '../pages/cart.page';
import HomePage from '../pages/home.page';
import { Then } from 'cucumber';

Then('price and quantity are correct', function () {
    CartPage.checkPriceAndQuantity('2', browser.sharedStore.get('menHatPrice') * 2);
});

Then('price and quantity are correct after adding second element', function () {
    console.log('//TO BE IMPLEMENTED');
});

Then('remove 1 item from the first item added', function () {
    console.log('//TO BE IMPLEMENTED');
});

Then('price is udpated correctly', function () {
    console.log('//TO BE IMPLEMENTED');
});

Then('search for second product', function () {
    HomePage.searchProduct('hats for women');
});