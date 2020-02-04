import BasePageVerifications from './BasePageVerifications';
import {
    travelPartySelector,
    destinationDropDown,
    durationSelector,
    dateSelector,
    destinationMonthDropDown
} from '../pages/ZonvakantiesPage';
const zonvakantiesHeader = 'h1.big-statement';
const includingFlightSelector = '.transport-arranged.active';
const showVacationsButton = '#search-box > div > button';
const pickedDestination = '.menu-toggle.multi-country';
const departureDateMonth = '#select-departure span.toggle-value';

export default class ZonvakantiesVerifications extends BasePageVerifications {
    zonvakantiesHeaderLoaded(string) {
        $(zonvakantiesHeader).waitForDisplayed();
        expect($(zonvakantiesHeader).getText()).to.have.string(string);
        return this;
    }
    destinationDropDownLoaded() {
        $(destinationDropDown).waitForDisplayed();
        return this;
    }
    destinationDropDownExpanded() {
        browser.waitUntil(() => expect($('.expander.destination').getAttribute('class')).to.have.string('expanded'));
        return this;
    }

    destinationDateDropDownExpanded() {
        browser.waitUntil(() => expect($('.expander.departure').getAttribute('class')).to.have.string('expanded'));
        return this;
    }
    monthDropDownExpanded() {
        browser.waitUntil(() => expect($(destinationMonthDropDown).getAttribute('class')).to.have.string('expanded'));
        return this;
    }
    durationDropDownExpanded() {
        browser.waitUntil(() => expect($('.expander.duration').getAttribute('class')).to.have.string('expanded'));
        return this;
    }
    travelPartyDropDownExpanded() {
        expect($(travelPartySelector).getAttribute('class')).to.have.string('active');
        return this;
    }
    dateSelectorLoaded() {
        $(dateSelector).waitForDisplayed();
        return this;
    }
    durationSelectorLoaded() {
        $(durationSelector).waitForDisplayed();
        return this;
    }
    travelPartySelectorLoaded() {
        $(travelPartySelector).waitForDisplayed();
        return this;
    }
    includingFlightSelectorLoaded() {
        $(includingFlightSelector).waitForDisplayed();
        return this;
    }
    showVacationsButtonLoaded() {
        $(showVacationsButton).waitForDisplayed();
        return this;
    }

    destinationSelected(country) {
        expect($(pickedDestination).getText()).to.have.string(country);
        return this;
    }
    monthSelected(month) {
        expect($(destinationMonthDropDown).getText()).to.have.string(month);
        return this;
    }
    dateSelected(date) {
        expect($(departureDateMonth).getText()).to.have.string(date);
        return this;
    }
    durationSelected(duration) {
        expect($(durationSelector).getText()).to.have.string(duration);
        return this;
    }
    travelPartySelected(personen) {
        expect($(travelPartySelector).getText()).to.have.string(personen);
        return this;
    }

    zonvakantiesPageLoaded() {
        this.zonvakantiesHeaderLoaded('zonvakanties')
            .destinationDropDownLoaded()
            .dateSelectorLoaded()
            .durationSelectorLoaded()
            .travelPartySelectorLoaded()
            .includingFlightSelectorLoaded()
            .showVacationsButtonLoaded();
        return this;
    }

    searchParametersSelected(country, date, duration, personen) {
        this.destinationSelected(country)
            .dateSelected(date)
            .durationSelected(duration)
            .travelPartySelected(personen);
        return this;
    }
}
