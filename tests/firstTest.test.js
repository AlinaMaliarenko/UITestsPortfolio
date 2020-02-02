import { at, open, assertThat } from '../src/utils/page-factory';
import homePage from '../src/pages/HomePage';
import onHomePage from '../src/pages-verifications/HomePageVerifications';
import onZonvakantiesPage from '../src/pages-verifications/ZonvakantiesVerifications';
import zonvakantiesPage from '../src/pages/ZonvakantiesPage';
import searchResultsPage from '../src/pages/SearchResultsPage';
import onSearchResultsPage from '../src/pages-verifications/SearchResultsPageVeifications';
import firstAccomodationPage from '../src/pages/FirstAccomodationPage';
import onFirstAccomodationPage from '../src/pages-verifications/FirstAccomodationPageVerifications';
import bookVacationPage1Step from '../src/pages/BookVacationPageFirstStep';
import onBookVacationPage1Step from '../src/pages-verifications/BookVacationPageFirstStepVerifications';
import { select, user1, user2, contactInfo, emergencyContact } from '../src/model/Constants';
import bookVacationPage2Step from '../src/pages/BookVacationPageSecondStep';
import onbookVacationPage2Step from '../src/pages-verifications/BookVacationPageSecondStepVerifications';
import bookVacationPage3Step from '../src/pages/BookVacationPageThirdStep';
import onbookVacationPage3Step from '../src/pages-verifications/BookVacationPageThirdStepVerifications';

describe('Happy Flow Customer journey', () => {
    before('Go to website, go to Zonvakanties page from Homepage', () => {
        open(homePage);
        assertThat(onHomePage).cookiesBarLoaded();
        at(homePage).closeCookiesBar();
        assertThat(onHomePage)
            .homePageElementsLoaded()
            .mainElementsAreLoaded();

        at(homePage).clickZonvakantiesSeeButton();
        assertThat(onZonvakantiesPage)
            .zonvakantiesPageLoaded()
            .mainElementsAreLoaded();
    });

    it('', () => {
        //        Step 2
        at(zonvakantiesPage)
            .expandDestinationDropDown()
            .selectDestination(select.country);
        assertThat(onZonvakantiesPage).destinationSelected(select.country);
        at(zonvakantiesPage)
            .expandDateDropDown()
            .expandMonthDropDown()
            .selectMonth(select.month);
        assertThat(onZonvakantiesPage).monthSelected(select.month);
        at(zonvakantiesPage).selectDay(select.date);
        assertThat(onZonvakantiesPage).dateSelected(select.date);
        at(zonvakantiesPage)
            .expandDurationDropDown()
            .selectDuration(select.duration);
        assertThat(onZonvakantiesPage).durationSelected(select.duration);
        at(zonvakantiesPage).selectTravelParty(select.personen);
        assertThat(onZonvakantiesPage).travelPartySelected(select.personen);

        at(zonvakantiesPage).clickContinueSearchButton();
        assertThat(onSearchResultsPage)
            .searchResultsPageElementsLoaded()
            .mainElementsAreLoaded();

        //      Step 3
        at(searchResultsPage)
            .checkTransportArranged()
            .selectAiroport(select.airoport)
            .selectBoardType(select.board);
        assertThat(onSearchResultsPage)
            .searchResultsPageElementsLoaded()
            .verifyFacetsSelected(select.airoport, select.board, select.transport);

        // gather Info on 1st Accomodation being on Search Result page
        const searchAccomodationInfo = at(searchResultsPage).getSearchResultsAccomodationInfo(1);
        // - And choose the first Accommodation on Search result page
        at(searchResultsPage).selectAccomodation(select.index);
        // verify that Accomodation page is loaded
        assertThat(onFirstAccomodationPage).accPageElementsLoaded();
        // gather Info on 1st Accomodation on Accomodation Details page
        const accomodationPageInfo = at(firstAccomodationPage).getAccomodationPageInfo();
        // verify that User was redirected to correct Accomodation by comparing 1st in (search) and 2nd info (date. page)
        assertThat(onFirstAccomodationPage).searchAndPageAccInfoMatch(searchAccomodationInfo, accomodationPageInfo);

        //         Step 4
        at(firstAccomodationPage).clickCheckPriceButton();
        assertThat(onFirstAccomodationPage).verifyOfferIsLoaded();
        at(firstAccomodationPage).clickBookNowButton();

        assertThat(onBookVacationPage1Step).firstStepElementsLoaded();
        //         Step 5
        at(bookVacationPage1Step).setVolwassene(
            1,
            user1.gender,
            user1.fName,
            user1.lName,
            user1.dob,
            user1.nationality
        );

        at(bookVacationPage1Step).setVolwassene(
            2,
            user2.gender,
            user2.fName,
            user2.lName,
            user2.dob,
            user2.nationality
        );

        at(bookVacationPage1Step).setContactInfo(
            contactInfo.email,
            contactInfo.postcode,
            contactInfo.houseNum,
            contactInfo.street,
            contactInfo.residence,
            contactInfo.telephone,
            contactInfo.land
        );

        at(bookVacationPage1Step).setEmergencyInfo(emergencyContact.name, emergencyContact.phone);
        at(bookVacationPage1Step).clickStep2Button();
        //         Step 6
        // - On the next step (step 2) of the book flow don’t add any additional products
        // - Continue to the overview page
        assertThat(onbookVacationPage2Step).secondStepElementsLoaded();
        const secondStepPrice = at(bookVacationPage2Step).getPrice();
        at(bookVacationPage2Step).clickThirdStepButton();
        //         Step 7
        // - On the last step of the book flow check that the final price corresponds to the price
        // shown when we went into the check-out
        assertThat(onbookVacationPage3Step).thirdStepElementsLoaded();
        const thirdStepPrice = at(bookVacationPage3Step).getPrice();
        assertThat(onbookVacationPage3Step).pricesMatch(secondStepPrice, thirdStepPrice);
    });
});
