const logo = '.logo-vd';
const header = '#header-component';
const footer = 'footer.action';
const searchBar = '.autocomplete-form';
const loginButton = 'a.login';
const navigationBar = '.navigation';
const cookiesBar = '.sticky.bottom';

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
    loginButtonLoaded() {
        $(loginButton).waitForDisplayed();
        return this;
    }
    navigationBarLoaded() {
        $(navigationBar).waitForDisplayed();
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
            .loginButtonLoaded()
            .navigationBarLoaded();
        return this;
    }
}
