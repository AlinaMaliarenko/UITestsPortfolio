export default class BasePageVerifications {
    arraysEqual(array1, array2) {
        expect(array2).to.have.members(array1);
        return this;
    }
    arraysInclude(array1, array2) {
        expect(array1).to.include.members(array2);
        return this;
    }

    valuesEqual(value1, value2) {
        expect(value1).to.equal(value2);
        return this;
    }
}
