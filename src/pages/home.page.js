import Page from "./page";
import commons from "../commons/commons.json";

class HomePage extends Page {

    get searchBar() { return $(super.getLocatorStringByClassName(commons.homePage.searchBarClassNameString)) }

    searchProduct() {
        super.tap(this.searchBar);
        super.inputText(this.searchBar, 'hats for men');
        browser.pressKeyCode(66);
    }
}
export default new HomePage()