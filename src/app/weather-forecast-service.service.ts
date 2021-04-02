import { Injectable } from '@angular/core';
import {HttpParams, HttpHeaders, HttpRequest, HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  public getWeatherDetails (city: string, system: string): Observable<any> {
    let params = new HttpParams();
    let headers = new HttpHeaders();

    if (city != null) {
      params = params.set('q', city.toString());
    }
    if (system != null) {
      params = params.set('units', system.toString());
    }
    params = params.set('appid', 'ddcdb9f6d5e709fa82aadfde316b061f');

    let req = new HttpRequest<any>(
      "GET",
      'http://api.openweathermap.org/data/2.5/forecast',
      {
        headers: headers,
        params: params,
      }
    );
    
    return this.http.request<any>(req);
  }
}
