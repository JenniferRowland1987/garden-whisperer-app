import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantDrService } from '../plant-dr.service';

@Component({
  selector: 'app-plant-dr',
  templateUrl: './plant-dr.component.html',
  styleUrls: ['./plant-dr.component.css']
})
export class PlantDrComponent implements OnInit {
  commonName: string = 'x';
  pests: any[] = [];

  constructor(
    private route: ActivatedRoute;
    private plantDrService: PlantDrService;
  ){}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const paramName = params.get('commonName');
      if (paramName !== null) {
        this.commonName = paramName; 
        this.plantDrService.getPests(this.commonName).subscribe((data) => {
          this.pests = data;
        });
      }
    });
  }

  /*
  From the plant details we will need to route with something like this:  
 
  viewPlantPests(commonName: string) {
    this.router.navigate(['/plantDr', commonName]);
  }
   */


}
