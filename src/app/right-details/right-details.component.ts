import { Component, OnInit } from '@angular/core';
import { bootstrap } from '../people.service';
import { PeopleService } from '../people.service';
import { Input } from '@angular/core';

import { Person } from '../shared/person';

@Component({
  selector: 'app-right-details',
  templateUrl: './right-details.component.html',
  styleUrls: ['./right-details.component.css']
})
export class RightDetailsComponent {

  @Input() people: Array<Person>;
  constructor(private peopleService: PeopleService) {
  }

}
