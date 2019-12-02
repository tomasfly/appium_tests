import { Given } from 'cucumber';
import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import CartPage from '../pages/cart.page'

Given('I login', function () {
    LoginPage.login();
});

Given('search for product', function () {
    HomePage.searchProduct();
});

Given('I clean the cart', function () {
    CartPage.checkCart();
});
