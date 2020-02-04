import BasePageVerifications from './BasePageVerifications';
const modalContent = '.modal__content';
export const confirmationButton = '.modal .btn.btn--theme--primary';
const optionsGroup = '.option-group';

export default class VerifyInformationModalVerififcations extends BasePageVerifications {
    modalContentLoaded() {
        $(modalContent).waitForDisplayed();
        return this;
    }
    confirmationButtonLoaded() {
        $(confirmationButton).waitForDisplayed();
        return this;
    }
    optionsGroupLoaded() {
        $(optionsGroup).waitForDisplayed();
        return this;
    }

    verifyInfoModalLoaded() {
        this.modalContentLoaded()
            .confirmationButtonLoaded()
            .optionsGroupLoaded();
        return this;
    }

    confirmationButtonActive() {
        expect($(confirmationButton).getAttribute('class')).to.not.have.string('btn--disabled');
        return this;
    }
}
