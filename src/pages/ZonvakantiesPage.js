import BasePage from './BasePage';

export const dateSelector = '.expander.departure.period-options > div.inner-container';
export const destinationMonthDropDown = '.current-month';
export const durationSelector = '#select-duration';
export const travelPartySelector = '#select-party';
const travelPartySaveButton = '.btn.btn--theme--primary.btn--wide';
const travelPartyAdultsDropDown = '#adults-0';
const continueSearchButton = '.btn.btn--theme--primary.box-submit';
export const destinationDropDown = '#select-destination';
const countryPicker = country => `//ul[3]//a[text() = '${country}']`;
const monthPicker = month => `//*[text() = '${month}']`;
const dayPicker = date => `//*[@class="dates"]//span[text()="${date}"]`;
const durationPicker = duration => `//label[input[@value="${duration}"]]`;
const personenPicker = personen => `option[value="${personen}"]`;

export default class ZonvakantiesPage extends BasePage {
    open() {
        super.open('/zonvakantie');
        return this;
    }
    expandDestinationDropDown() {
        $(destinationDropDown).click();
        return this;
    }
    expandDateDropDown() {
        $(dateSelector).click();
        return this;
    }
    expandMonthDropDown() {
        $(destinationMonthDropDown).click();
        return this;
    }
    expandDurationDropDown() {
        $(durationSelector).click();
        return this;
    }
    selectDestination(country) {
        $(countryPicker(country)).click();
        return this;
    }
    selectMonth(month) {
        $(monthPicker(month)).click();
        return this;
    }
    selectDay(date) {
        $(dayPicker(date)).waitForDisplayed();
        $(dayPicker(date)).click();
        return this;
    }

    selectDuration(duration) {
        $(durationPicker(duration)).click();
        return this;
    }
    expandTravelPartyDropDown() {
        $(travelPartySelector).click();
        return this;
    }
    selectTravelParty(personen) {
        $(travelPartyAdultsDropDown).click();
        $(personenPicker(personen)).click();
        $(travelPartySaveButton).click();
        return this;
    }

    clickContinueSearchButton() {
        $(continueSearchButton).click();
        return this;
    }
}
