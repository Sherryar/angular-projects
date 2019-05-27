import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { KeysPipe } from './keys.pipe';
import { ForecastDetailsComponent } from './forecast-details/forecast-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    KeysPipe,
    ForecastDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
