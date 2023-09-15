import { Component, OnInit } from '@angular/core';
import { GardenService } from '../garden.service';

@Component({
  selector: 'app-garden-page',
  templateUrl: './garden-page.component.html',
  styleUrls: ['./garden-page.component.css']
})
export class GardenPageComponent implements OnInit{

  plants: any[] = [];

  constructor(private gardenService:GardenService){}

  ngOnInit(): void {
    this.getPlants()
  }

getPlants(){
  this.gardenService.getPlants(),subscribe((plants) => {
    this.plants = plants;
  });
}

getPlantsFromService() {
  this.gardenService.getPlants().subscribe(
    (data: any[]) => {
    },
    (error: any) => {
      console.log(error);
    }
  );
}

}
function subscribe(arg0: (plants: any) => void) {
  throw new Error('Function not implemented.');
}

