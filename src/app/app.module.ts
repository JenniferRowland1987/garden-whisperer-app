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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPlantComponent } from './search-plant/search-plant.component';
import { PestDetailsComponent } from './pest-details/pest-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    GardenPageComponent,
    PlantDetailsComponent,
    EditPlantComponent,
    AddPlantComponent,
    LoginComponent,
    PlantDrComponent,
    PestDetailsComponent,
    PlantDetailsComponent,
    SearchPlantComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
