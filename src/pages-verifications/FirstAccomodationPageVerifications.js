import BasePageVerifications from './BasePageVerifications';
import {
    accPageHeader,
    accPageDestinationCountry,
    accPagePrice,
    accPageTravelDate,
    accPageMainImage,
    accPagePhotoGallery,
    accPagePriceBarChart,
    accPageSummaryLocation,
    accPageDescription,
    accPageFacilities,
    accPageWeather,
    accPageGoogleMap,
    accPageReviews,
    offerInfoHeader,
    offerInfoButton,
    offerFlight,
    offerStay,
    offerReceipt
} from '../model/Constants';

export default class FirstAccomodationPageVerifications extends BasePageVerifications {
    accPageHeaderLoaded() {
        $(accPageHeader).waitForDisplayed();
        return this;
    }
    accPageCountryLoaded() {
        $(accPageDestinationCountry).waitForDisplayed();
        return this;
    }
    accPagePriceLoaded() {
        $(accPagePrice).waitForDisplayed();
        return this;
    }
    accPageTravelDateLoaded() {
        $(accPageTravelDate).waitForDisplayed();
        return this;
    }
    accPageMainImageLoaded() {
        $(accPageMainImage).waitForDisplayed();
        return this;
    }
    accPagePhotoGalleryLoaded() {
        $(accPagePhotoGallery).waitForDisplayed();
        browser.waitUntil(() => expect($$(accPagePhotoGallery).length).to.equal(3));
        return this;
    }
    accPagePriceBarChartLoaded() {
        $(accPagePriceBarChart).waitForDisplayed();
        return this;
    }
    accPageSummaryLocationLoaded() {
        $(accPageSummaryLocation).waitForDisplayed();
        return this;
    }
    accPageDescriptionLoaded() {
        $(accPageDescription).waitForDisplayed();
        return this;
    }
    accPageFacilitiesLoaded() {
        $(accPageFacilities).waitForDisplayed();
        return this;
    }
    accPageWeatherLoaded() {
        $(accPageWeather).waitForDisplayed();
        return this;
    }
    accPageGoogleMapLoaded() {
        $(accPageGoogleMap).waitForDisplayed();
        return this;
    }
    accPageReviewsLoaded() {
        $(accPageReviews).waitForDisplayed();
        return this;
    }
    accPageElementsLoaded() {
        this.accPageHeaderLoaded()
            .accPageCountryLoaded()
            .accPagePriceLoaded()
            .accPageTravelDateLoaded()
            .accPageMainImageLoaded()
            .accPagePhotoGalleryLoaded()
            .accPagePriceBarChartLoaded()
            .accPageSummaryLocationLoaded()
            .accPageDescriptionLoaded()
            .accPageFacilitiesLoaded()
            .accPageWeatherLoaded()
            .accPageGoogleMapLoaded()
            .accPageReviewsLoaded();

        return this;
    }

    searchAndPageAccInfoMatch(searchAccInfo, accPageInfo) {
        expect(searchAccInfo).to.have.members(accPageInfo);
        return this;
    }
    verifyOfferIsLoaded() {
        $(offerInfoHeader).waitForDisplayed();
        $(offerInfoButton).waitForDisplayed();
        $(offerFlight).waitForDisplayed();
        $(offerStay).waitForDisplayed();
        $(offerReceipt).waitForDisplayed();
        return this;
    }
}
