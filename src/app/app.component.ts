import { Component } from '@angular/core';
import 'leaflet';
import { PeopleService } from './people.service';
import { Person } from './shared/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PeopleService]
})

export class AppComponent {
  title = 'Géolocalisation SQLI';
  people = [];
  displayedPeople = [];
  mymap;
  show: boolean;
  company: any;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.mymap = L.map('mapid').setView([47.2172500, -1.5533600], 12);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoiam9oYW5uc3FsaSIsImEiOiJjajZodGk5cWswb2VyMnFuaHEyOTl3emZvIn0.x9LnTqwNTEwH5k5Yy13v2Q'
    }).addTo(this.mymap);

    //Get People
    this.peopleService.getPeople().then((data) => {
      data.forEach((person) => {
        this.people.push(person);
        this.peopleService.getCoordinate(person.company.address).then((coord) => {
          person.lat = coord.lat;
          person.lon = coord.lon;
          this.drawCircleMarker(coord, null);
        })
      })
    });
  }

  /**
   * Draw new circleMarker
   * @param coord 
   * @param color 
   */
  drawCircleMarker(coord, color) {
    if (!this.markerExists(coord)) {
      let marker = L.circleMarker([coord.lat, coord.lon], { radius: 30 })
      marker.options.color = color || "#957944";
      marker.addTo(this.mymap);
      marker.on('click', (evt) => {
        this.mymap.removeLayer(marker);
        this.setInitialColor();
        this.drawCircleMarker({ lat: (marker as any)._latlng.lat, lon: (marker as any)._latlng.lng }, "#1c1c1b");
        this.displayPeopleOnMarkerClick(coord);
      })
    }



  }
  /**
   * Check if a marker already exists
   * @param coord 
   */
  markerExists(coord) {
    for (let [key, marker] of Object.entries(this.mymap._layers)) {
      if (marker._latlng && marker._latlng.lat == coord.lat && marker._latlng.lng == coord.lon) {
        return true;
      }
    }
    return false;
  }

  /**
   * Set initial color to every marker
   */
  setInitialColor() {
    for (let [key, marker] of Object.entries(this.mymap._layers)) {
      if (marker._latlng && marker._latlng.lat) {
        this.mymap.removeLayer(marker);
        this.drawCircleMarker({ lat: marker._latlng.lat, lon: marker._latlng.lng }, "#957944");
      }
    }

  }

  displayPeopleOnMarkerClick(coord) {
    this.displayedPeople = this.peopleService.findPeopleByCoordinates(this.people, coord);
    this.show = true;
    this.company = this.peopleService.getCompanyName(this.displayedPeople);
    console.log(this.company);
  }

  backToMap(showChild: boolean){
    this.show = false;
    this.setInitialColor();
  }
}
