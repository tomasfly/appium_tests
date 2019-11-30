import { expect } from 'chai';
import Page from "./page";
import commons from "../commons/commons.json"

class LoginPage extends Page {

    get loginButton() { return browser.$(`android=${commons.loginButton}`) }

    checkLoginButton() {
        this.loginButton.waitForExist();
        expect(this.loginButton.isDisplayed()).to.be.true;
    }

    clickOnLoginButton() {
        super.tap(this.loginButton);
    }

}
export default new LoginPage()