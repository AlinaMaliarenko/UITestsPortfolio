import BasePage from './BasePage';
import Element from '../components/Element';

const personSelector = index => `.id-check__person:nth-child(${index})`;
const checkboxSelector = num => `label:nth-child(${num})`;
const option = (index, num) => `${personSelector(index)} ${checkboxSelector(num)}`;
const confirmationButton = '.modal .btn.btn--theme--primary';

export default class VerifyInformationModal extends BasePage {
    clickCheckBoxes(index, num1, num2) {
        Element.of(option(index, num1)).click();
        Element.of(option(index, num2)).click();
        return this;
    }
    confirm() {
        Element.of(confirmationButton).click();
    }
}
