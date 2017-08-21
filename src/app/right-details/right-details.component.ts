import { Component, OnInit } from '@angular/core';
import {bootstrap} from '../people.service';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-right-details',
  templateUrl: './right-details.component.html',
  styleUrls: ['./right-details.component.css']
})
export class RightDetailsComponent implements OnInit {
people;
constructor(private peopleService: PeopleService) {
  this.people = [];
}

ngOnInit() {
  // bootstrap.forEach((person) => {
  //   this
  //     .people
  //     .push(person);
  // })
  //
 this.peopleService.getPeople().then((data)=>{
        data.forEach((person) => {
        this
          .people
          .push(person);
        // this.peopleService.getCoordinates(person.company.address)
  })

        
  });

}

}
