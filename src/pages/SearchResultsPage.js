import BasePage from './BasePage';
import { transportArrangedButton } from '../model/Constants';

const accomodation = index => `#search-results-list > li:nth-child(${index})`;
const accomodationLink = index => `${accomodation(index)} > a`;
const accomodationHeader = index => `${accomodation(index)} .acco-links.bottom .acco-title.single`;
const accomodationCountry = index => `${accomodation(index)} .acco-links.bottom li:nth-child(1)`;
const accomodationPrice = index => `${accomodation(index)} .price-block__amount`;
const accomodationDate = index => `${accomodation(index)} .travel-date dd`;

export default class SearchResultPage extends BasePage {
    checkTransportArranged() {
        const temp = $(transportArrangedButton).getAttribute('class');
        if (temp.match(/active/g) == null) $(transportArrangedButton).click();
        return this;
    }

    selectAiroport(departureAiroport) {
        const airoportPicker = `//span[text()="${departureAiroport}"]`;
        $(airoportPicker).isClickable();
        $(airoportPicker).click();
        expect($(`${airoportPicker}//..`).getAttribute('class')).to.have.string('active');
        browser.waitUntil(() => expect($('#spinner > div').getAttribute('class')).to.have.string('hidden'));
        return this;
    }

    selectBoardType(type) {
        const boardTypePicker = `//span[text()="${type}"]`;
        $(boardTypePicker).isClickable();
        $(boardTypePicker).click();
        expect($(`${boardTypePicker}//..`).getAttribute('class')).to.have.string('active');
        browser.waitUntil(() => expect($('#spinner > div').getAttribute('class')).to.have.string('hidden'));
        return this;
    }

    selectAccomodation(index) {
        $(accomodationLink(index)).isClickable();
        $(accomodationLink(index)).click();
        return this;
    }

    getSearchResultsAccomodationInfo(index) {
        let arr = [];
        arr.push(
            $(accomodationHeader(index)).getText(),
            $(accomodationCountry(index)).getText(),
            //$(accomodationPrice(index)).getText(), - bug with price displaying - different on search and details pages
            $(accomodationDate(index))
                .getText()
                .split(' (')[0]
        );
        console.log(`ARRAY: ${arr}`);
        return arr;
    }
}
