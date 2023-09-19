import { Component, OnInit } from '@angular/core';
import { GardenService } from '../garden.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-garden-page',
  templateUrl: './garden-page.component.html',
  styleUrls: ['./garden-page.component.css']
})
export class GardenPageComponent implements OnInit{

  userId: number = 0;
  plants: any[] = [];

  constructor(private gardenService:GardenService, private route: ActivatedRoute){}
//changed the ngonit to read the userid and display the users specific garden:
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      const userIdParam = params.get('userId');
      if(userIdParam){
        this.userId = +userIdParam;
        this.getGarden();        
      }
    });
  }
 //added method to get user specific garden from service.
  getGarden(){
    this.gardenService.getGarden(this.userId).subscribe((plants) =>{
      this.plants = plants;
    })
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

