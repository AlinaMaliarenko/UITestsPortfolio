import BasePage from './BasePage';
import Element from '../components/Element';

const tripTitles = '.acco-links.bottom .acco-title.single';

export default class SavedTripsPage extends BasePage {
    defineAccomodationIndexByTripName(searchName) {
        let namesArray = Element.of(tripTitles).getAllValues();
        namesArray = namesArray.map(title => title.substring(0, title.indexOf('*')).trim());
        for (let i = 0; i < namesArray.length; i++) {
            if (namesArray[i] == searchName) return i + 1;
        }
    }
}
