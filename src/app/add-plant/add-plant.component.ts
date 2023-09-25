import { Component, OnInit } from '@angular/core';
import { GardenService } from '../garden.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../plant.service';
import { UserService } from '../user.service';
import { Plant } from '../models/plant.model';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {
  id: number = 0;
  perenualId: number = 0;
  plant: any;
  newPlant: any ={
    commonName: '',
    nickname: '',
    dateplanted: '',
    notes: '',
    lastwater: '',
    lastfertilization: ''
  }

    constructor(private gardenService : GardenService,
      private plantService: PlantService,
      private route: ActivatedRoute,
      private user: UserService,
      private router: Router){}

    onSubmit(): void {
      this.gardenService.addPlant(this.plant).subscribe((response) => {
        console.log('Plant added successfully!', response);
        this.newPlant = {}; 
      });
    }
    ngOnInit() {
      this.route.paramMap.subscribe((params) => {
        const paramName = params.get('id');
        if (paramName !== null) {
          this.perenualId = +paramName;
          console.log(this.perenualId)
          this.plant(this.getPlantById); 
        }
      });
  }

  getPlantById(){
    

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


