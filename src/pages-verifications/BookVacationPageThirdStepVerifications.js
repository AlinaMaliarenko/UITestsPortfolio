import BasePageVerifications from './BasePageVerifications';
import {
    completeBookingScrollElement,
    bookingSteps,
    bookingHeader,
    bookingComfortIcons,
    bookingSummaryIntro,
    bookingOfferSummary,
    bookingFlightSummary,
    bookingTravellersSummary,
    bookingContacts,
    bookingPriceSummary,
    bookingTermsSummary,
    bookingCommentBox,
    paymentBlock,
    toPayButton
} from '../model/Constants';

export default class BookVacationPageThirdStepVerifications extends BasePageVerifications {
    navigationBarProgress() {
        browser.waitUntil(() => expect($('nav ol li:nth-child(1)').getAttribute('class')).to.have.string('completed'));
        browser.waitUntil(() => expect($('nav ol li:nth-child(2)').getAttribute('class')).to.have.string('completed'));
        browser.waitUntil(() => expect($('nav ol li:nth-child(3)').getAttribute('class')).to.have.string('current'));
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
    completeBookingScrollElementLoaded() {
        $(completeBookingScrollElement).scrollIntoView();
        return this;
    }
    bookingSummaryIntroLoaded() {
        $(bookingSummaryIntro).waitForDisplayed();
        return this;
    }
    bookingOfferSummaryLoaded() {
        $(bookingOfferSummary).waitForDisplayed();
        return this;
    }
    bookingFlightSummaryLoaded() {
        $(bookingFlightSummary).waitForDisplayed();
        return this;
    }
    bookingTravellersSummaryLoaded() {
        $(bookingTravellersSummary).waitForDisplayed();
        return this;
    }
    bookingContactsLoaded() {
        expect($$(bookingContacts).length).to.equal(2);
        return this;
    }
    bookingPriceSummaryLoaded() {
        $(bookingPriceSummary).waitForDisplayed();
        return this;
    }
    bookingTermsSummaryLoaded() {
        $(bookingTermsSummary).waitForDisplayed();
        return this;
    }
    // ?
    bookingCommentBoxLoaded() {
        $(bookingCommentBox).waitForDisplayed();
        return this;
    }
    paymentBlockLoaded() {
        $(paymentBlock).waitForDisplayed();
        return this;
    }
    toPayButtonLoaded() {
        $(toPayButton).waitForDisplayed();
        return this;
    }
    thirdStepElementsLoaded() {
        this.navigationBarProgress()
            .bookingStepsLoaded()
            .bookingHeaderLoaded()
            .bookingComfortIconsLoaded()
            // .completeBookingScrollElementLoaded()
            .bookingSummaryIntroLoaded()
            .bookingOfferSummaryLoaded()
            .bookingFlightSummaryLoaded()
            .bookingTravellersSummaryLoaded()
            .bookingContactsLoaded()
            .bookingPriceSummaryLoaded()
            .bookingTermsSummaryLoaded()
            .bookingCommentBoxLoaded()
            .paymentBlockLoaded()
            .toPayButtonLoaded();
        return this;
    }
    pricesMatch(secondStepPrice, thirdStepPrice) {
        expect(secondStepPrice).to.equal(thirdStepPrice);
        return this;
    }
}
