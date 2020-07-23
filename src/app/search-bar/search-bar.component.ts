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
  placesAutocomplete;
  latitude;
  longitude;

  constructor(private weatherService: WeatherService
    ) { }

  ngOnInit(): void {
    this.createAutoComplete();
    let myClass=this; //getting scope of class to pass into below function and call the class function

     this.placesAutocomplete.on('change', function(e) {
       let latLong = e.suggestion.latlng;
       myClass.latitude = latLong.lat;
       myClass.longitude = latLong.lng;
       myClass.submitRequest(myClass.latitude,myClass.longitude);
     });
  }

  submitRequest(lat, long):void{
    this.weatherService.getCurrentWeatherByLatLong(lat, long)
    .subscribe((data) => this.currentWeather$ = data);
    this.searchForm.get('inputBar').reset();
  }

  createAutoComplete(){
    this.placesAutocomplete = places({
      appId: 'pl2IBBNA1I8V',
      apiKey: '0ed1e4c7568741e64c757b71eaa8bb63',
      container: document.querySelector('.myInput')
    }).configure({
      type:'city', // Search only for cities names
      aroundLatLngViaIP: false, // disable the extra search/boost around the source IP
    });
  }

}
