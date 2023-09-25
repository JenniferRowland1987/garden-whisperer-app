import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { PlantService } from '../plant.service';
import { Router } from '@angular/router';
import { PlantApiResponse, Plant } from '../models/plant.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-plant',
  templateUrl: './search-plant.component.html',
  styleUrls: ['./search-plant.component.css']
})
export class SearchPlantComponent implements OnInit {
  commonName: string = ""
  plant: Plant[] = [];

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService,
    private router: Router,
    private user: UserService
  
  ){}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const paramName = params.get('commonName');
      if (paramName !== null) {
        this.commonName = paramName;
        this.searchPlants(); 
      }
    });
  }

  searchPlants() {
    this.plantService.searchPlantsByCommon(this.commonName).subscribe(
      (data: PlantApiResponse) => {
        this.plant = data.data;
        console.log('API Response:', this.plant);
      },
      (error) => {
        console.error('API Error:', error);
        // Handle the error here.
      }
    );
      
  }
  navigateToAddPlant() {
    this.router.navigate(['/addplant', this.plant]);
  }
  navigateToGarden(){
    this.router.navigate(['/garden', this.user.getUserID()]);
  }

}