import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { GardenPageComponent } from './garden-page/garden-page.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { EditPlantComponent } from './edit-plant/edit-plant.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { LoginComponent } from './login/login.component';
import { PlantDrComponent } from './plant-dr/plant-dr.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    GardenPageComponent,
    PlantDetailsComponent,
    EditPlantComponent,
    AddPlantComponent,
    LoginComponent,
    PlantDrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
