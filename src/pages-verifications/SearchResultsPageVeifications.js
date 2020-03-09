import BasePageVerifications from './BasePageVerifications';
import Element from '../components/Element';

export const filterPersonen = '.expander.party .toggle-value';
const filterDate = '#select-departure span.toggle-value';
export const filterDuration = '#select-duration .toggle-value';
const spinner = '#spinner > div';

export default class SearchResultsPageVerifications extends BasePageVerifications {
    spinnerDisappeared() {
        Element.of(spinner).shouldHaveAttribute('class', 'hidden');
        return this;
    }

    filterApplied(selector, value) {
        Element.of(selector).shouldHaveText(value);
        return this;
    }

    filterDate(expectedDay, expectedMonth) {
        const actualDate = Element.of(filterDate)
            .getText()
            .split(' ');

        expectedMonth = expectedMonth.split(' ');

        if (expectedMonth[0].length > 3) {
            expectedMonth[0] = `${expectedMonth[0].slice(0, 3)}.`;
        }

        let expectedDate = [expectedDay, ...expectedMonth];

        expect(actualDate).to.include.members(expectedDate);
        return this;
    }
}
