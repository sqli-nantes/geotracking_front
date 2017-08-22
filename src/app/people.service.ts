import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Person } from './shared/person';
import { Coordinates } from './shared/coordinates';
const bootstrap = [
    {
        name: "Jeanne",
        forename: "Dupont"
    }, {
        name: "Pierre",
        forename: "Art"
    }, {
        name: "Jean",
        forename: "Diu"
    }, {
        name: "Luc",
        forename: "Cert"
    }
]

@Injectable()
export class PeopleService {
    people : Array<Person>;
    displayedPeople: Array<Person>;

    constructor(private http: HttpClient) { }

    getPeople(): Promise<Array<Person>> {
        return new Promise((resolve, reject) => {
            this.http.get('http://localhost:8080/people').subscribe(data => {
                // Read the result field from the JSON response.
                let result = data['result'];
                resolve(result);
            });
        });

    }


    //http://nominatim.openstreetmap.org/?format=json&addressdetails=0&q=10+rue+de+l
    //aponie+Nantes
    /**
     * Get coordinates from WS for one address
     */
    getCoordinate(address): Promise<Coordinates> {
        const params = new HttpParams().set('format', "json").set('addressdetails', "0").set('q', address);
        return new Promise((resolve, reject) => {
            this.http.get('http://nominatim.openstreetmap.org', { params: params }).subscribe(data => {
                resolve(data[0]);
            });
        });
    }


    findPeopleByCoordinates(people, coord): Array<Person>{
       return people.filter((person)=>{
            return person.lat == coord.lat && person.lon == coord.lon;
        })
    }

    getCompanyName(people){
        return people && people[0] && people[0].company;
    }
}

export { bootstrap }