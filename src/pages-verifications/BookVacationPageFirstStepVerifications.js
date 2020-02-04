import BasePageVerifications from './BasePageVerifications';
import {
    bookingHeader,
    bookingComfortIcons,
    bookingSteps,
    bookingRoom,
    passengerContactInfo,
    emergencyContactInfo,
    bookingSummary,
    secondStepButton
} from '../model/Constants';

export default class BookVacationPageVerifications extends BasePageVerifications {
    // 1st step
    bookingHeaderLoaded() {
        $(bookingHeader).waitForDisplayed();
        return this;
    }
    bookingComfortIconsLoaded() {
        $(bookingComfortIcons).waitForDisplayed();
        return this;
    }
    bookingStepsLoaded() {
        $(bookingSteps).waitForDisplayed();
        expect($$(bookingSteps).length).to.equal(3);
        return this;
    }
    bookingRoomLoaded() {
        $(bookingRoom).waitForDisplayed();
        return this;
    }
    passengerContactInfoLoaded() {
        $(passengerContactInfo).waitForDisplayed();
        return this;
    }
    emergencyContactInfoLoaded() {
        $(emergencyContactInfo).waitForDisplayed();
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
        this.bookingHeaderLoaded()
            .bookingComfortIconsLoaded()
            .bookingStepsLoaded()
            .bookingRoomLoaded()
            .passengerContactInfoLoaded()
            .emergencyContactInfoLoaded()
            .bookingSummaryLoaded()
            .secondStepButtonLoaded();
        return this;
    }
}
