import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController, Events } from '@ionic/angular';
import { PopoverPage } from "../home-popover/home-popover";

/**
 * import custom services
 */
import { FirebaseService } from 'src/app/services/firebase-service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private id: string;
  private numNoti: Number;

  constructor(
    private popoverCtrl: PopoverController,
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private event: Events
  ) {
    this.event.subscribe("onReceiveNotification", (data) => {
      // this.numNoti = data.badgeNum;
      // console.log(this.numNoti);
    });
  }

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.updateDeviceToken();
  }

  async updateDeviceToken() {
    if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== "") {
      await this.firebaseService.updateDeviceToken(localStorage.getItem("token"));
    }
  }

  async showPopOver() {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

}
