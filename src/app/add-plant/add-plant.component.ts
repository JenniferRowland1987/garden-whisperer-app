import { Component, OnInit } from '@angular/core';
import { GardenService } from '../garden.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../plant.service';
import { UserService } from '../user.service';
import { Plant } from '../models/plant.model';
import { GardenPlant } from '../models/garden.model';
import { first } from 'rxjs';
import { DefaultImage } from '../models/plant.model';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {
  id: number = 0;
  perenualId: number = 0;
  plant: Plant = {
    id: 0,
    common_name: '',
    scientific_name: '',
    other_name: [],
    cycle: '',
    watering: '',
    sunlight: [],
    default_image: {
      license: 0,
      license_name: '',
      license_url: '',
      original_url: '',
      regular_url: '',
      medium_url: '',
      small_url: '',
       thumbnail: ''
    }
  };
  newPlant: GardenPlant = {
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

    constructor(private gardenService : GardenService,
      private plantService: PlantService,
      private route: ActivatedRoute,
      private user: UserService,
      private router: Router){}

   
  ngOnInit() {
     this.route.paramMap.subscribe((params) => {
       const paramName = params.get('id');
       if (paramName !== null) {
         this.perenualId = +paramName;
         console.log(this.perenualId)

         this.fetchPlantData(this.perenualId);       
       }
     });
  }

  fetchPlantData(perenualId: number){
    this.plantService.getPlantById(perenualId).subscribe(
      (data: Plant) => {
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
      const firstScientificName = this.plant.scientific_name[0];
      const firstSunlight = this.plant.sunlight[0];

      const mergedData: GardenPlant = {
        
        userId: this.user.getUserID(), 
        scienificName: firstScientificName,
        commonName: this.plant.common_name, 
        nickName: this.newPlant.nickName,
        datePlanted: this.newPlant.datePlanted,
        notes: this.newPlant.notes,
        sun: firstSunlight,
        lastWater: this.newPlant.lastWater,
        lastFertilization: this.newPlant.lastFertilization,
        isHealthy: this.newPlant.isHealthy,
        perenualId: this.plant.id, 
      };

      console.log(mergedData);
  
     
      this.gardenService.addPlant(mergedData).subscribe((response) => {
        console.log('Plant added successfully!', response);     
        
        this.router.navigate(['/garden', this.user.getUserID()])
        
      });
    }
  }




  addPlant(){
    this.gardenService.addPlant(this.plant).subscribe(() => {
      console.log('Plant added successfully!');
      this.router.navigate(['/plant-details']);
    });
  }

  navigateToGarden(){
    this.router.navigate(['/garden', this.user.getUserID()]);
  }
}


