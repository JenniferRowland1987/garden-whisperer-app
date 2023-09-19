import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { EditPlantComponent } from './edit-plant/edit-plant.component';
import { GardenPageComponent } from './garden-page/garden-page.component';
import { LoginComponent } from './login/login.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { PlantDrComponent } from './plant-dr/plant-dr.component';
import { WeatherComponent } from './weather/weather.component';
import { PestDetailsComponent } from './pest-details/pest-details.component';
import { SearchPlantComponent } from './search-plant/search-plant.component';


const routes: Routes = [

  {path: '', redirectTo: 'garden-page', pathMatch: 'full'},
  {path: 'addplant', component: AddPlantComponent},
  {path: 'edit-plant', component: EditPlantComponent},
  {path: 'garden', component: GardenPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'plant-details', component: PlantDetailsComponent},
  {path: 'plant-dr', component: PlantDrComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'pest-details', component: PestDetailsComponent},
  {path: 'search-plant', component: SearchPlantComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
