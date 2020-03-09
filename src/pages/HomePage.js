import BasePage from './BasePage';
import Element from '../components/Element';

const continueWithCookiesButton = '.btn.btn--theme--primary.btn--large';
const zonvakantiesSeeButton = '.vertical.sun .btn';
const countrySelector = country => `//li[3]//*[text() = '${country}']`;

export default class HomePage extends BasePage {
    open() {
        super.open('/');
        return this;
    }

    closeCookiesBar() {
        Element.of(continueWithCookiesButton).click();
        return this;
    }

    selectZonvakanties() {
        Element.of(zonvakantiesSeeButton).click();
    }

    selectByCarCountry(country) {
        Element.of(countrySelector(country)).click();
        return this;
    }
}
