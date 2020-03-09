import BasePageVerifications from './BasePageVerifications';
import { travelParty, durationDropDown } from '../pages/ZonvakantiesPage';
import Element from '../components/Element';

const pickedDestination = '.menu-toggle.multi-country';
const departureDateMonth = '#select-departure span.toggle-value';

export default class ZonvakantiesVerifications extends BasePageVerifications {
    searchParametersSelected(country, date, month, duration, personen) {
        Element.of(pickedDestination).shouldHaveText(country);
        Element.of(departureDateMonth).shouldHaveText(date);
        Element.of(departureDateMonth).shouldHaveText(month);
        Element.of(durationDropDown).shouldHaveText(duration);
        Element.of(travelParty).shouldHaveText(personen);
        return this;
    }
}
