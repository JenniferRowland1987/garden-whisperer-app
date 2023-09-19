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
    const plantName = this.editPlant.commonName
    this.plantService.getPlant(plantName).subscribe((data) => {
     
      this.editPlant.commonName = data.commonName;
      this.editPlant.scientificName = data.scientificName;
      this.editPlant.sun = data.sun;
    });
  }
} 

