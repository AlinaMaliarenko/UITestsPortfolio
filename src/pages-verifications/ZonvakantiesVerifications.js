import BasePageVerifications from './BasePageVerifications';
import {
    zonvakantiesHeader,
    dateSelector,
    durationSelector,
    travelPartySelector,
    includingFlightSelector,
    ownTransportSelector,
    showVacationsButton,
    aboutArticle,
    topTenAccomodations,
    lookAllAccomodationsButton,
    searchHeader,
    destinationDropDown,
    pickedDestination,
    destinationMonthDropDown,
    departureDateMonth
} from '../model/Constants';

export default class ZonvakantiesVerifications extends BasePageVerifications {
    searchHeaderLoaded() {
        $(searchHeader).waitForDisplayed();
        return this;
    }
    zonvakantiesHeaderLoaded() {
        $(zonvakantiesHeader).waitForDisplayed();
        expect($(zonvakantiesHeader).getText()).to.have.string('zonvakanties');
        return this;
    }

    destinationDropDownLoaded() {
        $(destinationDropDown).waitForDisplayed();
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

    ownTransportSelectorLoaded() {
        $(ownTransportSelector).waitForDisplayed();
        return this;
    }

    showVacationsButtonLoaded() {
        $(showVacationsButton).waitForDisplayed();
        return this;
    }

    aboutArticleLoaded() {
        $(aboutArticle).waitForDisplayed();
        return this;
    }

    topTenAccomodationsLoaded() {
        $(topTenAccomodations).waitForDisplayed();
        return this;
    }

    lookAllAccomodationsButtonLoaded() {
        $(lookAllAccomodationsButton).waitForDisplayed();
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
        this.searchHeaderLoaded()
            .zonvakantiesHeaderLoaded()
            .destinationDropDownLoaded()
            .dateSelectorLoaded()
            .durationSelectorLoaded()
            .travelPartySelectorLoaded()
            .includingFlightSelectorLoaded()
            .ownTransportSelectorLoaded()
            .showVacationsButtonLoaded()
            .aboutArticleLoaded()
            .topTenAccomodationsLoaded()
            .lookAllAccomodationsButtonLoaded();
        return this;
    }
}
