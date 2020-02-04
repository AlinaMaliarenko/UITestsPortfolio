import BasePageVerifications from './BasePageVerifications';
import { thirdStepButton } from '../pages/BookVacation2Step';

const mainInfo = 'main.booking-questions';
const bookingSummary = 'aside.booking-summary';
const backButton = '.btn.back';

export default class BookVacation2StepVerifications extends BasePageVerifications {
    navigationBarProgress(state1, state2) {
        browser.waitUntil(() => expect($('nav ol li:nth-child(1)').getAttribute('class')).to.have.string(state1));
        browser.waitUntil(() => expect($('nav ol li:nth-child(2)').getAttribute('class')).to.have.string(state2));
        return this;
    }

    mainInfoLoaded() {
        $(mainInfo).waitForDisplayed();
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
    basicSummaryLoaded() {
        $(bookingSummary).waitForDisplayed();
        return this;
    }

    secondStepElementsLoaded() {
        this.navigationBarProgress('completed', 'current')
            .mainInfoLoaded()
            .backButtonLoaded()
            .thirdStepButtonLoaded()
            .basicSummaryLoaded();
        return this;
    }
}
