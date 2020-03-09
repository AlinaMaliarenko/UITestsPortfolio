import BasePage from './BasePage';
import Element from '../components/Element';

export const accomodationPageDestinationCountry = '#accommodation-header span span:nth-child(1) span';
export const accomodationPageHeader = '.acco-header-title h1';
export const accomodationPageTravelDate = 'a.travel-date dd';

const checkPriceButton = '.column.container-details .details div.main .btn--theme--primary';
const bookNowButton = '#offer-receipt-bookbutton';
const saveTripButton = '.save-acco';
const savedTripsButton = '#header-heart';

export default class AccomodationPage extends BasePage {
    getAccomodationInfo() {
        let header = Element.of(accomodationPageHeader).getText();
        header = header.substring(0, header.indexOf('*')).trim();

        const country = Element.of(accomodationPageDestinationCountry).getText();

        let date = Element.of(accomodationPageTravelDate).getText();

        return [header, country, date];
    }

    clickCheckPrice() {
        Element.of(checkPriceButton).click();
        return this;
    }
    clickBookNow() {
        Element.of(bookNowButton).click();
    }

    clickSaveTrip() {
        Element.of(saveTripButton).click();
    }

    goToSavedTrips() {
        Element.of(savedTripsButton).click();
    }
}
