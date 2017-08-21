export class Person {
    _id : string;
    name : string;
    forename : string;
    company : {
        "name": string,
        "address": string
    }
}