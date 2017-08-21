import { Component } from '@angular/core';
import 'leaflet';
import {PeopleService} from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PeopleService]
})

export class AppComponent {
  title = 'Géolocalisation SQLI';
 

  constructor(){
  }

 ngOnInit() {
     var mymap = L.map('mapid').setView([47.2172500, -1.5533600], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoiam9oYW5uc3FsaSIsImEiOiJjajZodGk5cWswb2VyMnFuaHEyOTl3emZvIn0.x9LnTqwNTEwH5k5Yy13v2Q'
       }).addTo(mymap);

       L.marker([47.2572500, -1.5533600], {riseOnHover:true}).addTo(mymap);
       L.circleMarker([47.2072500, -1.5533600], {radius:30}).addTo(mymap);

  }
}
