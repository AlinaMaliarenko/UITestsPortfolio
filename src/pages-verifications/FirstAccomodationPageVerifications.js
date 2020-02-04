import BasePageVerifications from './BasePageVerifications';
import { accPageDestinationCountry, accPageHeader } from '../pages/FirstAccomodationPage';
const accPageMainImage = '.container-image';
const accPagePhotoGallery = '.film-strip-photo-gallery';
const offerInfoHeader = '#summary-location .offer-information h4';
const offerInfoButton = '.summary-offer__information-specs .btn--compact.infobutton';
const offerFlight = '.offer-info.offer-flight';
const offerStay = '.offer-info.offer-stay';
const offerReceipt = '#offer-receipt';
const mainInfoBlock = 'div.details';

export default class FirstAccomodationPageVerifications extends BasePageVerifications {
    accPageHeaderLoaded() {
        $(accPageHeader).waitForDisplayed();
        return this;
    }
    accPageCountryLoaded() {
        $(accPageDestinationCountry).waitForDisplayed();
        return this;
    }
    mainInfoBlockLoaded() {
        $(mainInfoBlock).waitForDisplayed();
        return this;
    }
    accPageMainImageLoaded() {
        $(accPageMainImage).waitForDisplayed();
        return this;
    }
    accPagePhotoGalleryLoaded() {
        $(accPagePhotoGallery).waitForDisplayed();
        return this;
    }
    accPageElementsLoaded() {
        this.accPageHeaderLoaded()
            .accPageCountryLoaded()
            .accPageMainImageLoaded()
            .accPagePhotoGalleryLoaded();
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
