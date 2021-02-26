import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {ModalController, LoadingController} from '@ionic/angular';
import {WeatherService} from '../../../../services/rest/weather.service';
import {MyutilsService} from '../../../../services/myutils/myutils.service';
import {FirebaseService} from 'src/app/services/firebase-service/firebase.service';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';

import {UserData} from 'src/app/page/interface/interface';
import {GalleryPage} from 'src/app/page/modal/gallery/gallery.page';
import {WAVEQUALITIES} from 'src/app/constants/constants';

@Component({
    selector: 'app-home-explore-location-detail',
    templateUrl: './home-explore-location-detail.page.html',
    styleUrls: ['./home-explore-location-detail.page.scss'],
})
export class HomeExploreLocationDetailPage implements OnInit {

    /**
     * User Info
     */
    private userInfo: UserData = {};
    private reportsData: ReportsInfo[];
    private locationName: string;
    private locationId: string;
    private isFavoritePage = false;
    private arrDates = [];

    /**
     * Weather Data
     */
    private allWeatherData = [];
    private weatherResults = [];

    /**
     * Swell Data
     */
    private arrWaveQualities = WAVEQUALITIES;
    private swellResults = [];

    /**
     * Wind Data
     */
    private windResults = [];

    /**
     * Tides Data
     */

    width = '100%';
    height = 150;
    type = 'spline';
    dataFormat = 'json';
    private dataSource = {
        chart: {
            caption: '',
            yaxisname: '',
            anchorradius: '5',
            plottooltext: '<b>$dataValue</b>',
            showhovereffect: '1',
            numbersuffix: '',
            theme: 'fusion',
            palettecolors: '#72D7B2',
            showValues: '1',
            showYAxisValues: '0',
        },
        data: []
    };

    private tideResults = [];

    highLowRows = null;

    /**
     * Wave Data
     */
    private waveResults = [];

    private lastReports = '';

