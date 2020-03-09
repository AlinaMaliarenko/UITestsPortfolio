export default class BaseElement {
    constructor(selector) {
        this.selector = selector;
    }
    get element() {
        return $(this.selector);
    }

    get elements() {
        return $$(this.selector);
    }

    shouldBeDisplayed() {
        browser.waitUntil(() => this.element.waitForDisplayed());
        return this.element;
    }

    shouldBeAllDisplayed() {
        this.elements.forEach(el => {
            el.isExisting();
        });
        return this.elements;
    }

    getAllValues() {
        const texts = this.shouldBeAllDisplayed().map(el => el.getText());
        return texts;
    }

    click() {
        this.shouldBeDisplayed().click();
    }

    getText() {
        return this.shouldBeDisplayed().getText();
    }

    shouldExist() {
        browser.waitUntil(() => this.element.isExisting());
        return this.element;
    }

    getAttributeValue(attributeName) {
        return this.shouldExist().getAttribute(attributeName);
    }

    enterValue(text) {
        this.shouldBeDisplayed().setValue(text);
    }

    selectByVisibleText(value) {
        this.shouldExist().selectByVisibleText(value);
    }
}
