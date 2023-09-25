import { Component, Input, OnInit } from '@angular/core';
import { GardenService } from '../garden.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from '../models/plant.model';
import { GardenPlant } from '../models/garden.model';
import { PlantService } from '../plant.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.css']
})

export class EditPlantComponent implements OnInit {
  id: number = 0;
  perenualId: number = 0;
 plant: GardenPlant = {
    id: 0,
    userId: 0,
    scienificName: '', 
    commonName: '',
    nickName: '',
    datePlanted: new Date(),
    notes: '',  
    lastWater: new Date(),
    sun: '',
    lastFertilization: new Date(),
    isHealthy: true,    
    perenualId: 0
  };
  editPlant: GardenPlant = {
    id: 0,
    userId: 0,
    scienificName: '', 
    commonName: '',
    nickName: '',
    datePlanted: new Date(),
    notes: '',  
    lastWater: new Date(),
    sun: '',
    lastFertilization: new Date(),
    isHealthy: true,    
    perenualId: 0
};
isEditing: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gardenService: GardenService,
    private plantService: PlantService,
    private user: UserService
  ) {}


  ngOnInit() {
  
    this.route.paramMap.subscribe((params) => {
      const paramName = params.get('id');
      if (paramName !== null) {
        this.id = +paramName;
        console.log(this.id)

        this.fetchPlantData(this.id);       
      }
    });
  }

  fetchPlantData(id: number){
    this.gardenService.getPlant(id).subscribe(
      (data: GardenPlant) => {
        this.plant = data;
        console.log('plant you brought in:', this.plant);
      },
      (error) =>{
        console.error('idk babe, its a mess', error)
      }
      );
  }

  onSubmit(): void {
    if (this.plant) {      
     
      const mergedData: GardenPlant = {
        id: this.plant.id,
        userId: this.user.getUserID(), 
        scienificName: this.plant.scienificName,
        commonName: this.plant.commonName, 
        nickName: this.editPlant.nickName,
        datePlanted: this.plant.datePlanted,
        notes: this.editPlant.notes,
        sun: this.plant.sun,
        lastWater: this.editPlant.lastWater,
        lastFertilization: this.editPlant.lastFertilization,
        isHealthy: this.editPlant.isHealthy,
        perenualId: this.plant.perenualId
      };

      console.log(mergedData);

      this.gardenService.updatePlant(this.id, mergedData).subscribe((response) => {
        console.log(this.id)
        console.log('Plant updated successfully!', response);     
        
        this.router.navigate(['/plant-details', this.plant.id])
        
      });
  
  }
} 

getPlant(id: number){
  this.gardenService.getPlant(id).subscribe(() => {
    console.log('Plant updated successfully!');
    this.router.navigate(['/plant-details', id]);
  });
}


updatePlant() {
  if (this.plant) {
  this.gardenService.updatePlant(this.id, this.plant).subscribe(() => {
    console.log('Plant updated successfully!');
    this.router.navigate(['/plant-details', this.id]);
  });
} 
}
navigateToGarden(){
  this.router.navigate(['/garden', this.user.getUserID()]);
}

navigateToDoctor(){
  this.router.navigate(['/plant-dr', this.plant.commonName]);
}
navigateToPlantDetails(){
  this.router.navigate(['/plant-details', this.plant.id]);
}
}
