import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PetsComponent } from './pets/pets.component';
import { HttpService } from './http.service';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { NewComponent } from './new/new.component';
import { NewFormComponent } from './new-form/new-form.component';
import { DetailsComponent } from './details/details.component';
import { ShelterComponent } from './shelter/shelter.component';
import { EditFormComponent } from './edit-form/edit-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetsComponent,
    NewComponent,
    NewFormComponent,
    DetailsComponent,
    ShelterComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
