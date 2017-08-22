import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})

export class PersonDetailsComponent implements OnInit {
  @Input() name: string;
  @Input() forename: string;
  @Input() image: string;

  photo: Blob;

  constructor() {

  }

  ngOnInit() { }

}
