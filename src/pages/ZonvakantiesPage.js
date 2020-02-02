import BasePage from './BasePage';
import {
    dateSelector,
    destinationMonthDropDown,
    durationSelector,
    travelPartySelector,
    travelPartySaveButton,
    travelPartyAdultsDropDown,
    continueSearchButton,
    destinationDropDown,
    pickedDestination,
    departureDateMonth
} from '../model/Constants';

export default class ZonvakantiesPage extends BasePage {
    open() {
        super.open('/zonvakantie');
        return this;
    }
    expandDestinationDropDown() {
        $(destinationDropDown).click();
        browser.waitUntil(() => expect($('.expander.destination').getAttribute('class')).to.have.string('expanded'));
        return this;
    }
    expandDateDropDown() {
        $(dateSelector).click();
        browser.waitUntil(() => expect($('.expander.departure').getAttribute('class')).to.have.string('expanded'));
        return this;
    }
    expandMonthDropDown() {
        $(destinationMonthDropDown).click();
        browser.waitUntil(() => expect($(destinationMonthDropDown).getAttribute('class')).to.have.string('expanded'));
        return this;
    }
    expandDurationDropDown() {
        $(durationSelector).click();
        browser.waitUntil(() => expect($('.expander.duration').getAttribute('class')).to.have.string('expanded'));
        return this;
    }
    selectDestination(country) {
        const countryPicker = `//ul[3]//a[text() = '${country}']`;
        $(countryPicker).click();
        return this;
    }
    selectMonth(month) {
        const monthPicker = `//*[text() = '${month}']`;
        $(monthPicker).click();
        return this;
    }
    selectDay(date) {
        const dayPicker = `//*[@class="dates"]//span[text()="${date}"]`;
        $(dayPicker).waitForDisplayed();
        $(dayPicker).click();
        return this;
    }

    selectDuration(duration) {
        const durationPicker = `//label[input[@value="${duration}"]]`;
        $(durationPicker).click();
        return this;
    }
    selectTravelParty(personen) {
        $(travelPartySelector).click();
        expect($(travelPartySelector).getAttribute('class')).to.have.string('active');
        $(travelPartyAdultsDropDown).click();
        $(`option[value="${personen}"]`).click();
        $(travelPartySaveButton).click();
        // expect($('#select-party .toggle-value').getText()).to.have.string(`${personen}`);
        return this;
    }

    clickContinueSearchButton() {
        $(continueSearchButton).click();
        return this;
    }
}
