import BasePage from './BasePage';
export const thirdStepButton = '.btn.btn--theme--primary';
export const price = '.price-block--checkout-summary--total .price-block__amount';

export default class BookVacation2Step extends BasePage {
    clickThirdStepButton() {
        $(thirdStepButton).click();
        return this;
    }
    getPrice() {
        return $(price)
            .getText()
            .replace('\n', ',');
    }
}
