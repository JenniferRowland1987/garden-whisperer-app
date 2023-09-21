import { Component, Input, OnInit } from '@angular/core';
import { GardenService } from '../garden.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.css']
})
export class EditPlantComponent implements OnInit {
  id: number = 0;
  plant: any = {};
  editPlant: any ={
    nickname: '',
    dateplanted: '',
    notes: '',
    lastwater: '',
    lastfertilization: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gardenService: GardenService
  ) {}


  ngOnInit() {
    // Get the plant ID from the route parameters
    this.route.params.subscribe(params => {
      this.id = params['id'];

      // Fetch the plant data using the plant ID
      this.gardenService.getPlant(this.id).subscribe((data) => {
        if (data) {
          this.plant = data;
        } else {
          console.log('This plant is not in your garden, would you like to add it?');
        }
      });
    });
  }
  updatePlant() {
    this.gardenService.updatePlant(this.id, this.plant).subscribe(() => {
      console.log('Plant updated successfully!');
      this.router.navigate(['/plant-details', this.id]);
    });
  }
  onSubmit(): void {
    this.gardenService.updatePlant(this.id, this.plant).subscribe(() => {
      console.log('Plant updated successfully!');
      this.router.navigate(['/plant-details', this.id]);
    });
  }

  navigateToGarden(){
    this.router.navigate(['/garden', this.plant.userId]);
  }

  navigateToDoctor(){
    this.router.navigate(['/plant-dr', this.plant.commonName]);
  }
} 

