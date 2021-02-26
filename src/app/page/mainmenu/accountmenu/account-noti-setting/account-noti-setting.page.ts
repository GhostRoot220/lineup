import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

/**
 * import custom services
 */
import { FirebaseService } from 'src/app/services/firebase-service/firebase.service';
import { MyutilsService } from 'src/app/services/myutils/myutils.service';
import { ShowtoastService } from 'src/app/services/showtoast/showtoast.service';

@Component({
  selector: 'app-account-noti-setting',
  templateUrl: './account-noti-setting.page.html',
  styleUrls: ['./account-noti-setting.page.scss'],
})
export class AccountNotiSettingPage implements OnInit {

  private notiSettings = {
    break: false,
    message: false,
    product: false,
    range: 100,
    start: "06:00",
    end: "20:00",
    type: '0'
  };

  constructor(
    private firebaseService: FirebaseService,
    private loadingCtrl: LoadingController,
    private myUtil: MyutilsService,
    private toastService: ShowtoastService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    if(this.myUtil.getUserData().noti !== undefined && this.myUtil.getUserData().noti !== null) {
      this.notiSettings = this.myUtil.getUserData().noti;
      console.log(this.notiSettings);
    }
  }

  onClickNavBack() {
    this.navCtrl.back();
  }

  async onClickSaveBtn() {
    const saveLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await saveLoader.present();

    try {
      await this.firebaseService.updateNotiSetting(this.notiSettings);
      saveLoader.dismiss();
      this.toastService.showToast("Settings updated!");
    } catch(err) {
      saveLoader.dismiss();
      console.log(err);
    }
  }

}
