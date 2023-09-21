import { Component } from '@angular/core';
import { GardenService } from '../garden.service';
import { ActivatedRoute, Router } from '@angular/router';

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
      private route: ActivatedRoute,
      private router: Router){}

    onSubmit(): void {
      this.gardenService.addPlant(this.newPlant).subscribe((response) => {
        console.log('Plant added successfully!', response);
        this.newPlant = {}; 
      });
    }

    navigateToGarden(){
      this.router.navigate(['/garden']);
    }
  
}

