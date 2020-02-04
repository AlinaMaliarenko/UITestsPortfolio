import BasePage from './BasePage';

const accomodation = index => `#search-results-list > li:nth-child(${index})`;
const accomodationLink = index => `${accomodation(index)} > a`;
const accomodationHeader = index => `${accomodation(index)} .acco-links.bottom .acco-title.single`;
const accomodationCountry = index => `${accomodation(index)} .acco-links.bottom li:nth-child(1)`;
const accomodationDate = index => `${accomodation(index)} .travel-date dd`;
const transportArrangedButton = '.transport-arranged';
export const airoportPicker = departureAiroport => `//span[text()="${departureAiroport}"]`;
export const boardTypePicker = type => `//span[text()="${type}"]`;

export default class SearchResultPage extends BasePage {
    checkTransportArranged() {
        const temp = $(transportArrangedButton).getAttribute('class');
        if (temp.match(/active/g) == null) $(transportArrangedButton).click();
        return this;
    }

    selectAiroport(departureAiroport) {
        $(airoportPicker(departureAiroport)).isClickable();
        $(airoportPicker(departureAiroport)).click();
        return this;
    }

    selectBoardType(type) {
        $(boardTypePicker(type)).isClickable();
        $(boardTypePicker(type)).click();
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
            $(accomodationDate(index))
                .getText()
                .split(' (')[0]
        );
        return arr;
    }
}
