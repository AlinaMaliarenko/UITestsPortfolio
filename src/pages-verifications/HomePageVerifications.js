import BasePageVerifications from './BasePageVerifications';
const verticalCarousel = '.verticarousel.new-homepage';
const popularDestinationsSection = '#popular-destinations';
const topThreeThemesSection = '.content.geo.top-three-themes';
const flightsFromAirports = '.flights-from-airports';

export default class HomePageVerifications extends BasePageVerifications {
    verticalCarouselLoaded(lenght) {
        $(verticalCarousel).waitForDisplayed();
        expect($$('.main article').length).to.equal(lenght);
        return this;
    }

    flightsFromAirportsLoaded(lenght) {
        $(flightsFromAirports).waitForDisplayed();
        expect($$('.flights-from-airports > ul > li').length).to.equal(lenght);
        return this;
    }

    popularDestinationsSectionLoaded(lenght) {
        $(popularDestinationsSection).waitForDisplayed();
        expect($$('div.stark-slider__rail > div').length).to.equal(lenght);
        return this;
    }

    topThreeThemesSectionLoaded(lenght) {
        $(topThreeThemesSection).waitForDisplayed();
        expect($$('.content.geo.top-three-themes a').length).to.equal(lenght);
        return this;
    }

    homePageElementsLoaded() {
        this.verticalCarouselLoaded(8)
            .flightsFromAirportsLoaded(6)
            .topThreeThemesSectionLoaded(3)
            .popularDestinationsSectionLoaded(24);
        return this;
    }
}
