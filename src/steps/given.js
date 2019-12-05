import { Given } from 'cucumber';
import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import CartPage from '../pages/cart.page'

Given('I login', function () {
    LoginPage.login();
});

Given('search for product {string}', function (searchString) {
    HomePage.searchProduct(searchString);
});

Given('I clean the cart', function () {
    CartPage.checkCart();    
});

Given('I test scroll in elements', function () {    
    CartPage.testScroll();
});