import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { bootstrap } from '../people.service';
import { PeopleService } from '../people.service';

import { Person } from '../shared/person';

@Component({
  selector: 'app-right-details',
  templateUrl: './right-details.component.html',
  styleUrls: ['./right-details.component.css']
})
export class RightDetailsComponent {

  @Input() people: Array<Person>;
  @Input() company: string;
  @Output() showChild = new EventEmitter<boolean>();
  constructor(private peopleService: PeopleService) {
  }

  backToMap(){
    this.showChild.emit(false);
  }

}
