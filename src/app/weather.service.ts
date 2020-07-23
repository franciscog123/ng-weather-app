import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import {CurrentWeather} from './currentWeather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey='d099c7633df1a7f300573e16f3f0370e';

  options = {
    observe: 'body' as const,
    responseType: 'json' as const,
  };
  
  constructor(private http: HttpClient) { }

  getCurrentWeatherByLatLong(lat,long): Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${this.apiKey}&units=imperial`, this.options)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  get7DayForecast(lat, long)
  {
    return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly&appid=${this.apiKey}&units=imperial`,this.options)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
