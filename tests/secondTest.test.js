import { at, assertThat } from '../src/utils/page-factory';
import homePage from '../src/pages/HomePage';
import byCarPage, { provinceDropDown } from '../src/pages/ByCarPage';
import { carTrip, openHomePage } from '../src/model/Constants';
import accomodationPage from '../src/pages/AccomodationPage';
import onAccomodationPage from '../src/pages-verifications/AccomodationPageVerifications';
import savedTripsPage from '../src/pages/SavedTripsPage';
import onSavedTripsPage from '../src/pages-verifications/SavedTripsPageVerifications';
import { filterPersonen, filterDuration } from '../src/pages-verifications/SearchResultsPageVeifications';
import onSearchResultsPage from '../src/pages-verifications/SearchResultsPageVeifications';
import searchResultsPage from '../src/pages/SearchResultsPage';
import {
    transportOwn,
    dateSelector,
    monthDropDown,
    durationDropDown,
    travelParty,
    continueSearch
} from '../src/pages/ZonvakantiesPage';

describe('Verify search functionality and Saved Trips', () => {
    before('Go to website, go to Trips By Car ("met de auto") page from Homepage', () => {
        openHomePage();
        at(homePage).selectByCarCountry(carTrip.country);
    });
    it('Search specific trip, save this trip, make sure the trip was saved and is displayed in Saved Trips section', () => {
        at(byCarPage)
            .expand(provinceDropDown)
            .selectDestination(carTrip.province)
            .expand(dateSelector)
            .expand(monthDropDown)
            .selectMonth(carTrip.month)
            .selectDay(carTrip.date)
            .expand(dateSelector)
            .setNotFlexibleDate()
            .expand(durationDropDown)
            .selectDuration(carTrip.duration)
            .expand(travelParty)
            .selectAdults(carTrip.adults)
            .selectChildren(carTrip.children)
            .selectBabies(carTrip.babies)
            .applyTravelParty()
            .selectTransport(transportOwn)
            .proceed(continueSearch);

        const actualFacets = at(searchResultsPage).gatherActualFacets();
        const expectedFacets = at(searchResultsPage).getExpectedFacets(
            carTrip.country,
            carTrip.province,
            carTrip.transportFacet
        );

        assertThat(onSearchResultsPage)
            .arraysEqual(actualFacets, expectedFacets)
            .filterApplied(filterPersonen, carTrip.personen)
            .filterApplied(filterDuration, carTrip.duration)
            .filterDate(carTrip.date, carTrip.month);

        at(searchResultsPage).selectBoardType(carTrip.board);
        assertThat(onSearchResultsPage).spinnerDisappeared();
        at(searchResultsPage).selectAccomodationType(carTrip.accomodationType);
        assertThat(onSearchResultsPage).spinnerDisappeared();
        at(searchResultsPage).sortByPrice();
        assertThat(onSearchResultsPage).spinnerDisappeared();

        at(searchResultsPage).selectAccomodation(carTrip.index);

        const counter = at(accomodationPage).checkViewedSavedTripsIcon();
        at(accomodationPage).clickSaveTrip();
        assertThat(onAccomodationPage).viewedSavedTripsIconUpdated(counter);

        const accomodationTitle = at(accomodationPage).getAccomodationInfo()[0];

        at(accomodationPage).goToSavedTrips();
        const index = at(savedTripsPage).defineAccomodationIndexByTripName(accomodationTitle);
        const savedTripTitle = at(savedTripsPage).getAccomodationInfo(index)[0];

        assertThat(onSavedTripsPage).valuesEqual(accomodationTitle, savedTripTitle);
    });
});
