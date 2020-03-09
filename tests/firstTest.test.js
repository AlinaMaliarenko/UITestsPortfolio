import Element from '../src/components/Element';
import { at, assertThat } from '../src/utils/page-factory';
import { pick, user1, user2, contact, emergency, verifyPerson, openHomePage } from '../src/model/Constants';
import zonvakantiesPage, {
    transportArranged,
    destinationDropDown,
    monthDropDown,
    dateSelector,
    durationDropDown,
    travelParty,
    continueSearch
} from '../src/pages/ZonvakantiesPage';

import homePage from '../src/pages/HomePage';
import onZonvakantiesPage from '../src/pages-verifications/ZonvakantiesVerifications';
import searchResultsPage from '../src/pages/SearchResultsPage';
import onSearchResultsPage from '../src/pages-verifications/SearchResultsPageVeifications';
import accomodationPage from '../src/pages/AccomodationPage';
import onAccomodationPage from '../src/pages-verifications/AccomodationPageVerifications';
import bookVacation1Step from '../src/pages/BookVacation1Step';
import verifyInformationModal from '../src/pages/VerifyInformationModal';
import bookVacation2Step from '../src/pages/BookVacation2Step';
import onbookVacation2Step from '../src/pages-verifications/BookVacation2StepVerifications';
import bookVacation3Step from '../src/pages/BookVacation3Step';
import onbookVacation3Step from '../src/pages-verifications/BookVacation3StepVerifications';

const verificationModal = '.modal__content';
const step2 = '.btn.btn--theme--primary';
const step3 = '.btn.btn--theme--primary';

describe('Happy Flow Customer journey', () => {
    before('Go to website, go to "Zonvakanties" page from Homepage', () => {
        openHomePage();
        at(homePage).selectZonvakanties();
    });

    it(`Verify that User can go through the Happy User Workflow 
       (search for particular trip, proceed to checkout and make sure, 
        that the price in the Checkout is the same as through all the booking steps).`, () => {
        at(zonvakantiesPage)
            .expand(destinationDropDown)
            .selectDestination(pick.country)
            .expand(dateSelector)
            .expand(monthDropDown)
            .selectMonth(pick.month)
            .selectDay(pick.date)
            .expand(durationDropDown)
            .selectDuration(pick.duration)
            .expand(travelParty)
            .selectAdults(pick.personen)
            .applyTravelParty()
            .selectTransport(transportArranged);

        assertThat(onZonvakantiesPage).searchParametersSelected(
            pick.country,
            pick.date,
            pick.month,
            pick.duration,
            pick.personen
        );

        at(zonvakantiesPage).proceed(continueSearch);

        at(searchResultsPage).selectAiroport(pick.airoport);
        assertThat(onSearchResultsPage).spinnerDisappeared();
        at(searchResultsPage).selectBoardType(pick.board);

        assertThat(onSearchResultsPage).spinnerDisappeared();

        const actualFacets = at(searchResultsPage).gatherActualFacets();
        const expectedFacets = at(searchResultsPage).getExpectedFacets(pick.transport, pick.airoport, pick.board);

        assertThat(onSearchResultsPage).arraysInclude(actualFacets, expectedFacets);

        const searchAccomodationInfo = at(searchResultsPage).getAccomodationInfo(pick.index);

        at(searchResultsPage).selectAccomodation(pick.index);
        const accomodationPageInfo = at(accomodationPage).getAccomodationInfo();
        assertThat(onAccomodationPage).arraysEqual(accomodationPageInfo, searchAccomodationInfo);

        at(accomodationPage)
            .clickCheckPrice()
            .clickBookNow();

        at(bookVacation1Step)
            .setVolwassene(1, user1.gender, user1.fName, user1.lName, user1.dob, user1.nationality)
            .setVolwassene(2, user2.gender, user2.fName, user2.lName, user2.dob, user2.nationality)
            .setContact(
                contact.email,
                contact.postcode,
                contact.houseNum,
                contact.street,
                contact.residence,
                contact.phone,
                contact.land
            )
            .setEmergencyInfo(emergency.name, emergency.phone)
            .proceed(step2);

        if (Element.of(verificationModal)) {
            at(verifyInformationModal)
                .clickCheckBoxes(verifyPerson.first, verifyPerson.checkbox1, verifyPerson.checkbox2)
                .clickCheckBoxes(verifyPerson.second, verifyPerson.checkbox1, verifyPerson.checkbox2)
                .confirm();
        }

        assertThat(onbookVacation2Step).step2opened();
        const step2Price = at(bookVacation2Step).getPrice();
        at(bookVacation2Step).proceed(step3);
        assertThat(onbookVacation3Step).step3opened();
        const step3Price = at(bookVacation3Step).getPrice();
        assertThat(onbookVacation3Step).valuesEqual(step2Price, step3Price);
    });
});