    private dataLoader = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private weatherService: WeatherService,
        private myUtilsService: MyutilsService,
        private firebaseService: FirebaseService,
        private sanitizer: DomSanitizer,
        private changeDector: ChangeDetectorRef,
        private modalCtrl: ModalController,
        private loadingCtrl: LoadingController,
        private streamingMedia: StreamingMedia,
    ) {
        this.reportsData = [];
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.initPage();
    }

    async initPage() {
        this.waveResults = [];
        this.weatherResults = [];
        this.swellResults = [];
        this.tideResults = [];
        this.windResults = [];
        this.locationId = this.route.snapshot.paramMap.get('itemid');
        this.locationName = this.route.snapshot.paramMap.get('name');
        this.dataLoader = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await this.dataLoader.present();
        this.arrDates = [];
        this.allWeatherData = this.myUtilsService.getWeatherInfo();
        await this.checkIfFavoritePage();
        await this.getReportsForLocation();
        if (this.allWeatherData == null || this.allWeatherData.length < 3) {
            this.getWeatherInfo();
        } else {
            this.initTableDates();
            this.initData();
        }
    }

    getWeatherInfo() {
        this.weatherService.getWeatherInfo(this.myUtilsService.currentUserLocation)
            .subscribe((weather: any) => {
                if (weather && weather.data.weather.length > 0) {
                    this.myUtilsService.setWeatherInfo(weather.data.weather);
                    this.allWeatherData = weather.data.weather;
                    this.initTableDates();
                    this.initData();
                }
            });
    }

    async checkIfFavoritePage() {
        const uid = this.firebaseService.getUID();
        const userInfoSnapshot = await this.firebaseService.getUserProfile(uid);
        this.userInfo = userInfoSnapshot.val();
        let strFavorites = '';
        if (localStorage.getItem('favoriteLoc') == null) {
            strFavorites = this.userInfo.favorite.beaches;
        } else {
            strFavorites = localStorage.getItem('favoriteLoc');
        }

        let arrFavorites = [];
        arrFavorites = strFavorites.split(',');
        const tmpIsFavorite = arrFavorites.findIndex(x => x == this.locationId);
        if (tmpIsFavorite > -1) {
            this.isFavoritePage = true;
        }
    }

    initTableDates() {
        if (this.allWeatherData.length > 0) {
            const d = new Date(this.allWeatherData[0].date);
            this.arrDates.push(this.myUtilsService.getDayofWeek(d.getDay()) + ' - ' + (d.getMonth() + 1) + '/' + d.getDate());

            d.setDate(d.getDate() + 1);
            this.arrDates.push(this.myUtilsService.getDayofWeek(d.getDay()) + ' - ' + (d.getMonth() + 1) + '/' + d.getDate());

            d.setDate(d.getDate() + 1);
            this.arrDates.push(this.myUtilsService.getDayofWeek(d.getDay()) + ' - ' + (d.getMonth() + 1) + '/' + d.getDate());
        }
    }

    initData() {
        const arrTmpChartVal = [];
        this.tideResults = this.allWeatherData[0].tides[0].tide_data;
        for (let i = 0; i < this.allWeatherData.length; i++) {
            if (i < 3) {
                this.weatherResults.push({
                    mintmpC: this.allWeatherData[i].mintempC,
                    mintmpF: this.allWeatherData[i].mintempF,
                    maxtmpC: this.allWeatherData[i].maxtempC,
                    maxtmpF: this.allWeatherData[i].maxtempF,
                    sunrise: this.allWeatherData[i].astronomy[0].sunrise,
                    sunset: this.allWeatherData[i].astronomy[0].sunset,
                    weatherIcon: '',
                    waterTempC: this.allWeatherData[i].hourly[0].waterTemp_C,
                    waterTempF: this.allWeatherData[i].hourly[0].waterTemp_F
                });
                // tslint:disable-next-line:forin
                for (const x in this.allWeatherData[i].tides[0].tide_data) {
                    arrTmpChartVal.push({
                        value: this.allWeatherData[i].tides[0].tide_data[x].tideHeight_mt
                    });
                }
                // tslint:disable-next-line:forin
                for (const x in this.allWeatherData[i].hourly) {
                    const data = this.allWeatherData[i].hourly[x];
                    if (this.allWeatherData[i].hourly[x].time / 100 == 9 || this.allWeatherData[i].hourly[x].time / 100 == 15) {
                        this.waveResults.push({
                            value: data.sigHeight_m,
                            // tslint:disable-next-line:max-line-length
                            quality: this.myUtilsService.getWaveQuality(data.sigHeight_m, data.swellPeriod_secs, this.myUtilsService.convertKPHtoMPS(Number(data.windspeedKmph))),
                            waveDirectionImg: data.swellDir16Point,
                            swellInterval: data.swellPeriod_secs,
                            swellHeight: data.swellHeight_ft,
                        });
                    }
                    // tslint:disable-next-line:max-line-length
                    if (this.allWeatherData[i].hourly[x].time / 100 !== 0 && this.allWeatherData[i].hourly[x].time % 600 == 0 && this.windResults.length < 9) {
                        this.windResults.push({
                            value: this.myUtilsService.convertKPHtoMPS(Number(this.allWeatherData[i].hourly[x].windspeedKmph)),
                            direction: this.allWeatherData[i].hourly[x].winddir16Point
                        });
                    }
                }
            }
        }
        if (this.windResults.length > 9) {
            this.windResults.slice(0, 10);
        }
        this.dataSource.data = arrTmpChartVal;
        this.weatherService.getWeatherIcons(this.myUtilsService.currentUserLocation)
            .subscribe((data: any) => {
                if (data !== null && data.data.weather.length > 0) {
                    const weatherInfo = data.data.weather;
                    for (let i = 0; i < weatherInfo.length; i++) {
                        this.weatherResults[i].weatherIcon = weatherInfo[i].hourly[0].weatherIconUrl[0].value;
                    }
                    this.dismissLoader();
                    this.changeDector.detectChanges();
                } else {
                    this.dismissLoader();
                    this.changeDector.detectChanges();
                }
            });
    }

    async getReportsForLocation() {
        this.reportsData = [];
        const self = this;
        try {
            const reportsSnapshot = await this.firebaseService.getWeatherReportsFromLast(this.locationId);
            reportsSnapshot.forEach(function (valueSnapshot) {
                self.reportsData.push({...valueSnapshot.val()});
            });
            this.reportsData.reverse();
            if (this.reportsData.length > 0) {
                this.lastReports = this.reportsData[this.reportsData.length - 1].createdat;
            }
        } catch (err) {
            console.log(err);
            // this.dismissLoader();
        }
    }

    viewPostReportPage() {
        const waveSize = this.waveResults[0].value;
        const waveQuality = this.waveResults[0].quality;
        this.router.navigateByUrl('/home/explore-report/' + this.locationId + '/' + this.locationName + '/' + waveSize + '/' + waveQuality);
    }

    onClickMoreReports() {
        this.router.navigateByUrl('/reportitems/' + this.locationId + '/' + this.locationName);
    }

    onToggleFavoriteBtn() {
        this.isFavoritePage = !this.isFavoritePage;
        const strFavorites = localStorage.getItem('favoriteLoc');
        let arrFavorites = [];
        if (!this.isFavoritePage) {
            arrFavorites = strFavorites.split(',');
            const favLocIndex = arrFavorites.findIndex(x => x == this.locationId);
            arrFavorites.splice(favLocIndex, 1);
            localStorage.setItem('favoriteLoc', arrFavorites.join(','));
            this.updateFavoriteBeachesOnDB();
        } else {
            if (localStorage.getItem('favoriteLoc') !== null && localStorage.getItem('favoriteLoc') !== '') {
                arrFavorites = strFavorites.split(',');
                arrFavorites.push(this.locationId);
                localStorage.setItem('favoriteLoc', arrFavorites.join(','));
                this.updateFavoriteBeachesOnDB();
            } else {
                localStorage.setItem('favoriteLoc', this.locationId);
                this.updateFavoriteBeachesOnDB();
            }
        }
    }

    async onClickVideoAttachment(path, type) {
        if (type == 0) {
            const galleryModal = await this.modalCtrl.create({
                component: GalleryPage,
                componentProps: {
                    imgs: [path]
                },
                cssClass: 'gallery-modal'
            });
            await galleryModal.present();
        } else {
            const streamingOptions: StreamingVideoOptions = {
                successCallback: () => {
                    console.log('Video played');
                },
                errorCallback: (e) => {
                    console.log('Error streaming');
                },
                orientation: 'landscape',
                shouldAutoClose: true,
                controls: false
            };

            this.streamingMedia.playVideo(path, streamingOptions);
        }
    }

    async updateFavoriteBeachesOnDB() {
        await this.firebaseService.addFavoriteBeaches(localStorage.getItem('favoriteLoc'));
    }

    dismissLoader() {
        if (this.dataLoader !== null) {
            this.dataLoader.dismiss();
            this.dataLoader = null;
        }
    }

}

interface ReportsInfo {
    id: string;
    uid: string;
    username: string;
    reporttxt: string;
    location: {
        lat: number,
        long: number,
        name: string
    };
    waveHeight: string;
    waveQuality: number;
    dist?: number;
    createdat: string;
    postimg?: string;
}
