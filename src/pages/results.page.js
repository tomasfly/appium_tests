import { expect } from 'chai';
import Page from "./page";
import commons from "../commons/commons.json"

class ResultsPage extends Page {

    get resultItems() { return $(commons.resultsPage.resultItemsXpath) }

    selectFirstResultItem() {
        super.tap(this.resultItems);
        $("//android.view.View[@resource-id='bylineInfo']").waitForExist(commons.waitForExisTimeout);
        $("//android.view.View[@resource-id='heart-background']").waitForExist(commons.waitForExisTimeout);
    }
}
export default new ResultsPage()