import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { GardenService } from '../garden.service';
import { PlantDrService } from '../plant-dr.service';

import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent {
  plantInfo: number = 0;
  plant: any;

  constructor(
    private gardenService:GardenService,
    private plantService: PlantService,
    private plantDrService: PlantDrService,
    private route: ActivatedRoute,
    private router: Router

 


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
      console.log("get plant details")
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
      });
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
}

/*export class perenualPlant {
  id: number = 0;
  common_name: string = '';
  scientific_name: string[] = [];
  other_name: string[] = [];
  cycle: string = '';
  watering: string = '';
  sunlight: string[] = [];


}
*/
