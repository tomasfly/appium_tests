import Page from "./page";
import commons from "../commons/commons.json"

class ResultsPage extends Page {

    get resultItems() { return $(commons.resultsPage.resultItemsXpath) }
    get byLineInfo() { return $(commons.resultsPage.byLineInfoXpath) }

    selectFirstResultItem() {
        super.tap(this.resultItems);
        this.byLineInfo.waitForExist(Number(commons.waitForExisTimeout));
    }
}
export default new ResultsPage()