import { Component } from '@angular/core';
import { GardenService } from '../garden.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../plant.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent {
  id: number = 0;
  plant: any = {};
  newPlant: any ={
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
      this.gardenService.addPlant(this.newPlant).subscribe((response) => {
        console.log('Plant added successfully!', response);
        this.newPlant = {}; 
      });
    }

    addPlant(){
      this.gardenService.addPlant(this.newPlant).subscribe(() => {
        console.log('Plant added successfully!');
        this.router.navigate(['/plant-details', this.plant.id]);
      });
    }
    
    navigateToGarden(){
      this.router.navigate(['/garden', this.user.getUserID()]);
    }

    navigateToPlantDetails(){
      this.router.navigate(['/plant-details', this.plant.id])
    }
}


