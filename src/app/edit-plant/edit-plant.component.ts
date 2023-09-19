import { Component } from '@angular/core';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.css']
})
export class EditPlantComponent {
  editPlant: any ={
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

