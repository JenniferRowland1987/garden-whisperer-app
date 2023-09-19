import { Component } from '@angular/core';
import { GardenService } from '../garden.service';
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

    constructor(private gardenService : GardenService ){}

    onSubmit(): void {
      this.gardenService.addPlant(this.newPlant).subscribe((response) => {
        console.log('Plant added successfully!', response);
        this.newPlant = {}; 
      });
    }
}

