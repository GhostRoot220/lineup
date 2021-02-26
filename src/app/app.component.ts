import { Component } from '@angular/core';
import { Platform, NavController, AlertController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { MyutilsService } from './services/myutils/myutils.service';
import { Router } from '@angular/router';
import { FirebaseService } from './services/firebase-service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private backBtnSubscriber = null;

  constructor(
    private router: Router,
    private platform: Platform,
    private navCtrl: NavController,
    private altCtrl: AlertController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebase: FirebaseX,
    private androidPermissions: AndroidPermissions,
    private myUtils: MyutilsService,
    private event: Events,
    private firebaseService: FirebaseService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    this.statusBar.styleDefault();
    try {
      const deviceToken = await this.firebase.getToken();
      localStorage.setItem('token', deviceToken);
      await this.grantGeolocationPermission();
    } catch (err) {
      console.log(err);
    }
    this.firebase.onMessageReceived()
      .subscribe(async (notification) => {
        if (notification.param1 == 'productInfo') {
          const productId = notification.param2;
          this.navCtrl.navigateForward('/shopitemdetail/' + productId + '/main');
        } else if (notification.param1 == 'beachInfo') {
          const beachId = notification.param2;
          this.navCtrl.navigateForward('/locationdetail/' + beachId);
        } else if (notification.param1 == 'newmessage') {
          // let badgeNum = await this.firebaseService.getAllUnreadMessages();
          // console.log(badgeNum);
          // this.event.publish("onReceiveNotification", {badgeNum: badgeNum});
        }
      });
    await this.registerBackButtonListener();
    this.splashScreen.hide();
    this.myUtils.startTracking();
  }

  grantGeolocationPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
      .then(result => {
        if (!result.hasPermission) {
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
        }
      })
      .catch(err => {
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
      });
  }

  async registerBackButtonListener() {
    this.backBtnSubscriber = this.platform.backButton.subscribe(async() => {
      if (this.router.isActive('/home/main', true) && this.router.url == '/home/main') {
        const exitAlert = await this.altCtrl.create({
          header: 'Close app?',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel'
              }, {
                text: 'Close',
                handler: () => {
                  navigator['app'].exitApp();
                }
              }
            ]
        });
        await exitAlert.present();
      }
    });
  }

  ngOnDestroy() {
    if (this.backBtnSubscriber !== null) {
      this.backBtnSubscriber.unsubscribe();
      this.backBtnSubscriber = null;
      this.myUtils.stopTracking();
    }
  }

}
