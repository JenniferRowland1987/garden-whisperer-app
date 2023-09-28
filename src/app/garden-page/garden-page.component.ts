import { Component, OnInit } from '@angular/core';
import { GardenService } from '../garden.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../plant.service';
import { WeatherService } from '../weather.service';
import { UserService } from '../user.service';
import { UserInfo } from '../models/user.model';

@Component({
  selector: 'app-garden-page',
  templateUrl: './garden-page.component.html',
  styleUrls: ['./garden-page.component.css']
})
export class GardenPageComponent implements OnInit{

  userId: number = 0;
  plants: any[] = [];
  user: UserInfo ={
    id: 0,
    name:'',
    userName: '',
    password: '',
    city: '',
  };

  constructor(
    private gardenService:GardenService,
    private route: ActivatedRoute, 
    private router: Router,
    private plantService: PlantService,
    private userService: UserService
    ){}

//changed the ngonit to read the userid and display the users specific garden: jr
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      const userIdParam = params.get('userId');
      if(userIdParam){
        this.userId = +userIdParam;
        this.getGarden();   
        this.getUser();     
      }
    });
  }
 //added method to get user specific garden from service. jr
 getGarden() {
  this.gardenService.getGarden(this.userId).subscribe((plants) => {
    this.plants = plants;

    this.plants.forEach((plant) => {
      const perenualId = plant.perenualId;
      if (perenualId) {
        this.plantService.getPlantById(perenualId).subscribe((data) => {
          plant.imageUrl = data.default_image?.regular_url;
        });
      }
    });
  });
}

navigateToPlantSearch(){
  this.router.navigate(['search-plant'])
}

navigateToUserDetails(){
  this.router.navigate(['/user-details'])
}

navigateToLogin(){
  this.router.navigate(['/login'])
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

getUser(){
  this.userService.getUser(this.userService.getUserID()).subscribe(
    (data: UserInfo)=>{
      this.user = data;
    }
  )
}

}
function subscribe(arg0: (plants: any) => void) {
  throw new Error('Function not implemented.');
}

