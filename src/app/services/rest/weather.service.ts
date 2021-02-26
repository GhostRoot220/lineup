import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WORLDWEATHERURL, WORLDWEATHERKEY } from '../../constants/constants';
import { MyutilsService } from '../myutils/myutils.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient, private myUtils: MyutilsService) { }

  // http://api.worldweatheronline.com/premium/v1/marine.ashx?key=6897cbbb45a74c37887203657190405&format=json&q=45,-2&tide=yes

  getWeatherInfo(location) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(WORLDWEATHERURL + '/marine.ashx?key=' + WORLDWEATHERKEY + '&format=json&q=' + location.lat + ',' + location.long + '&tide=yes&tp=1');
  }

  getWeatherIcons(location) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(WORLDWEATHERURL + '/weather.ashx?key=' + WORLDWEATHERKEY + '&format=json&q=' + location.lat + ',' + location.long + '&num_of_days=3&cc=no&tp=24');
  }

}
