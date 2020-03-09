import BasePage from './BasePage';
import Element from '../components/Element';

export const accomodation = index => `#search-results-list > li:nth-child(${index})`;
const accomodationLink = index => `${accomodation(index)} > a`;
const accomodationType = type => `//span[text()="${type}"]`;
const accomodationSaveButton = index => `${accomodation(index)} .save-button`;

export const airoportPicker = departureAiroport => `//span[text()="${departureAiroport}"]`;
export const boardTypePicker = type => `//span[text()="${type}"]`;

const sortByPrice = '.sort-options li:nth-child(2) button';
const actualFacets = '.main-search-content.search-results .search-header li a';

export default class searchResultsPage extends BasePage {
    gatherActualFacets() {
        const actuals = $$(actualFacets).map(el => el.getText());
        return actuals;
    }
    getExpectedFacets(facet1, facet2, facet3) {
        const expected = [facet1, facet2, facet3].map(el => el.toUpperCase());
        return expected;
    }

    saveTrip(index) {
        Element.of(accomodationSaveButton(index)).click();
    }

    sortByPrice() {
        Element.of(sortByPrice).click();
        return this;
    }

    selectAiroport(departureAiroport) {
        Element.of(airoportPicker(departureAiroport)).click();
    }

    selectBoardType(type) {
        Element.of(boardTypePicker(type)).click();
    }

    selectAccomodation(index) {
        Element.of(accomodationLink(index)).click();
        return this;
    }

    selectAccomodationType(type) {
        Element.of(accomodationType(type)).click();
    }
}
