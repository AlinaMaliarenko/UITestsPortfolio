import Element from '../components/Element';
import { tripsCounter } from '../pages-verifications/AccomodationPageVerifications';

const price = '.price-block--checkout-summary--total .price-block__amount';
export const adults = `#adults-0`;
export const children = `.party-children`;
export const babies = `.party-babies`;
export const saveTravelParty = '.btn.btn--theme--primary.btn--wide';
export const adultsPicker = number => `${adults} option[value="${number}"]`;
export const childrenPicker = number => `${children} option[value="${number}"]`;
export const babiesPicker = number => `${babies} option[value="${number}"]`;
const monthPicker = month => `//*[text() = '${month}']`;
const dayPicker = date => `//*[@class="dates"]//span[text()="${date}"]`;
const durationPicker = duration => `//label[input[@value="${duration}"]]`;

export const accomodation = index => `#search-results-list > li:nth-child(${index})`;
const accomodationHeader = index => `${accomodation(index)} .acco-links.bottom .acco-title.single`;
const accomodationCountry = index => `${accomodation(index)} .acco-links.bottom li:nth-child(1)`;
const accomodationDate = index => `${accomodation(index)} .travel-date dd`;

const savedTripsIndicator = '#header-heart';

export default class BasePage {
    open(url) {
        browser.url(url);
        return this;
    }

    getPrice() {
        return Element.of(price)
            .getText()
            .replace('\n', ',');
    }

    proceed(step) {
        Element.of(step).click();
        return this;
    }

    expand(dropdown) {
        Element.of(dropdown).click();
        return this;
    }

    selectMonth(month) {
        Element.of(monthPicker(month)).click();
        return this;
    }
    selectDay(date) {
        Element.of(dayPicker(date)).click();
        return this;
    }
    selectDuration(duration) {
        Element.of(durationPicker(duration)).click();
        return this;
    }
    selectTransport(selector) {
        const temp = Element.of(selector).getAttributeValue('class');
        if (!temp.includes('active')) {
            Element.of(selector).click();
        }
        return this;
    }

    selectAdults(number) {
        Element.of(adults).click();
        Element.of(adultsPicker(number)).click();
        return this;
    }
    selectChildren(number) {
        Element.of(children).click();
        Element.of(childrenPicker(number)).click();
        return this;
    }

    selectBabies(number) {
        Element.of(babies).click();
        Element.of(babiesPicker(number)).click();
        return this;
    }

    applyTravelParty() {
        Element.of(saveTravelParty).click();
        return this;
    }

    getAccomodationInfo(index) {
        let header = Element.of(accomodationHeader(index)).getText();
        header = header.substring(0, header.indexOf('*')).trim();

        const country = Element.of(accomodationCountry(index)).getText();

        let date = Element.of(accomodationDate(index)).getText();
        date = date.substring(0, date.indexOf('(')).trim();

        return [header, country, date];
    }

    checkViewedSavedTripsIcon() {
        const classValue = Element.of(savedTripsIndicator).getAttributeValue('class');
        let counter = 0;
        if (classValue == 'saved') {
            counter = Element.of(tripsCounter).getText();
        }
        return counter;
    }
}
