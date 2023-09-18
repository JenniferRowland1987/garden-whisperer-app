import { Component } from '@angular/core';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent {
    newPlant: any ={
      scienificname: '',
      commonname: '',
      nickname: '',
      dateplanted: '',
      notes: '',
      sun: '',
      lastwater: '',
      lastfertilization: ''
      
    }

    constructor(private plantService : PlantService ){}

    onSubmit(): void{
      
    }
}

