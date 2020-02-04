import BasePage from './BasePage';
import { price } from './BookVacation2Step';

export default class BookVacation3Step extends BasePage {
    getPrice() {
        return $(price)
            .getText()
            .replace('\n', ',');
    }
}
