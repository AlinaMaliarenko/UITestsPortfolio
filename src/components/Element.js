import BaseElement from './BaseElement';

export default class Element extends BaseElement {
    static of(value) {
        return new Element(value);
    }

    shouldHaveText(text) {
        browser.waitUntil(() => expect(this.getText()).to.have.string(text));
    }

    shouldHaveAttribute(attributeName, text) {
        browser.waitUntil(() => expect(this.getAttributeValue(attributeName)).to.have.string(text));
    }
}
