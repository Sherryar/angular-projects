import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeather(city: string) {
    return this.httpClient.get('//api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3d8b309701a13f65b660fa2c64cdc517&units=metric');
  }

  getForecast(city: string) {
    return this.httpClient.get('//api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&appid=3d8b309701a13f65b660fa2c64cdc517&units=metric');
  }

  getForecastDetails(city: string) {
    return this.httpClient.get('//api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=3d8b309701a13f65b660fa2c64cdc517&units=metric');
  }
}
