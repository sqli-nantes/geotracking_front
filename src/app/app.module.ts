import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RightDetailsComponent } from './right-details/right-details.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RightDetailsComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers:[
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
