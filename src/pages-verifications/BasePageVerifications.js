import {
    logo,
    header,
    footer,
    searchBar,
    viewedVacationsIndicator,
    loginButton,
    contactPhoneNumber,
    navigationBar,
    trustSection,
    footerLinks,
    helpButton,
    newsLetterSubscriptionField,
    cookiesBar
} from '../model/Constants';

export default class BasePageVerifications {
    logoLoaded() {
        $(logo).waitForDisplayed();
        return this;
    }

    headerLoaded() {
        $(header).waitForDisplayed();
        return this;
    }

    footerLoaded() {
        $(footer).waitForDisplayed();
        return this;
    }

    searchBarLoaded() {
        $(searchBar).waitForDisplayed();
        return this;
    }

    viewedVacationsIndicatorLoaded() {
        $(viewedVacationsIndicator).waitForDisplayed();
        return this;
    }

    loginButtonLoaded() {
        $(loginButton).waitForDisplayed();
        return this;
    }

    contactPhoneNumberLoaded() {
        $(contactPhoneNumber).waitForDisplayed();
        return this;
    }

    navigationBarLoaded() {
        $(navigationBar).waitForDisplayed();
        return this;
    }

    trustSectionLoaded() {
        $(trustSection).waitForDisplayed();
        return this;
    }

    footerLinksLoaded() {
        $(footerLinks).waitForDisplayed();
        expect($$('.courtesy > ul > li').length).to.equal(7);
        return this;
    }

    helpButtonLoaded() {
        $(helpButton).waitForDisplayed();
        return this;
    }

    newsLetterSubscriptionFieldLoaded() {
        $(newsLetterSubscriptionField).waitForDisplayed();
        return this;
    }

    cookiesBarLoaded() {
        $(cookiesBar).waitForDisplayed();
        return this;
    }

    mainElementsAreLoaded() {
        this.logoLoaded()
            .headerLoaded()
            .footerLoaded()
            .searchBarLoaded()
            .viewedVacationsIndicatorLoaded()
            .loginButtonLoaded()
            .contactPhoneNumberLoaded()
            .navigationBarLoaded()
            .trustSectionLoaded()
            .footerLinksLoaded()
            .helpButtonLoaded()
            .newsLetterSubscriptionFieldLoaded();
        return this;
    }
}
