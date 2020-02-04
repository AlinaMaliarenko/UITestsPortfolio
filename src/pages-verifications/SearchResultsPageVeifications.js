import BasePageVerifications from './BasePageVerifications';
import { airoportPicker, boardTypePicker } from '../pages/SearchResultsPage';

const searchResultsPageHeader = 'h2.label';
const searchFacetsBar = '.search-header ul.search-facets';
const filters = '.filters-wrapper';
const searchResultsList = '#search-results-list';
const pagination = '.pagination';

export default class SearchResultsPageVerifications extends BasePageVerifications {
    searchResultsPageHeaderLoaded(string) {
        $(searchResultsPageHeader).waitForDisplayed();
        browser.waitUntil(() => expect($(searchResultsPageHeader).getText()).to.have.string(string));
        return this;
    }
    searchFacetsBarLoaded() {
        $(searchFacetsBar).waitForDisplayed();
        return this;
    }
    filtersLoaded() {
        $(filters).waitForDisplayed();
        return this;
    }

    searchResultsListLoaded(lenght) {
        $(searchResultsList).waitForDisplayed();
        browser.waitUntil(() =>
            expect($$('#search-results-list .search-result.viewport-tracked').length).to.equal(lenght)
        );
        return this;
    }
    paginationLoaded() {
        $(pagination).waitForDisplayed();
        return this;
    }

    searchResultsPageElementsLoaded() {
        this.searchResultsPageHeaderLoaded('vakanties gevonden')
            .searchFacetsBarLoaded()
            .filtersLoaded()
            .searchResultsListLoaded(18)
            .paginationLoaded();
        return this;
    }

    verifyFacetsSelected(departureAiroport, boardType, transportArranged) {
        const expectedFacets = [departureAiroport, boardType, transportArranged].map(el => el.toUpperCase());
        const actualFacets = $$('.main-search-content.search-results .search-header li a').map(el => el.getText());
        expect(actualFacets).to.include.members(expectedFacets);
        return this;
    }

    airoportBoardTypeSelected(departureAiroport, type) {
        expect($(`${airoportPicker(departureAiroport)}//..`).getAttribute('class')).to.have.string('active');
        expect($(`${boardTypePicker(type)}//..`).getAttribute('class')).to.have.string('active');
        return this;
    }
    spinnerDisappeared() {
        browser.waitUntil(() => expect($('#spinner > div').getAttribute('class')).to.have.string('hidden'));
        return this;
    }
}
