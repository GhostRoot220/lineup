import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import * as firebase from "firebase/app";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

/**
 * import interface
 */
import { UserData } from '../../../interface/interface';

/**
 * import custom services
 */
import { ShowtoastService } from "../../../../services/showtoast/showtoast.service";
import { FirebaseService } from '../../../../services/firebase-service/firebase.service';
import { MyutilsService } from 'src/app/services/myutils/myutils.service';
import { WritemessagePage } from 'src/app/page/modal/writemessage/writemessage.page';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  private isCurrentUser: boolean = true;
  private selectedUID: string;
  private userData: UserData = {};
  private userEmail: string = "";
  private newPwd: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private altCtrl: AlertController,
    private modalCtrl: ModalController,
    private toastService: ShowtoastService,
    private firebaseService: FirebaseService,
    private myUtil: MyutilsService,
    private camera: Camera
    ) {
    this.selectedUID = this.route.snapshot.paramMap.get("userid");
    this.userData = {};
  }

  ngOnInit() {
    this.isCurrentUser = this.firebaseService.checkIfCurrentUser(this.selectedUID);
    this.getUserData();
  }

  async getUserData() {
    const userInfoLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await userInfoLoader.present();
    const userProfileSnapshot = await this.firebaseService.getUserProfile(this.selectedUID);
    this.userData = userProfileSnapshot.val();
    this.userEmail = this.userData.email;
    this.myUtil.setUserData(this.userData);
    userInfoLoader.dismiss();
  }

  async onClickSaveBtn() {
    let isEmailChanged = this.userData.email!==this.userEmail?true: false;
    if(isEmailChanged) {
      this.openReAuthWindow(0);
    } else {
      this.saveUpdatedValue();
    }
  }

  async onClickProfileImg() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: 1,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };

    const imgSelectLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });

    const selectedImg = 'data:image/jpeg;base64,' + await this.camera.getPicture(options);
    try {
      await imgSelectLoader.present();
      await this.firebaseService.uploadProfileImage(selectedImg, this.selectedUID);
      this.userData.profileimg = await this.firebaseService.getProfileImage(this.selectedUID);
      await this.firebaseService.updateProfileImageOnDB(this.selectedUID, this.userData.profileimg);
      await imgSelectLoader.dismiss();
    } catch(err) {
      imgSelectLoader.dismiss();
      console.error(err);
    }
  }

  async onClickChangePwd() {
    this.openReAuthWindow(1);
  }

  async updatePassword() {
    const user = this.firebaseService.getAuthUser();
    const pwdUpdateLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await pwdUpdateLoader.present();
    try {
      await user.updatePassword(this.newPwd);
      pwdUpdateLoader.dismiss();
      this.toastService.showToast("Password updated successfully!");
    } catch(err) {
      console.log(err);
      pwdUpdateLoader.dismiss();
      this.toastService.showToast(err.message);
    }
  }

  async openReAuthWindow(type) {
    let inputs = [];
    let header = "Confirm User";
    if(type == 0) {
      inputs = [
        {
          name: 'value',
          type: 'password',
          placeholder: 'Please input password'
        }
      ]
    } else {
      header = "Change Password";
      inputs = [
        {
          name: 'value',
          type: 'password',
          placeholder: 'Current password'
        },
        {
          name: 'value1',
          type: 'password',
          placeholder: 'New password'
        },
        {
          name: 'value2',
          type: 'password',
          placeholder: 'Confirm New password'
        }
      ]
    }
    const reauthAlt = await this.altCtrl.create({
      header: header,
      inputs: inputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Ok',
          handler: (data) => {
            if(type == 1) {
              if(data.value1 == data.value2) {
                this.newPwd = data.value1;
              } else {
                this.toastService.showToast("New password doesn't match!");
                return;
              }
            }
            this.reAuthUser(type, data.value);
          }
        }
      ]
    });
    await reauthAlt.present();
  }

  async reAuthUser(type, pwd) {
    const user = this.firebaseService.getAuthUser();
    try {
      const userCredential = firebase.auth.EmailAuthProvider.credential(user.email, pwd);
      await user.reauthenticateWithCredential(userCredential);
      if(type == 0) {
        this.userData.email = this.userEmail;
        this.saveUpdatedValue();
      } else {
        this.updatePassword();
      }
    } catch(err) {
      console.log(err);
      this.toastService.showToast(err.message);
    }
  }

  onClickNotiSettingBtn() {
    this.router.navigateByUrl("/account-noti-setting");
  }

  async onClickReportBtn(type) {
    /**
     * type
     *  0: abuse
     *  1: user
     *  2: suggestion
     *  3: missing beach
     */
    const reportModal = await this.modalCtrl.create({
      component: WritemessagePage,
      cssClass: "report-modal",
      componentProps: {
        reporttype: type
      }
    });
    await reportModal.present();
  }

  viewSendMessagePage() {
    this.router.navigateByUrl("/chat/" + this.selectedUID);
  }

  async saveUpdatedValue() {
    const saveLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });

    await saveLoader.present();
    try {
      const authUser = this.firebaseService.getAuthUser();
      await authUser.updateEmail(this.userEmail);
      await firebase.database().ref("users/" + this.userData.uid).update(this.userData);
      await saveLoader.dismiss();
      this.toastService.showToast("Account setting updated!");
    } catch(err) {
      await saveLoader.dismiss();
      this.toastService.showToast(err.message);
    }
  }

  async logOut() {
    await this.firebaseService.logOutUser();
  }

}
