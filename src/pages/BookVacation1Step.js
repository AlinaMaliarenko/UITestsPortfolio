import BasePage from './BasePage';
import Element from '../components/Element';

const passengerGender = (num, gender) => `span[data-cy="passenger-0${num}_name-salutation-${gender}"]`;
const passengerFirstName = num => `input[data-cy="passenger-0${num}_name-first"]`;
const passengerLastName = num => `input[data-cy="passenger-0${num}_name-last"]`;
const passengerDay = num => `select[name="passenger-0${num}_name-birthdate-1"]`;
const passengerMonth = num => `select[name="passenger-0${num}_name-birthdate-2"]`;
const passengerYear = num => `select[name="passenger-0${num}_name-birthdate-3"]`;
const passengerNationality = (num, nationality) => `//*[@class = "passenger-0${num}"]//a[text()="${nationality}"]`;
const nationalityLocator = num => `//*[@class = "passenger-0${num}"]//a[1]`;
const landLocator = `.passenger-01-contact-info a:nth-child(1)`;
const landPicker = land => `//*[@class="passenger-01-contact-info"] //a[text()="${land}"]`;

const passengerEmail = `input[data-cy="passenger-01_email"]`;
const passengerPostcode = `input[data-cy="passenger-01_address-postcode"]`;
const passengerStreet = `input[data-cy="passenger-01_address-street"]`;
const passengerCity = `input[data-cy="passenger-01_address-city"]`;
const passengerPhone = `input[data-cy="passenger-01_telephone-primary"]`;
const passengerHouseNumber = `#housenumber`;
const emergencyName = `input[data-cy="stay-home_name"]`;
const emergencyPhone = `input[data-cy="stay-home_tel"]`;
const changeNationality = '.passenger-01-contact-info a.vd-link';
const changeNationalityPassenger = num => `.passenger-0${num} a.vd-link`;
const nationalityDropDown = '.passenger-01-contact-info .expander.destination.selected';
const nationalityDropDownPassenger = num => `.passenger-0${num} .expander.destination.selected`;

export default class BookVacation1Step extends BasePage {
    setVolwassene(num, gender, fName, lName, dateOfBirth, nationality) {
        dateOfBirth = dateOfBirth.split(' ');
        const [dd, mm, yyyy] = [dateOfBirth[0], dateOfBirth[1], dateOfBirth[2]];
        Element.of(passengerGender(num, gender)).click();
        Element.of(passengerFirstName(num)).enterValue(fName);
        Element.of(passengerLastName(num)).enterValue(lName);
        Element.of(passengerDay(num)).selectByVisibleText(dd);
        Element.of(passengerMonth(num)).selectByVisibleText(mm);
        Element.of(passengerYear(num)).selectByVisibleText(yyyy);

        if (
            Element.of(nationalityLocator(num)).getText() !=
            Element.of(passengerNationality(num, nationality)).getText()
        ) {
            Element.of(changeNationalityPassenger(num)).click();
            Element.of(nationalityDropDownPassenger(num)).click();
            Element.of(passengerNationality(num, nationality)).click();
        }
        return this;
    }

    setContact(email, post, houseNum, str, residence, phone, land) {
        Element.of(passengerEmail).enterValue(email);
        Element.of(passengerPostcode).enterValue(post);
        Element.of(passengerHouseNumber).enterValue(houseNum);
        Element.of(passengerStreet).enterValue(str);
        Element.of(passengerCity).enterValue(residence);
        Element.of(passengerPhone).enterValue(phone);

        if (Element.of(landLocator).getText() != land) {
            Element.of(changeNationality).click();
            Element.of(nationalityDropDown).click();
            Element.of(landPicker(land)).click();
        }
        return this;
    }

    setEmergencyInfo(name, phone) {
        Element.of(emergencyName).enterValue(name);
        Element.of(emergencyPhone).enterValue(phone);
        return this;
    }
}
