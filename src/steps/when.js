import { When } from 'cucumber';
import ResultsPage from '../pages/results.page.js';
import ProductPage from '../pages/product.page.js';
import CartPage from '../pages/cart.page';

When('select first result from list', function () {
    ResultsPage.selectFirstResultItem();
    ProductPage.getPrice();
});

When('add 2 items', function () {
    ProductPage.addToCart(2);
});

When('go to cart', function () {
    CartPage.goToCart();
});