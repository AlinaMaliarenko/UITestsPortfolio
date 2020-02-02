import BasePage from './BasePage';
import { thirdStepButton } from '../model/Constants';

export default class BookVacationPageSecondStep extends BasePage {
    clickThirdStepButton() {
        $(thirdStepButton).click();
        return this;
    }
    getPrice() {
        const arr = [];
        arr.push($('.price-block--checkout-summary--total .price-block__amount').getText());
        return arr[0].replace('\n', ',');
    }
}
