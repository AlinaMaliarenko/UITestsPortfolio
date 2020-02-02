export function at(pageClass) {
    return typeof pageClass === 'function' ? new pageClass() : pageClass;
}

export function open(pageClass) {
    return at(pageClass).open();
}

export function assertThat(pageClass) {
    return at(pageClass);
}
