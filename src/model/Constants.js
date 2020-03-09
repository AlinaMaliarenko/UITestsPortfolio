import { at, open } from '../utils/page-factory';
import homePage from '../pages/HomePage';

export function openHomePage() {
    open(homePage);
    at(homePage).closeCookiesBar();
}

export const pick = {
    country: 'Spanje',
    month: 'mei 2020',
    date: '1',
    duration: '11-16',
    personen: '2',
    airoport: 'Amsterdam (Schiphol)',
    board: 'All inclusive',
    transport: 'vlucht',
    index: 1
};

export const carTrip = {
    country: 'Frankrijk',
    province: 'Aquitaine',
    month: 'juli 2020',
    date: '25',
    duration: '2-5',
    personen: '3',
    adults: '1',
    children: '1',
    babies: '1',
    board: 'Logies',
    transport: 'vlucht',
    transportFacet: 'Eigen vervoer',
    index: 2,
    accomodationType: 'Camping'
};

export const user1 = {
    gender: 'M',
    fName: 'Jan',
    lName: 'Visser',
    dob: '10 Oktober 1972',
    nationality: 'Nederlandse'
};

export const user2 = {
    gender: 'F',
    fName: 'Mirjam',
    lName: 'Visser',
    dob: '3 April 1975',
    nationality: 'Nederlandse'
};

export const contact = {
    land: 'Nederland',
    postcode: '1852TB',
    houseNum: '23',
    street: 'Termijen',
    residence: 'Heiloo',
    email: 'jan.visser.dummy@gmail.com',
    phone: '0612345678'
};

export const emergency = {
    name: 'Fam. Visser',
    phone: '0612345687'
};

export const verifyPerson = {
    first: 1,
    second: 2,
    checkbox1: 2,
    checkbox2: 3
};
