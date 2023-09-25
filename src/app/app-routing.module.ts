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
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'addplant', component: AddPlantComponent},
  {path: 'edit-plant/:id', component: EditPlantComponent},
  {path: 'garden/:userId', component: GardenPageComponent}, //updated routing to take a userid parameter
  {path: 'login', component: LoginComponent},
  {path: 'plant-details/:id', component: PlantDetailsComponent},
  {path: 'plant-dr/:commonName', component: PlantDrComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'pest-details/:pestId', component: PestDetailsComponent},
  {path: 'search-plant', component: SearchPlantComponent},
  {path: 'create-account', component: CreateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
