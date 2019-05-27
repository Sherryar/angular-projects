import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {
  public dateNow = Date.now();
  public cities = {
    Cardiff: {
      today: {},
      hourlyForecast: {}
    },
    London: {
      today: {},
      hourlyForecast: {}
    },
    Amsterdam: {
      today: {},
      hourlyForecast: {}
    },
    Berlin: {
      today: {},
      hourlyForecast: {}
    },
    Paris: {
      today: {},
      hourlyForecast: {}
    }
  };

  constructor(private weatherService: WeatherService) { }

  private getWeatherData(cities) {
    for (const city in cities) {
      if (cities.hasOwnProperty(city)) {
        this.weatherService.getWeather(city)
          .subscribe(response => this.cities[city].today = response);
      }
    }
  }

  private getForecastData(cities) {
    for (const city in cities) {
      if (cities.hasOwnProperty(city)) {
        this.weatherService.getForecast(city)
          .subscribe(response => this.cities[city].hourlyForecast = response);
      }
    }
  }

  ngOnInit() {
    this.getWeatherData(this.cities);
    this.getForecastData(this.cities);
  }

}
