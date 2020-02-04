import BasePage from './BasePage';

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
const passengerTelephone = `input[data-cy="passenger-01_telephone-primary"]`;
const passengerHouseNumber = `#housenumber`;
const emergencyContactName = `input[data-cy="stay-home_name"]`;
const emergencyContactPhone = `input[data-cy="stay-home_tel"]`;
export const secondStepButton = '.btn.btn--theme--primary';

export default class BookVacation1Step extends BasePage {
    setVolwassene(num, gender, fName, lName, dateOfBirth, nationality) {
        const date = dateOfBirth.split(' ');
        const [dd, mm, yyyy] = [date[0], date[1], date[2]];
        $(passengerGender(num, gender)).click();
        $(passengerFirstName(num)).setValue(fName);
        $(passengerLastName(num)).setValue(lName);
        $(passengerDay(num)).selectByVisibleText(dd);
        $(passengerMonth(num)).selectByVisibleText(mm);
        $(passengerYear(num)).selectByVisibleText(yyyy);

        if ($(`${nationalityLocator(num)}`) != $(passengerNationality(num, nationality))) {
            $(`.passenger-0${num} a.vd-link`).click();
            $(`.passenger-0${num} .expander.destination.selected`).click();
            $(passengerNationality(num, nationality)).click();
        }
        return this;
    }

    setContactInfo(email, post, houseNum, str, residence, phone, land) {
        $(passengerEmail).setValue(email);
        $(passengerPostcode).setValue(post);
        $(passengerHouseNumber).setValue(houseNum);
        $(passengerStreet).setValue(str);
        $(passengerCity).setValue(residence);
        $(passengerTelephone).setValue(phone);

        if ($(landLocator).getText() !== land) {
            $('.passenger-01-contact-info a.vd-link').click();
            $('.passenger-01-contact-info .expander.destination.selected').click();
            $(landPicker(land)).click();
        }
        return this;
    }

    setEmergencyInfo(name, phone) {
        $(emergencyContactName).setValue(name);
        $(emergencyContactPhone).setValue(phone);
        return this;
    }

    clickStep2Button() {
        $(secondStepButton).click();
        return this;
    }
}
