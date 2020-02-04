import BasePageVerifications from './BasePageVerifications';

const bookingSummary = 'main.booking-questions.booking-summary';
const bookingFlightSummary = '.booking-overview-item__flight-summary';
const bookingTravellersSummary = '.booking-overview-item__travellers-summary';
const paymentBlock = '.payment-block';
const toPayButton = '.btn--theme--primary.btn--wide';

export default class BookVacation3StepVerifications extends BasePageVerifications {
    navigationBarProgress(state1, state2, state3) {
        browser.waitUntil(() => expect($('nav ol li:nth-child(1)').getAttribute('class')).to.have.string(state1));
        browser.waitUntil(() => expect($('nav ol li:nth-child(2)').getAttribute('class')).to.have.string(state2));
        browser.waitUntil(() => expect($('nav ol li:nth-child(3)').getAttribute('class')).to.have.string(state3));
        return this;
    }
    bookingSummaryLoaded() {
        $(bookingSummary).waitForDisplayed();
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
    paymentBlockLoaded() {
        $(paymentBlock).waitForDisplayed();
        return this;
    }
    toPayButtonLoaded() {
        $(toPayButton).waitForDisplayed();
        return this;
    }
    thirdStepElementsLoaded() {
        this.navigationBarProgress('completed', 'completed', 'current')
            .bookingSummaryLoaded()
            .bookingFlightSummaryLoaded()
            .bookingTravellersSummaryLoaded()
            .paymentBlockLoaded()
            .toPayButtonLoaded();
        return this;
    }
    pricesMatch(secondStepPrice, thirdStepPrice) {
        expect(secondStepPrice).to.equal(thirdStepPrice);
        return this;
    }
}
