import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { MyutilsService } from '../myutils/myutils.service';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  app: any;
  google_api_key: any;
  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  mapLoadedObserver: any;
  currentPosition: any = null;
  locationWatcher: any = null;

  contentHeader: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: HttpClient, private geolocation: Geolocation, private myUtils: MyutilsService) {
    this.google_api_key = 'AIzaSyAbgf69ga2QJDlfL6KMMg9yzdB8IAPkuOw';
  }

  getAddress(params) {
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.google_api_key + '&latlng=' + params.lat + ',' + params.long;
    return this.GET(url);
  }

  getStreetAddress(params) {
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.google_api_key + '&latlng=' + params.lat + ',' + params.long + '&result_type=street_address';
    return this.GET(url);
  }

  GET(url) {
    return this.http.get(url);
  }

  loadGoogleMaps(mapElement: any): Promise<any> {
    this.mapElement = mapElement;
    return new Promise((resolve) => {
      if(typeof google == "undefined" || typeof google.maps == "undefined"){
          window['mapInit'] = () => {
            // this.initMap().then(() => {
            //   resolve(true);
            // });
            this.initMap();
            resolve(true);
          }
          let script = document.createElement("script");
          script.id = "googleMaps";
          if(this.google_api_key){
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.google_api_key + '&callback=mapInit&libraries=places';
          } else {
            script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
          }
          document.body.appendChild(script);
      } else {
        // this.initMap().then(() => {
        //   resolve(true);
        // });
        this.initMap();
        resolve(true);
      }
    });
  }

  initMap() {
    this.mapInitialised = true;
    const currentLocation = this.myUtils.currentUserLocation;
    if(currentLocation.lat == null && currentLocation.long == null) {
      currentLocation.lat = 39.0564309;
      currentLocation.long = -100.553916;
    }
    let latLng = new google.maps.LatLng(Number(currentLocation.lat), Number(currentLocation.long));
    let mapOptions = {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement, mapOptions);
    // return new Promise((resolve) => {
    //   this.geolocation.getCurrentPosition().then((position) => {
    //     this.currentPosition = {
    //       lat: position.coords.latitude,
    //       lon: position.coords.longitude
    //     };
        // let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        // let mapOptions = {
        //   center: latLng,
        //   zoom: 10,
        //   mapTypeId: google.maps.MapTypeId.ROADMAP
        // }
        // this.map = new google.maps.Map(this.mapElement, mapOptions);
    //     resolve(true);
    //   });
    // });
  }
}
