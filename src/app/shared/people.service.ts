import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Person } from './person';
import { Coordinates } from './coordinates';
import {constants} from '../utils/constants';

@Injectable()
export class PeopleService {
    people: Array<Person>;
    displayedPeople: Array<Person>;

    constructor(private http: HttpClient) { }

    getPeople(): Promise<Array<Person>> {
        return new Promise((resolve, reject) => {
            this.http.get(constants.URI_ROOT + '/people').subscribe(data => {
                // Read the result field from the JSON response.
                let result = data['result'];
                resolve(result);
            });
        });
    }

    /**
     * Get coordinates from WS for one address
     */
    getCoordinate(address): Promise<Coordinates> {
        const params = new HttpParams().set('format', "json").set('addressdetails', "0").set('q', address);
        return new Promise((resolve, reject) => {
            this.http.get(constants.URI_NOMINATIM, { params: params }).subscribe(data => {
                resolve(data[0]);
            });
        });
    }

    /**
     * Return an array of people if the coordinates match
     * @param people 
     * @param coord 
     */
    findPeopleByCoordinates(people, coord): Array<Person> {
        return people.filter((person) => {
            return person.company.lat == coord.lat && person.company.lon == coord.lon;
        })
    }

    getCompanyName(people) {
        return people && people[0] && people[0].company;
    }

    /**
     * Get number of displayed people 
     * @param people 
     */
    getPeopleNumber(people): number {
        return people.length;
    }

    getPeopleFromTrombi() {
        return new Promise((resolve, reject) => {
            this.http.get(constants.URI_TROMBI_ROOT + constants.URI_TROMBI_REST + constants.URI_TROMBI_USER).subscribe(data => {
                resolve(data);
            });
        });
    }

    findPictureFromTrombi(uid, trombi) {
        return trombi.users.find((user) => {
            return user.uid === uid;
        })
    }

}