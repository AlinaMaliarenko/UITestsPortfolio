import BasePageVerifications from './BasePageVerifications';
import Element from '../components/Element';

export const bookingRoot = '#booking-root > div';

export default class BookVacation2StepVerifications extends BasePageVerifications {
    step2opened() {
        Element.of(bookingRoot).shouldHaveAttribute('class', 'step-2');
    }
}
