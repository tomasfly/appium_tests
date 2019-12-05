import { When } from 'cucumber';
import ResultsPage from '../pages/results.page.js';
import ProductPage from '../pages/product.page.js';
import CartPage from '../pages/cart.page';

When('select first result from list', function () {
    ResultsPage.selectFirstResultItem();    
});

When('add {int} items and store value in memory with key {string}', function (itemsNumber,keyToStore) {
    console.log('PARAMETERS FOR STEP'+itemsNumber + keyToStore)
    ProductPage.getPrice(keyToStore);
    ProductPage.addToCart(itemsNumber);
});

When('go to cart', function () {
    CartPage.goToCart();
});