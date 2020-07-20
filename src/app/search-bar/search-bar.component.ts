import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../currentWeather';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchForm=new FormGroup({
    inputBar: new FormControl('')
  })

  currentWeather$:CurrentWeather;
  
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    // this.weatherService.getCurrentWeatherResponse()
    // .subscribe((data) => this.location = data);
    this.weatherService.getCurrentWeatherResponse(this.searchForm.get('inputBar').value)
    .subscribe((data) => this.currentWeather$ = data);
    this.searchForm.get('inputBar').reset();
  }

}
