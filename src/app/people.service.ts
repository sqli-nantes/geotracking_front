import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { People } from './shared/people';
import { Person } from './shared/person';

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
    // people = [];
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

    /**
     * Get every address from people
     */
    // getCoordinates(people) {
    //     // if(!this.people){     this.getPeople(); }
    //     people.forEach((person) => {
    //         this.getCoordinate(person.address).then((data) => {
    //             person.coordinates = {}
    //             person.coordinates.lat = data["lat"];
    //         })
    //     })
    // }

    //http://nominatim.openstreetmap.org/?format=json&addressdetails=0&q=10+rue+de+l
    //aponie+Nantes
    /**
     * Get coordinates from WS for one address
     */
    getCoordinate(address): Promise<object> {
        const params = new HttpParams().set('format', "json").set('addressdetails', "0").set('q', address);
        return new Promise((resolve, reject) => {
            this.http.get('http://nominatim.openstreetmap.org', { params: params }).subscribe(data => {
                resolve(data[0]);
            });
        });
    }
}

export { bootstrap }