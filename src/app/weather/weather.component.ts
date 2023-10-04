import { Component, OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';
import { UserService } from '../user.service';
import { Weather } from '../models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  weatherData: Weather = {
    current: {
      temp_f: 0,
      precip_in: 0,
      cloud: 0,
    }
  };
temp: number = 0;
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
  this.weatherService.getWeather(this.city).subscribe((data: Weather) => { // Update the type to Weather
    this.weatherData = data;
    console.log(data);
    this.temp = this.weatherData.current.temp_f;
    this.checkPlants();
  });
}

checkPlants() {
  if (this.temp <= 40) {
    this.message = 'Cover your outdoor plants, it is getting cold!';
  } else if (this.temp >= 80) {
    this.message = 'Consider watering your outdoor plants...it is getting hot!';
  } else {
    // Check cloud cover and precipitation
    const cloudCover = this.weatherData.current.cloud;
    const precipitation = this.weatherData.current.precip_in;

    if (cloudCover > 50) {
      if (precipitation > 60) {
        this.message = 'It is gonna rain!';
      } else if (precipitation > 50) {
        this.message = 'Rain clouds are forming';
      } else if (cloudCover > 30) {
        this.message = 'It is partially cloudy';
      } else {
        this.message = 'It is cloudy';
      }
    } else {
      this.message = 'Nice weather today! Not too hot, not too cold!';
    }
  }
}

isCloudy(): boolean {
  return this.weatherData.current.cloud > 50;
}

isPartiallyCloudy(): boolean {
  return this.weatherData.current.cloud > 30 && this.weatherData.current.cloud <= 50;
}

isRainy(): boolean {
  return this.weatherData.current.precip_in > 60 && this.weatherData.current.cloud > 50;
}
}





