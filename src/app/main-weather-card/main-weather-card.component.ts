import { Component, OnInit, Input } from '@angular/core';
import {formatDate } from '@angular/common';
import { WeatherIcons } from '../weather-icons';

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

   ngOnChanges(){
    this.renderIcon();
   }

  ngOnInit(): void {
  }

  renderIcon(): void
  {
    //remove weather icon if it already exists
    let existingIcon=document.querySelector('#main-icon');
     if(existingIcon)
    {
      existingIcon.remove();
    }

    let nightOrDay = WeatherIcons.returnDayorNight();
    let weatherDescription = this.currentWeather$.weather[0].main; //returns a short description of current weather
    let iconName = WeatherIcons[weatherDescription][nightOrDay]; //pull the correct icon name from the WeatherIcons class
    
    //create the element
    let iconElement = document.createElement('i');
    iconElement.classList.add('wi');
    iconElement.classList.add(iconName);
    iconElement.style.fontSize='150px';
    iconElement.id="main-icon";

    //add the element to the DOM
    let parentElement=document.querySelector('.temp-icon-wrapper');
    parentElement.appendChild(iconElement);
  }

}
