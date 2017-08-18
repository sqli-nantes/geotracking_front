import { Component, OnInit } from '@angular/core';
import {bootstrap} from '../person-details.service';

@Component({
  selector: 'app-right-details',
  templateUrl: './right-details.component.html',
  styleUrls: ['./right-details.component.css']
})
export class RightDetailsComponent implements OnInit {
people;
  constructor() {
    this.people = [];
   }

  ngOnInit() {
    bootstrap.forEach((person)=>{
      this.people.push(person);
    })
  }

}
