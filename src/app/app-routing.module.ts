import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherComponent} from './weather/weather.component';
import {ForecastDetailsComponent} from './forecast-details/forecast-details.component';

const routes: Routes = [
  {path: 'weather', component: WeatherComponent},
  {path: 'forecast-details/:id', component: ForecastDetailsComponent},
  {path: '', redirectTo: '/weather', pathMatch: 'full'},
  {path: '**', component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
