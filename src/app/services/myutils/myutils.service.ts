import { Injectable } from '@angular/core';
import { DAYOFWEEK, MTOFRATIO } from '../../constants/constants';
import { UserData } from '../../page/interface/interface';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as tzlookup from 'tz-lookup';
import * as moment from 'moment-timezone';
import { FirebaseService } from '../firebase-service/firebase.service';

@Injectable({
    providedIn: 'root'
})
export class MyutilsService {

    private userInfo: UserData = {};
    private prevUserLocation = {
        lat: null,
        long: null
    };
    currentUserLocation = {
        lat: null,
        long: null
    };
    private watch = null;

    private chatHistory = [];

    private weatherInfo = null;

    constructor(
        private geolocation: Geolocation,
        private firebaseService: FirebaseService
        ) {
        this.userInfo = {};
    }

    getDayofWeek(day) {
        return DAYOFWEEK[day];
    }

    getWindDirectionImg(angle) {
        angle = 360 - angle;
        if (angle > 11.25 && angle < 33.75) {
            return 'img-wind-NNE.svg';
        } else if (angle > 33.75 && angle < 56.25) {
            return 'img-wind-ENE.svg';
        } else if (angle > 56.25 && angle < 78.75) {
            return 'img-wind-E.svg';
        } else if (angle > 78.75 && angle < 101.25) {
            return 'img-wind-ESE.svg';
        } else if (angle > 101.25 && angle < 123.75) {
            return 'img-wind-ESE.svg';
        } else if (angle > 123.75 && angle < 146.25) {
            return 'img-wind-SE.svg';
        } else if (angle > 146.25 && angle < 168.75) {
            return 'img-wind-SSE.svg';
        } else if (angle > 168.75 && angle < 191.25) {
            return 'img-wind-S.svg';
        } else if (angle > 191.25 && angle < 213.75) {
            return 'img-wind-SSW.svg';
        } else if (angle > 213.75 && angle < 236.25) {
            return 'img-wind-SW.svg';
        } else if (angle > 236.25 && angle < 258.75) {
            return 'img-wind-WSW.svg';
        } else if (angle > 258.75 && angle < 281.25) {
            return 'img-wind-W.svg';
        } else if (angle > 281.25 && angle < 303.75) {
            return 'img-wind-WNW.svg';
        } else if (angle > 303.75 && angle < 326.25) {
            return 'img-wind-NW.svg';
        } else if (angle > 326.25 && angle < 348.75) {
            return 'img-wind-NNW.svg';
        } else {
            return 'img-wind-N.svg';
        }
    }

    setUserData(userData) {
        this.userInfo = userData;
    }

    getUserData() {
        return this.userInfo;
    }

    filterResorts(arrLocation, searchTerm) {
        return arrLocation.filter(item => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }

    getWaveQuality(waveHeight, swellPeriod, windSpeed) {
        const intwaveQuality = waveHeight * MTOFRATIO * swellPeriod - 5 * windSpeed;
        let waveQuality = null;
        if (intwaveQuality <= 10) {
            waveQuality = 0;
        } else if (intwaveQuality > 10 && intwaveQuality <= 30) {
            waveQuality = 1;
        } else if (intwaveQuality > 30 && intwaveQuality <= 50) {
            waveQuality = 2;
        } else if (intwaveQuality > 50) {
            waveQuality = 3;
        }
        return waveQuality;
    }

    convertKPHtoMPS(value) {
        const valueInMs = (value * 1000 / 3600).toFixed(2);
        return valueInMs;
    }

    distance(lat1, lon1, lat2, lon2, unit) {
        let result = '';
        const radlat1 = Math.PI * lat1 / 180;
        const radlat2 = Math.PI * lat2 / 180;
        const theta = lon1 - lon2;
        const radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == 'K') { dist = dist * 1.609344; }
        if (unit == 'N') { dist = dist * 0.8684; }
        result = dist.toFixed(2);
        return result;
    }

    startTracking() {
        this.watch = this.geolocation.watchPosition();
        this.watch.subscribe((data) => {
            if (data.code == 1) {
                this.currentUserLocation.lat = 39.0564309;
                this.currentUserLocation.long = -100.553916;
                this.updateUserLocation();
            } else {
                if (this.currentUserLocation.lat == null) {
                    this.currentUserLocation.lat = data.coords.latitude;
                    this.currentUserLocation.long = data.coords.longitude;
                    this.prevUserLocation.lat = data.coords.latitude;
                    this.prevUserLocation.long = data.coords.longitude;
                    this.updateUserLocation();
                } else {
                    // tslint:disable-next-line:max-line-length
                    const distance = this.distance(this.currentUserLocation.lat, this.currentUserLocation.long, data.coords.latitude, data.coords.longitude, 'N');
                    if (Number(distance) >= 5) {
                        this.prevUserLocation.lat = this.currentUserLocation.lat;
                        this.prevUserLocation.long = this.currentUserLocation.long;
                        this.currentUserLocation.lat = data.coords.latitude;
                        this.currentUserLocation.long = data.coords.longitude;
                        this.updateUserLocation();
                    }
                }
            }
        });
    }

    async updateUserLocation() {
        const uid = this.firebaseService.getUID();
        if (uid !== null && uid !== undefined) {
            await this.firebaseService.updateLocation(uid, this.currentUserLocation);
        }
    }

    setChatHistory(history) {
        this.chatHistory = history;
    }

    getChatHistory() {
        return this.chatHistory;
    }

    stopTracking() {
        if (this.watch !== null) {
            navigator.geolocation.clearWatch(this.watch);
            this.watch = null;
        }
    }

    setCurrentLocation(lat, long) {
        this.currentUserLocation.lat = lat * 1;
        if (long.indexOf('--') !== -1) {
            this.currentUserLocation.long = long.substr(1, long.length) * 1;
        } else {
            this.currentUserLocation.long = long * 1;
        }
    }

    getCurrentLocation() {
        return this.currentUserLocation;
    }

    getTimeZoneName(location) {
        return tzlookup(location.lat, location.long);
    }

    getLocationTime(lat, lng, dateGap, startHour) {
        const timezoneName = this.getTimeZoneName({lat: lat, long: lng});
        const d = new Date();
        if (dateGap > 0) {
            d.setDate(d.getDate() + dateGap);
        }
        startHour = startHour.toString().length > 1 ? startHour : '0' + startHour.toString();
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const date = d.getDate();
        const time =  ' ' + startHour +  ':00:00 ';
        const tmptime = year + '-' + month + '-' + date + time;
        const result = moment.tz(tmptime, timezoneName);
        return new Date(result.format()).toJSON();
    }

    getLocationLocalTime(location) {
        const timezoneName = this.getTimeZoneName(location);
        return moment.tz(timezoneName).format('HH');
    }

    setWeatherInfo(data) {
        this.weatherInfo = data;
    }

    getWeatherInfo() {
        return this.weatherInfo;
    }

}
