import Page from "./page";
import commons from "../commons/commons.json";

class HomePage extends Page {

    get searchBar() { return $(super.getLocatorStringByClassName(commons.homePage.searchBarClassNameString)) }

    searchProduct(searchString) {
        super.tap(this.searchBar);
        super.inputText(this.searchBar, searchString);
        browser.pressKeyCode(66);
    }
}
export default new HomePage()