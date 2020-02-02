import BasePage from './BasePage';
import { continueWithCookiesButton, zonvakantiesSeeButton } from '../model/Constants';

export default class HomePage extends BasePage {
    open() {
        super.open('/');
        return this;
    }

    closeCookiesBar() {
        $(continueWithCookiesButton).click();
        return this;
    }

    clickZonvakantiesSeeButton() {
        $(zonvakantiesSeeButton).click();
        return this;
    }
}
