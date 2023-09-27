import { Component, OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';
import { UserService } from '../user.service';


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



constructor(
  private weatherService: WeatherService,
  private userService: UserService
  ){}


ngOnInit(): void {
  console.log(this.userService.userID);
 this.getCity(); 
 this.getWeather(); 
} 

getCity(){
  this.userService.getUser(this.userService.getUserID()).subscribe((user) => {
    this.city = user.city;   
    console.log(this.city);
    this.getWeather(); 
  });
}

getWeather() {
  this.weatherService.getWeather(this.city).subscribe((data: any) => {
    this.weatherData = data;
    console.log(data);
    this.temp = this.weatherData.current.temp_f;
    this.checkPlants(); 
  });
}

checkPlants() {
if (this.temp <= 40)
{this.message='Cover your outdoor plants, it is getting cold!'}

else if (this.temp >=80)
  {this.message='Consider watering your outdoor plants...it is getting hot!'}

else{
  this.message='Nice weather today! Not too hot, not too cold!'}
}

}






