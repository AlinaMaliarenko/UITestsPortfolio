import { at, open, assertThat } from '../src/utils/page-factory';
import { select, user1, user2, contactInfo, emergencyContact, verifyPersonData } from '../src/model/Constants';
import homePage from '../src/pages/HomePage';
import onHomePage from '../src/pages-verifications/HomePageVerifications';
import onZonvakantiesPage from '../src/pages-verifications/ZonvakantiesVerifications';
import zonvakantiesPage from '../src/pages/ZonvakantiesPage';
import searchResultsPage from '../src/pages/SearchResultsPage';
import onSearchResultsPage from '../src/pages-verifications/SearchResultsPageVeifications';
import firstAccomodationPage from '../src/pages/FirstAccomodationPage';
import onFirstAccomodationPage from '../src/pages-verifications/FirstAccomodationPageVerifications';
import bookVacation1Step from '../src/pages/BookVacation1Step';
import onBookVacation1Step from '../src/pages-verifications/BookVacation1StepVerifications';
import bookVacation2Step from '../src/pages/BookVacation2Step';
import onbookVacation2Step from '../src/pages-verifications/BookVacation2StepVerifications';
import bookVacation3Step from '../src/pages/BookVacation3Step';
import onbookVacation3Step from '../src/pages-verifications/BookVacation3StepVerifications';
import onVerifyInformationModal from '../src/pages-verifications/VerifyInformationModalVerififcations';
import verifyInformationModal from '../src/pages/VerifyInformationModal';

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

    it('Verify that User can go through the Happy User Workflow (book the Vacation trip) successfully', () => {
        //        Step 2
        at(zonvakantiesPage).expandDestinationDropDown();
        assertThat(onZonvakantiesPage).destinationDropDownExpanded();
        at(zonvakantiesPage).selectDestination(select.country);

        at(zonvakantiesPage).expandDateDropDown();
        assertThat(onZonvakantiesPage).destinationDateDropDownExpanded();

        at(zonvakantiesPage).expandMonthDropDown();
        assertThat(onZonvakantiesPage).monthDropDownExpanded();

        at(zonvakantiesPage).selectMonth(select.month);
        assertThat(onZonvakantiesPage).monthSelected(select.month);

        at(zonvakantiesPage).selectDay(select.date);
        at(zonvakantiesPage).expandDurationDropDown();

        assertThat(onZonvakantiesPage).durationDropDownExpanded();
        at(zonvakantiesPage).selectDuration(select.duration);

        at(zonvakantiesPage).expandTravelPartyDropDown();
        assertThat(onZonvakantiesPage).travelPartyDropDownExpanded();
        at(zonvakantiesPage).selectTravelParty(select.personen);

        assertThat(onZonvakantiesPage).searchParametersSelected(
            select.country,
            select.date,
            select.duration,
            select.personen
        );

        at(zonvakantiesPage).clickContinueSearchButton();
        assertThat(onSearchResultsPage)
            .searchResultsPageElementsLoaded()
            .mainElementsAreLoaded();

        //      Step 3
        at(searchResultsPage)
            .checkTransportArranged()
            .selectAiroport(select.airoport);
        assertThat(onSearchResultsPage).spinnerDisappeared();
        at(searchResultsPage).selectBoardType(select.board);
        assertThat(onSearchResultsPage).spinnerDisappeared();

        assertThat(onSearchResultsPage)
            .searchResultsPageElementsLoaded()
            .airoportBoardTypeSelected(select.airoport, select.board)
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

        assertThat(onBookVacation1Step).firstStepElementsLoaded();
        //         Step 5
        at(bookVacation1Step).setVolwassene(1, user1.gender, user1.fName, user1.lName, user1.dob, user1.nationality);

        at(bookVacation1Step).setVolwassene(2, user2.gender, user2.fName, user2.lName, user2.dob, user2.nationality);

        at(bookVacation1Step).setContactInfo(
            contactInfo.email,
            contactInfo.postcode,
            contactInfo.houseNum,
            contactInfo.street,
            contactInfo.residence,
            contactInfo.telephone,
            contactInfo.land
        );

        at(bookVacation1Step).setEmergencyInfo(emergencyContact.name, emergencyContact.phone);
        at(bookVacation1Step).clickStep2Button();

        // sub-step 5 (new feature added) -'Verify your information' modal
        // appears randomly
        if ($('.modal__content').isDisplayed()) {
            assertThat(onVerifyInformationModal).verifyInfoModalLoaded();
            at(verifyInformationModal).confirmData(1, verifyPersonData.checkbox1, verifyPersonData.checkbox2);
            at(verifyInformationModal).confirmData(2, verifyPersonData.checkbox1, verifyPersonData.checkbox2);
            assertThat(onVerifyInformationModal).confirmationButtonActive();
            at(verifyInformationModal).clickConfirmationButton();
        }

        //         Step 6
        // - On the next step (step 2) of the book flow don’t add any additional products
        // - Continue to the overview page
        assertThat(onbookVacation2Step).secondStepElementsLoaded();
        const secondStepPrice = at(bookVacation2Step).getPrice();
        at(bookVacation2Step).clickThirdStepButton();
        //         Step 7
        // - On the last step of the book flow check that the final price corresponds to the price
        // shown when we went into the check-out
        assertThat(onbookVacation3Step).thirdStepElementsLoaded();
        const thirdStepPrice = at(bookVacation3Step).getPrice();
        assertThat(onbookVacation3Step).pricesMatch(secondStepPrice, thirdStepPrice);
    });
});
