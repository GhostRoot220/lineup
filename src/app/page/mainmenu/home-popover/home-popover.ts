import { Component } from '@angular/core';
import { PopoverController, NavController, LoadingController, Events } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { FirebaseService } from 'src/app/services/firebase-service/firebase.service';

@Component({
  template: `
    <ion-list>
      <ion-item lines='none' button (click)="openAccountPage()">
        <ion-icon name="settings"></ion-icon>&nbsp;<ion-label>Setting</ion-label>
      </ion-item>
      <ion-item lines='none' button (click)="logoutUser()">
        <ion-icon name="log-out"></ion-icon>&nbsp;<ion-label>Logout</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController, private navCtrl: NavController, private firebaseService: FirebaseService) {}

  openDiscussionBoard() {
    this.navCtrl.navigateForward("/discussion");
    this.popoverCtrl.dismiss();
  }

  openAccountPage() {
    const cuid = this.firebaseService.getUID();
    this.navCtrl.navigateForward("/account/" + cuid);
    this.popoverCtrl.dismiss();
  }

  logoutUser() {
    firebase.auth().signOut();
    this.popoverCtrl.dismiss();
  }
}