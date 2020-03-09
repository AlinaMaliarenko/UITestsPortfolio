import Element from '../components/Element';
import BasePage from './BasePage';

export const provinceDropDown = '.expander.destination';
const provincePicker = province => `//a[text() = '${province}']`;
const neeFlexiblePicker = '.date-flexibility label:nth-child(2) .radio';

export default class ByCarPage extends BasePage {
    selectDestination(province) {
        Element.of(provincePicker(province)).click();
        return this;
    }
    setNotFlexibleDate() {
        Element.of(neeFlexiblePicker).click();
        return this;
    }
}
