import { Component, OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

weatherData: any;
temp: number=0;
city: any;
state: string='';
message: string='';

constructor(private weatherService: WeatherService){}

ngOnInit(): void {
  this.weatherService.getWeather().subscribe(
    (data: any) => {
    this.weatherData = data;

    },
(error) => {
  console.error(error);
}
);
}

coverPlants(){
if (this.temp <= 4.5)
{this.message='Cover your outdoor plants, it is getting cold!'}

else{}
}

checkWater(){

  if (this.temp >=26)
  {this.message='Consider watering your outdoor plants...it is getting hot!'}
  
  else{}

}



}


