import { expect } from 'chai';
import Page from "./page";
import commons from "../commons/commons.json"

class ResultsPage extends Page {

    get resultItems() { return $(commons.resultsPage.resultItemsXpath) }

    selectFirstResultItem() {
        super.tap(this.resultItems);
        //wait for these elements before scrolling in product details
        $("//android.view.View[@resource-id='bylineInfo']").waitForExist(30000);
        $("//android.view.View[@resource-id='heart']").waitForExist(30000);
    }
}
export default new ResultsPage()