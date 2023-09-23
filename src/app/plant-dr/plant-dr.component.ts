import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantDrService } from '../plant-dr.service';
import { Pest, PestApiResponse } from '../models/pest.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-plant-dr',
  templateUrl: './plant-dr.component.html',
  styleUrls: ['./plant-dr.component.css']
})
export class PlantDrComponent implements OnInit {
  commonName: string = '';
  
  pests: Pest[] = [];
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private plantDrService: PlantDrService,
    private user: UserService
  ){}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      const commonName = params.get('commonName');
      if (commonName !== null) {
        this.commonName = commonName;
        console.log(this.commonName);
        this.getPlantData();
      } else {
        console.log('error loading common name');
      }
    });
  }

  getPlantData() {
    this.plantDrService.getPests(this.commonName).subscribe((data: PestApiResponse) => {
      console.log(data);
      
      this.pests = data.data || [];
      console.log('pests array', this.pests);
    });
  }

  navigateToGarden(){
    this.router.navigate(['/garden', this.user.getUserID()]);
  }

  /*getPlantData() {
    this.plantDrService.getPests(this.commonName).subscribe((data: pest) => {
      console.log(data);
      this.data = data || [];      
      console.log('pests array',this.data);


    });
  }
*/


  viewDetails(pest: any){
    this.router.navigate(['/pest-details', pest.id]);
  }

}

/*
  From the plant details on the garden page we will need to route with something like this:  
 
  viewPlantPests(commonName: string) {
    this.router.navigate(['/plantDr', commonName]);
  }
   */
