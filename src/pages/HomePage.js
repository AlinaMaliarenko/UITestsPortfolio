import BasePage from './BasePage';
const continueWithCookiesButton = '.btn.btn--theme--primary.btn--large';
const zonvakantiesSeeButton = '.vertical.sun .btn.btn--theme--primary';

export default class HomePage extends BasePage {
    open() {
        super.open('/');
        return this;
    }

    closeCookiesBar() {
        $(continueWithCookiesButton).click();
        return this;
    }

    clickZonvakantiesSeeButton() {
        $(zonvakantiesSeeButton).click();
        return this;
    }
}
