import BasePage from './BasePage';
import { confirmationButton } from '../pages-verifications/VerifyInformationModalVerififcations';

const personSelector = index => `.id-check__person:nth-child(${index})`;
const checkboxSelector = num => `label:nth-child(${num})`;
const option = (index, num) => `${personSelector(index)} ${checkboxSelector(num)}`;

export default class VerifyInformationModal extends BasePage {
    confirmData(index, num1, num2) {
        $(option(index, num1)).isClickable();
        $(option(index, num1)).click();
        $(option(index, num2)).isClickable();
        $(option(index, num2)).click();
    }
    clickConfirmationButton() {
        $(confirmationButton).click();
        return this;
    }
}
