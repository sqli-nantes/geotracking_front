import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { bootstrap } from '../people.service';
import { PeopleService } from '../people.service';

import { Person } from '../shared/person';

@Component({
  selector: 'app-right-details',
  templateUrl: './right-details.component.html',
  styleUrls: ['./right-details.component.css']
})
export class RightDetailsComponent implements OnChanges {

  @Input() people: Array<Person>;
  @Input() companyName: string;
  @Output() showChild = new EventEmitter<boolean>();
  peopleNumber: number;
  constructor(private peopleService: PeopleService) {
  }

  backToMap() {
    this.showChild.emit(false);
  }

  //In this case onChanges is used as a trigger to get the right number of People
  ngOnChanges(changes: SimpleChanges) {
    this.peopleNumber = this.peopleService.getPeopleNumber(this.people);
  }

}
