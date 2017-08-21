import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

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
    constructor(private http : HttpClient) {}

    getPeople(): Promise<Array<object>>{
        return new Promise((resolve, reject) => {
            this
                .http
                .get('http://localhost:8080/people')
                .subscribe(data => {
                    // Read the result field from the JSON response.
                    let result = data['result'];
                    resolve(result);
                });
        });

    }
}

export {bootstrap}