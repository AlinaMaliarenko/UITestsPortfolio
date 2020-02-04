import BasePageVerifications from './BasePageVerifications';
import { secondStepButton } from '../pages/BookVacation1Step';
export const bookingHeader = '.booking-header h1';
export const bookingComfortIcons = '.booking-comfort.comfort-icons';
export const bookingSteps = 'nav > ol > li';
const bookingInfo = 'main#booking-questions';
const bookingSummary = '.booking-summary';

export default class BookVacation1StepVerifications extends BasePageVerifications {
    navigationBarProgress(state) {
        browser.waitUntil(() => expect($('nav ol li:nth-child(1)').getAttribute('class')).to.have.string(state));
        return this;
    }
    bookingInfoLoaded() {
        $(bookingInfo).waitForDisplayed();
        return this;
    }
    bookingSummaryLoaded() {
        $(bookingSummary).waitForDisplayed();
        return this;
    }
    secondStepButtonLoaded() {
        $(secondStepButton).waitForDisplayed();
        return this;
    }

    firstStepElementsLoaded() {
        this.navigationBarProgress('current')
            .bookingInfoLoaded()
            .bookingSummaryLoaded()
            .secondStepButtonLoaded();
        return this;
    }
}
