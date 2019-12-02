import { expect } from 'chai';
import Page from "./page";
import commons from "../commons/commons.json"

class LoginPage extends Page {

    get loginButton() { return browser.$(super.getLocatorStringByResourceIdMatches(commons.loginPage.loginButtonResourceId)) }
    get signInRadioButton() { return browser.$(super.getLocatorStringByResourceIdMatches(commons.loginPage.signInRadioButtonResourceId)) }
    get emailInput() { return browser.$(super.getLocatorStringByResourceIdMatches(commons.loginPage.emailInputResourceId)) }
    get continueButton() { return browser.$(super.getLocatorStringByResourceIdMatches(commons.loginPage.continueButtonResourceId)) }
    get passwordInput() { return browser.$(super.getLocatorStringByResourceIdMatches(commons.loginPage.passwordInputResourceId)) }
    get signinSubmitButton() { return browser.$(super.getLocatorStringByResourceIdMatches(commons.loginPage.signInSubmitButtonResourceId)) }

    login() {
        super.tap(this.loginButton);
        super.tap(this.signInRadioButton);
        super.inputText(this.emailInput, commons.credentials.username);
        super.tap(this.continueButton);
        super.inputText(this.passwordInput, commons.credentials.password);
        super.tap(this.signinSubmitButton);
    }
}
export default new LoginPage()