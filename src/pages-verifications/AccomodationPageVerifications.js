import BasePageVerifications from './BasePageVerifications';
import Element from '../components/Element';

export const tripsCounter = '#header-heart span';

export default class AccomodationPageVerifications extends BasePageVerifications {
    viewedSavedTripsIconUpdated(previousCounter) {
        let currentCounter = Element.of(tripsCounter).getText();
        previousCounter = parseInt(previousCounter);
        browser.waitUntil(() => expect(currentCounter).to.equal(`${parseInt(previousCounter) + 1}`));
    }
}
