import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LoadingController, ModalController} from '@ionic/angular';
import {WeatherService} from '../../../../services/rest/weather.service';
import {MapServiceService} from 'src/app/services/map/map-service.service';
import {WritemessagePage} from 'src/app/page/modal/writemessage/writemessage.page';
import {MyutilsService} from 'src/app/services/myutils/myutils.service';
import {WAVEQUALITIES, MTOFRATIO} from 'src/app/constants/constants';
import {FirebaseService} from '../../../../services/firebase-service/firebase.service';

declare var google: any;

@Component({
    selector: 'app-home-explore',
    templateUrl: './home-explore.page.html',
    styleUrls: ['./home-explore.page.scss'],
})
export class HomeExplorePage implements OnInit {

    @ViewChild('exploremap') exploreMapRef: ElementRef;

    private resorts = [];
    private map: any;
    private waveInfo = {
        waveHeight: '',
        waveForm: null,
        location: {
            lat: null,
            long: null,
            name: ''
        }
    };
    private selectedItem: any;
    private locationQuery = '';
    private places = [];
    private arrWaveQualities = WAVEQUALITIES;

    constructor(
        private router: Router,
        private weatherService: WeatherService,
        private loadingCtrl: LoadingController,
        private mapService: MapServiceService,
        private modalCtrl: ModalController,
        private firebaseService: FirebaseService,
        private myUtils: MyutilsService) {
    }

    ngOnInit() {
        this.initMapElement();
    }

    async initMapElement() {
        const currentLoc = this.myUtils.currentUserLocation;
        if (currentLoc.lat == null && currentLoc.long == null) {
            alert('Please enable geolocation to get Correct Location!');
        }
        const mapLoader = await this.loadingCtrl.create({
            message: 'Initializing map...'
        });
        await mapLoader.present();

        await this.mapService.loadGoogleMaps(this.exploreMapRef.nativeElement);
        setTimeout(() => {
            mapLoader.dismiss();
            this.addMarkers();
        }, 500);
    }

    addMarkers() {
        const self = this;
        const img = {
            url: 'assets/imgs/img-map-marker.svg',
            size: new google.maps.Size(32, 32)
        };

        const locationsRef = this.firebaseService.getAllLocations();
        const locationsRefListener = locationsRef.on('value', snapshot => {
            snapshot.forEach(function (childSnapshot) {
                const location = childSnapshot.val();
                location.itemid = childSnapshot.key;
                if (location.location.lat !== '' && location.location.long !== '') {
                    const marker = new google.maps.Marker({
                        position: new google.maps.LatLng(location.location.lat, location.location.long),
                        icon: img,
                        map: self.mapService.map
                    });

                    // tslint:disable-next-line:no-shadowed-variable
                    google.maps.event.addListener(marker, 'click', (function (marker) {
                        return function () {
                            self.getWeatherInfoForlocation(location);
                        };
                    })(marker));
                }
                self.resorts.push(location);
            });
        });
    }

    async getWeatherInfoForlocation(location) {
        this.myUtils.setCurrentLocation(location.location.lat, location.location.long);
        const infoLoader = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await infoLoader.present();
        this.weatherService.getWeatherInfo(location.location)
            .subscribe((weather: any) => {
                    // console.log(weather);
                    if (weather && weather.data.weather) {
                        this.myUtils.setWeatherInfo(weather.data.weather);
                        const currentLocalTime = this.myUtils.getLocationLocalTime(location.location);

                        // tslint:disable-next-line:max-line-length
                        const currentWeatherId = weather.data.weather[0].hourly.findIndex(x => Number(x.time) / 100 === Number(currentLocalTime));
                        const tmpWeather = weather.data.weather[0].hourly[currentWeatherId];

                        this.waveInfo.location.name = location.name;
                        this.waveInfo.waveHeight = (Number(tmpWeather.sigHeight_m) * MTOFRATIO).toString();
                        // tslint:disable-next-line:max-line-length
                        this.waveInfo.waveForm = this.myUtils.getWaveQuality(tmpWeather.sigHeight_m, tmpWeather.swellPeriod_secs, this.myUtils.convertKPHtoMPS(Number(tmpWeather.windspeedKmph)));
                        this.selectedItem = location;
                    } else {
                        this.waveInfo.waveHeight = '';
                        this.waveInfo.waveForm = '';
                        this.waveInfo.location.name = '';
                        this.selectedItem = null;
                    }
                    infoLoader.dismiss();
                }
                , error => {
                    console.log(error);
                });
    }

    searchPlace() {
        if (this.locationQuery !== '') {
            this.places = this.myUtils.filterResorts(this.resorts, this.locationQuery);
        } else {
            this.places = [];
        }
    }

    selectPlace(place) {
        this.places = [];
        this.mapService.map.setCenter({lat: Number(place.location.lat), lng: Number(place.location.long)});
        this.getWeatherInfoForlocation(place);
    }

    onClickDetail() {
        if (this.waveInfo.location.name === '') {
            alert('Location is not selected!');
        } else {
            // tslint:disable-next-line:max-line-length
            this.router.navigateByUrl('/locationdetail/' + this.selectedItem.itemid + '/' + this.selectedItem.name);
        }
    }

    async onClickMissingReport() {
        const reportModal = await this.modalCtrl.create({
            component: WritemessagePage,
            cssClass: 'report-modal',
            componentProps: {
                reporttype: 3
            }
        });
        await reportModal.present();
    }
}

interface ReportsInfo {
    username: string;
    reporttxt: string;
    location: {
        lat: number,
        long: number,
        waveheight: string,
        wavequality: string,
        name: string
    };
    dist?: number;
    createdat: string;
    uid: string;
}
