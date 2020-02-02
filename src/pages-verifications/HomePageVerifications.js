import BasePageVerifications from './BasePageVerifications';
import {
    verticalCarousel,
    flightsFromAirports,
    feedbackLabel,
    popularDestinationsSection,
    topThreeThemesSection
} from '../model/Constants';

export default class HomePageVerifications extends BasePageVerifications {
    verticalCarouselLoaded() {
        $(verticalCarousel).waitForDisplayed();
        expect($$('.main article').length).to.equal(8);
        return this;
    }

    flightsFromAirportsLoaded() {
        $(flightsFromAirports).waitForDisplayed();
        expect($$('.flights-from-airports > ul > li').length).to.equal(6);
        return this;
    }
    // not used yet
    feedbackLabelLoaded() {
        $(feedbackLabel).waitForDisplayed();
        return this;
    }

    popularDestinationsSectionLoaded() {
        $(popularDestinationsSection).waitForDisplayed();
        expect($$('div.stark-slider__rail > div').length).to.equal(24);
        return this;
    }

    topThreeThemesSectionLoaded() {
        $(topThreeThemesSection).waitForDisplayed();
        expect($$('.content.geo.top-three-themes a').length).to.equal(3);
        return this;
    }

    homePageElementsLoaded() {
        this.verticalCarouselLoaded()
            .flightsFromAirportsLoaded()
            .topThreeThemesSectionLoaded()
            .popularDestinationsSectionLoaded();
        return this;
    }
}
