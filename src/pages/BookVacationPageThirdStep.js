import BasePage from './BasePage';

export default class BookVacationPageThirdStep extends BasePage {
    getPrice() {
        const arr = [];
        arr.push($('.price-block--checkout-summary--total .price-block__amount').getText());
        return arr[0].replace('\n', ',');
    }
}
