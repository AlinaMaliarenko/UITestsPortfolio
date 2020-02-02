export default class BasePage {
    open(url) {
        browser.url(url);
        return this;
    }
}
