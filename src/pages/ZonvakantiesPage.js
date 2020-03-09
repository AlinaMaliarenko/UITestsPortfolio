import BasePage from './BasePage';
import Element from '../components/Element';

export const dateSelector = '.expander.departure.period-options > div.inner-container';
export const monthDropDown = '.current-month';
export const durationDropDown = '#select-duration';
export const travelParty = '#select-party';
export const continueSearch = '.btn.btn--theme--primary.box-submit';
export const destinationDropDown = '#select-destination';
const countryPicker = country => `//ul[3]//a[text() = '${country}']`;
export const transportArranged = '.transport-arranged';
export const transportOwn = '.transport-own';

export default class ZonvakantiesPage extends BasePage {
    open() {
        super.open('/zonvakantie');
        return this;
    }

    selectDestination(country) {
        Element.of(countryPicker(country)).click();
        return this;
    }
}
