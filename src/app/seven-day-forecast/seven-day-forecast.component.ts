import { Component, OnInit, Input } from '@angular/core';
import { WeatherIcons } from '../weather-icons';

@Component({
  selector: 'app-seven-day-forecast',
  templateUrl: './seven-day-forecast.component.html',
  styleUrls: ['./seven-day-forecast.component.css']
})
export class SevenDayForecastComponent implements OnInit {
  @Input() forecast$;

  constructor() { }

  ngOnInit(): void {
  }

  constructClass(index){
    //shift the index passed in by 1
    let weatherDescription = this.forecast$.daily[index+1].weather[0].main; //returns a short description of current weather
    return WeatherIcons[weatherDescription]['day']; //pull the correct icon name from the WeatherIcons class
  }

}
