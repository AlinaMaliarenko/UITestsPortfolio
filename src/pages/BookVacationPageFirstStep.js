import BasePage from './BasePage';
import { secondStepButton } from '../model/Constants';

const passengerGender = (num, gender) => `span[data-cy="passenger-0${num}_name-salutation-${gender}"]`;
const passengerFirstName = num => `input[data-cy="passenger-0${num}_name-first"]`;
const passengerLastName = num => `input[data-cy="passenger-0${num}_name-last"]`;
const passengerDay = num => `select[name="passenger-0${num}_name-birthdate-1"]`;
const passengerMonth = num => `select[name="passenger-0${num}_name-birthdate-2"]`;
const passengerYear = num => `select[name="passenger-0${num}_name-birthdate-3"]`;

const passengerEmail = `input[data-cy="passenger-01_email"]`;
const passengerPostcode = `input[data-cy="passenger-01_address-postcode"]`;
const passengerStreet = `input[data-cy="passenger-01_address-street"]`;
const passengerCity = `input[data-cy="passenger-01_address-city"]`;
const passengerTelephone = `input[data-cy="passenger-01_telephone-primary"]`;
const passengerHouseNumber = `#housenumber`;
const emergencyContactName = `input[data-cy="stay-home_name"]`;
const emergencyContactPhone = `input[data-cy="stay-home_tel"]`;

export default class BookVacationPageFirstStep extends BasePage {
    setVolwassene(num, gender, fName, lName, dateOfBirth, nationality = false) {
        const date = dateOfBirth.split(' ');
        const [dd, mm, yyyy] = [date[0], date[1], date[2]];
        $(passengerGender(num, gender)).click();
        $(passengerFirstName(num)).setValue(fName);
        $(passengerLastName(num)).setValue(lName);
        $(passengerDay(num)).selectByVisibleText(dd);
        $(passengerMonth(num)).selectByVisibleText(mm);
        $(passengerYear(num)).selectByVisibleText(yyyy);
        if (nationality !== false) {
            // $(`.passenger-0${num} a.vd-link`).click();
            // $(`.passenger-0${num} .menu`).click();
            // $(`... se;ector ... .icon-flag.${nationality}`).click();
            return false;
        }
        return this;
    }

    setContactInfo(email, post, houseNum, str, residence, phone, land = false) {
        $(passengerEmail).setValue(email);
        $(passengerPostcode).setValue(post);
        $(passengerHouseNumber).setValue(houseNum);
        $(passengerStreet).setValue(str);
        $(passengerCity).setValue(residence);
        $(passengerTelephone).setValue(phone);
        if (land !== false) {
            return false;
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
