import { Component } from '@angular/core';
import { PlantService } from '../plant.service';
import { GardenService } from '../garden.service';
import { PlantDrService } from '../plant-dr.service';



@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent {

  constructor(
    private gardenService:GardenService,
    private plantService: PlantService,
    private plantDrService: PlantDrService
    ){}
    ngOnInit() {
     
      this.plantService.searchPlantsByCommon
      this.gardenService.getPlant
      this.plantDrService.getPests
  
    }
  //this pulls data from the api as well as from the added plant and route to the pest api -
  // this is where it will ask you if youre having problems
}

export class perenualPlant {
  id: number = 0;
  common_name: string = '';
  scientific_name: string[] = [];
  other_name: string[] = [];
  cycle: string = '';
  watering: string = '';
  sunlight: string[] = [];

}