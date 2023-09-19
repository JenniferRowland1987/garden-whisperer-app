import { Component } from '@angular/core';
import { PlantService } from '../plant.service';

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

    onSubmit(): void{
      
    }
}

