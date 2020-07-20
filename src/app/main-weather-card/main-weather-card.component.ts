import { Component, OnInit, Input } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-main-weather-card',
  templateUrl: './main-weather-card.component.html',
  styleUrls: ['./main-weather-card.component.css']
})
export class MainWeatherCardComponent implements OnInit {

  @Input() currentWeather$;
  today= new Date();
  todaysDataTime = '';

  constructor() {
    this.todaysDataTime = formatDate(this.today, 'medium', 'en-US');
   }

  ngOnInit(): void {
  }

}
