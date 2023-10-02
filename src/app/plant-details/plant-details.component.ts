import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { GardenService } from '../garden.service';
import { PlantDrService } from '../plant-dr.service';

import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';




@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent {
  plantInfo: number = 0;
  plant: any;
  waterMessage: string = ''; // Message for watering
  fertilizeMessage: string = ''; // Message for fertilization

  constructor(
    private gardenService:GardenService,
    private plantService: PlantService,
    private plantDrService: PlantDrService,
    private route: ActivatedRoute,
    private router: Router,
    private user: UserService

    ){}

    ngOnInit() {
      console.log('init')
      this.route.paramMap.subscribe((params)=> {
        const plantid = params.get('id');
        console.log(`plantid: ${plantid}`);
        if(plantid){
          this.plantInfo = +plantid;
          console.log(`plantid: ${plantid}`);
          this.getPlantDetails();  
                
        }
      });
    }


    getPlantDetails() {
      console.log('get plant details');
      this.gardenService.getPlant(this.plantInfo).subscribe((plants) => {
        //console.log(`plants: ${JSON.stringify(plants)}`);
        this.plant = plants;
        const perenualId = this.plant.perenualId;
        if (perenualId) {
          this.plantService.getPlantById(perenualId).subscribe((data) => {
            //console.log(`data: ${JSON.stringify(data)}`);
            plants.imageUrl = data.default_image?.regular_url;
            plants.watering = data.watering;
            plants.sunlight = data.sunlight;
          });
        }
        this.checkWateringStatus();
        this.checkFertilizationStatus();
      });
    }

  deletePlant(plantId: number) {
    this.gardenService.deletePlant(plantId).subscribe(
      () => {
        console.log('Plant deleted successfully.');     
        this.router.navigate(['/garden', this.user.getUserID()])
      },
      (error) => {
        console.error('Error deleting plant:', error);        
      }
    );
  }

  navigateToGarden(){
    this.router.navigate(['/garden', this.plant.userId]);
  }

  navigateToEdit(){
    this.router.navigate(['/edit-plant', this.plant.id]);
  }

  navigateToDoctor(){
    this.router.navigate(['/plant-dr', this.plant.commonName]);
  }

  checkWateringStatus() {
    const lastWaterDate: Date = new Date(this.plant.lastWater);
    const currentDate: Date = new Date();
    const daysSinceLastWater: number = Math.floor(
      (currentDate.getTime() - lastWaterDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysSinceLastWater > 14) {
      this.waterMessage = 'It is time to water your plant!';
    }
}

checkFertilizationStatus() {
    const lastFertilizationDate: Date = new Date(this.plant.lastFertilization);
    const currentDate: Date = new Date();
    const monthsSinceLastFertilization: number =
      currentDate.getMonth() - lastFertilizationDate.getMonth() +
      12 * (currentDate.getFullYear() - lastFertilizationDate.getFullYear());

    if (monthsSinceLastFertilization >= 3) {
      this.fertilizeMessage = 'It is time to fertilize your plant!';
    }
}
}
