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
location: string='';
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

checkPlants() {
if (this.temp <= 40)
{this.message='Cover your outdoor plants, it is getting cold!'}

if (this.temp >=80)
  {this.message='Consider watering your outdoor plants...it is getting hot!'}

else{}
}



}


