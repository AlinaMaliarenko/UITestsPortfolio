import BasePageVerifications from './BasePageVerifications';
import {
    bookingHeader,
    bookingComfortIcons,
    bookingSteps,
    cancellationInsurance,
    travelInsurance,
    luggage,
    carRental,
    backButton,
    thirdStepButton,
    accomodationPhoto,
    basicSummary,
    summaryAlternator,
    priceSummary
} from '../model/Constants';

export default class BookVacationPageSecondStepVerifications extends BasePageVerifications {
    navigationBarProgress() {
        browser.waitUntil(() => expect($('nav ol li:nth-child(1)').getAttribute('class')).to.have.string('completed'));
        browser.waitUntil(() => expect($('nav ol li:nth-child(2)').getAttribute('class')).to.have.string('current'));
        return this;
    }
    bookingStepsLoaded() {
        browser.waitUntil(() => expect($$(bookingSteps).length).to.equal(3));
        return this;
    }
    bookingHeaderLoaded() {
        $(bookingHeader).waitForDisplayed();
        return this;
    }
    bookingComfortIconsLoaded() {
        $(bookingComfortIcons).waitForDisplayed();
        return this;
    }
    cancellationInsuranceLoaded() {
        $(cancellationInsurance).waitForDisplayed();
        return this;
    }
    travelInsuranceLoaded() {
        $(travelInsurance).waitForDisplayed();
        return this;
    }
    luggageLoaded() {
        $(luggage).waitForDisplayed();
        return this;
    }
    carRentalLoaded() {
        $(carRental).waitForDisplayed();
        return this;
    }
    backButtonLoaded() {
        $(backButton).waitForDisplayed();
        return this;
    }
    thirdStepButtonLoaded() {
        $(thirdStepButton).waitForDisplayed();
        return this;
    }
    accomodationPhotoLoaded() {
        $(accomodationPhoto).waitForDisplayed();
        return this;
    }
    basicSummaryLoaded() {
        $(basicSummary).waitForDisplayed();
        return this;
    }
    summaryAlternatorLoaded() {
        $(summaryAlternator).waitForDisplayed();
        return this;
    }
    priceSummaryLoaded() {
        $(priceSummary).waitForDisplayed();
        return this;
    }

    secondStepElementsLoaded() {
        this.bookingHeaderLoaded()
            .bookingStepsLoaded()
            .navigationBarProgress()
            .bookingComfortIconsLoaded()
            .cancellationInsuranceLoaded()
            .travelInsuranceLoaded()
            .luggageLoaded()
            .carRentalLoaded()
            .backButtonLoaded()
            .thirdStepButtonLoaded()
            .accomodationPhotoLoaded()
            .basicSummaryLoaded()
            .summaryAlternatorLoaded()
            .priceSummaryLoaded();
        return this;
    }
}
