import BasePageVerifications from './BasePageVerifications';
import { bookingRoot } from './BookVacation2StepVerifications';
import Element from '../components/Element';

export default class BookVacation3StepVerifications extends BasePageVerifications {
    step3opened() {
        Element.of(bookingRoot).shouldHaveAttribute('class', 'step-3');
    }
}
