import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import {WeatherComponent} from '../weather/weather.component';

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.sass']
})
export class ForecastDetailsComponent implements OnInit {
  @Input() cities: any;
  weather;
  id: string;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {
  }

  public getForecastDetails(id: string) {
    this.weatherService.getForecastDetails(id).subscribe(response => this.weather = response);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getForecastDetails(this.id);
    });
  }
}
