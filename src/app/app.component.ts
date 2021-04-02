import { Component, OnInit } from '@angular/core';
import { WeatherForecastServiceService } from './weather-forecast-service.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public weatherData: any;
  public unit: any;
  

  constructor (private weatherDetails: WeatherForecastServiceService) {}

  public getWeatherReport (city: any, unit: any) {
    this.getUnitValue(unit.value);
    this.weatherDetails.getWeatherDetails(city.value, this.unit)
      .subscribe((response) => {
        if (response.body != null) {
          this.weatherData = response.body.list;
        }
    }, error => {
      this.weatherData = null;
      console.log(error.message);
    });
  }

  public getUnitValue (val: string) {
    if (val === 'Kelvin') {
      this.unit = null;
    }
    if (val === 'Fahrenheit') {
      this.unit = 'imperial';
    }
    if (val === 'Degrees') {
      this.unit = 'metric';
    }
  }
}
