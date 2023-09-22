import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../plant.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-search-plant',
  templateUrl: './search-plant.component.html',
  styleUrls: ['./search-plant.component.css']
})
export class SearchPlantComponent implements OnInit {
  commonName: string = "x"
  plant: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService,
    private router: Router
  ){}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const paramName = params.get('commonName');
      if (paramName !== null) {
        this.commonName = paramName; 
        this.plantService.searchPlantsByCommon(this.commonName).subscribe((data) => {
          this.plant = data;
        });
      }
    });
  }
  navigateToAddPlant(){
    this.router.navigate(['/addplant', this.plant]);
  }
}
