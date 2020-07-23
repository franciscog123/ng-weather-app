import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 

import { AppComponent } from './app.component';
import { MainWeatherCardComponent } from './main-weather-card/main-weather-card.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SevenDayForecastComponent } from './seven-day-forecast/seven-day-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchBarComponent,
    MainWeatherCardComponent,
    SevenDayForecastComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
