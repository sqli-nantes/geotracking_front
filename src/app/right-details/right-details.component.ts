import { Component, OnInit } from '@angular/core';
import { bootstrap }  from '../people.service';
import { PeopleService }  from '../people.service';
import { Input } from '@angular/core';

import { Person } from '../shared/person';

@Component({
  selector: 'app-right-details',
  templateUrl: './right-details.component.html',
  styleUrls: ['./right-details.component.css']
})
export class RightDetailsComponent implements OnInit {

  @Input() people: Array<Person>;
  constructor(private peopleService: PeopleService) {
    // this.people = [];
  }

  ngOnInit() {
    console.log("this.people");
    console.log(this.people);
    // this.people = this.peopleService.displayedPeople;
    // bootstrap.forEach((person) => {
    //   this
    //     .people
    //     .push(person);
    // })
    //
    //  this.peopleService.getPeople().then((data)=>{
    //         data.forEach((person) => {
    //         this
    //           .people
    //           .push(person);
    //         // this.peopleService.getCoordinates(person.company.address)
    //   })


    //   });

  }

}
