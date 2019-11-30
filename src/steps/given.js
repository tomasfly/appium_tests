import { Given } from 'cucumber';
import LoginPage from '../pages/login.page';

Given('I launch the app', function () {
    LoginPage.checkLoginButton();
    LoginPage.clickOnLoginButton();
});

