import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})


export class PersonDetailsComponent implements OnInit {
@Input() name: string;
@Input() forename: string;

  photo : Blob;

  
  constructor() {

  }

  ngOnInit() {}

}
