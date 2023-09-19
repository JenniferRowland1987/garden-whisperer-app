import { Component } from '@angular/core';
import { PlantService } from '../plant.service';
import { PlantDetailsComponent } from '../plant-details/plant-details.component';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent {
    newPlant: any ={
      nickname: '',
      dateplanted: '',
      notes: '',
      lastwater: '',
      lastfertilization: ''
    }

    constructor(private plantService : PlantService ){}
// this should be calling the garden service because we are adding plants to the garden, the plant service accesses the perenual api. 
/*
    onSubmit(): void{
      const plantName = this.newPlant.commonName
      this.plantService.getPlant(plantName).subscribe((data) => {
       
        this.newPlant.commonName = data.commonName;
        this.newPlant.scientificName = data.scientificName;
        this.newPlant.sun = data.sun;
      });
    }  
    */
}

