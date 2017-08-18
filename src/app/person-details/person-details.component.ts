import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  name : string;
  forename : string;
  photo : Blob;

  constructor() {
    this.name = "Jeanne";
    this.forename = "Dupont";
  }

  ngOnInit() {}

}
