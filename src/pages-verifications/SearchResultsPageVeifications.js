import BasePageVerifications from './BasePageVerifications';
import { searchResultsPageHeader, searchFacetsBar, filters, searchResultsList, pagination } from '../model/Constants';

export default class SearchResultsPageVerifications extends BasePageVerifications {
    searchResultsPageHeaderLoaded() {
        $(searchResultsPageHeader).waitForDisplayed();
        browser.waitUntil(() => expect($(searchResultsPageHeader).getText()).to.have.string('vakanties gevonden'));
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
    searchResultsListLoaded() {
        $(searchResultsList).waitForDisplayed();
        browser.waitUntil(() => expect($$('#search-results-list .search-result.viewport-tracked').length).to.equal(18));
        return this;
    }
    paginationLoaded() {
        $(pagination).waitForDisplayed();
        return this;
    }

    searchResultsPageElementsLoaded() {
        this.searchResultsPageHeaderLoaded()
            .searchFacetsBarLoaded()
            .filtersLoaded()
            .searchResultsListLoaded()
            .paginationLoaded();
        return this;
    }

    verifyFacetsSelected(departureAiroport, boardType, transportArranged) {
        const expectedFacets = [departureAiroport, boardType, transportArranged].map(el => el.toUpperCase());
        const actualFacets = $$('.main-search-content.search-results .search-header li a').map(el => el.getText());
        expect(actualFacets).to.include.members(expectedFacets);
        return this;
    }
}
