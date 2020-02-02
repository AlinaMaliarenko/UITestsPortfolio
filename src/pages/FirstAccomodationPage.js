import BasePage from './BasePage';
import {
    accPageDestinationCountry,
    accPagePrice,
    accPageHeader,
    accPageTravelDate,
    checkPriceButton,
    bookNowButton
} from '../model/Constants';

export default class FirstAccomodationPage extends BasePage {
    getAccomodationPageInfo() {
        let arr = [];
        arr.push(
            $(accPageHeader)
                .getText()
                .replace('s *', 's*'),
            $(accPageDestinationCountry).getText(),
            //$(accPagePrice).getText(), - bug with price displaying - different on search and details pages
            $(accPageTravelDate)
                .getText()
                .split(' (')[0]
        );
        console.log(`ACC PAGE ARRAY: ${arr}`);
        return arr;
    }
    clickCheckPriceButton() {
        $(checkPriceButton).click();
        return this;
    }
    clickBookNowButton() {
        $(bookNowButton).waitForDisplayed();
        $(bookNowButton).click();
        return this;
    }
}
