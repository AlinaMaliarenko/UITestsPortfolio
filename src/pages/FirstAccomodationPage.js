import BasePage from './BasePage';

export const accPageDestinationCountry = '#accommodation-header span span:nth-child(1) span';
export const accPageHeader = '.acco-header-title h1';
export const accPageTravelDate = 'a.travel-date dd';
const checkPriceButton = '.column.container-details .details div.main .btn--theme--primary';
const bookNowButton = '#offer-receipt-bookbutton';

export default class FirstAccomodationPage extends BasePage {
    getAccomodationPageInfo() {
        let arr = [];
        arr.push(
            $(accPageHeader)
                .getText()
                .replace('s *', 's*'),
            $(accPageDestinationCountry).getText(),
            $(accPageTravelDate)
                .getText()
                .split(' (')[0]
        );
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
