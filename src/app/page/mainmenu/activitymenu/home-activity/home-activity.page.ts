import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, PopoverController, Events } from '@ionic/angular';

import { FirebaseService } from '../../../../services/firebase-service/firebase.service';
import { UserData } from 'src/app/page/interface/interface';
import { ActivitypopoverPage } from '../activitypopover/activitypopover.page';
import { MyutilsService } from 'src/app/services/myutils/myutils.service';

@Component({
  selector: 'app-home-activity',
  templateUrl: './home-activity.page.html',
  styleUrls: ['./home-activity.page.scss'],
})
export class HomeActivityPage implements OnInit {

  private currentUserId: string;
  private currentUserInfo: UserData = {};

  private messageDataRef = null;
  private messageDataListener = null;
  private allContacts = [];
  private contacts = [];
  private historyLoader = null;
  private arrHideLists = [];

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private myUtils: MyutilsService,
    private loadingCtrl: LoadingController,
    private popoverCtrl: PopoverController,
    private event: Events) {
    this.event.subscribe('onchangehidelist', (data) => {
      this.initPage();
    });
  }

  ngOnInit() {
    this.currentUserId = this.firebaseService.getUID();
  }

  ionViewWillEnter() {
    this.initPage();
  }

  async initPage() {
    this.messageDataRef = null;
    this.messageDataListener = null;

    this.arrHideLists = [];
    if(localStorage.getItem("hidelist") !== null && localStorage.getItem("hidelist") !== "") {
      const strHideLists = localStorage.getItem("hidelist");
      this.arrHideLists = strHideLists.split(",");
    }

    await this.getCurrentUserInfo();
    await this.getChatHistory();

    this.event.publish("onReceiveNotification", {isClear: true});
  }

  async getCurrentUserInfo() {
    this.historyLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await this.historyLoader.present();
    try {
      const currentUserSnapshot = await this.firebaseService.getUserProfile(this.currentUserId);
      this.currentUserInfo = {...currentUserSnapshot.val()};
    } catch(err) {
      this.historyLoader.dismiss();
      console.log(err);
    }
  }

  async getChatHistory() {
    var self = this;
    this.messageDataRef = this.firebaseService.getAllChatHistoryRef();
    this.messageDataListener = this.messageDataRef.on("value", snapshot => {
      self.contacts = [];
      self.allContacts = [];
      snapshot.forEach(function(childSnapshot) {
        childSnapshot.forEach(function(valueSnapshot) {
          let users = valueSnapshot.key.split("-");
          let tmpCUIndex = users.findIndex(item => item == self.currentUserId);
          let tmpMessageObj = valueSnapshot.val();
          let boardName = "";
          let boardImg = "";
          if(tmpMessageObj !== null) {
            boardName = tmpMessageObj[Object.keys(tmpMessageObj)[0]].boardName;
            boardImg = tmpMessageObj[Object.keys(tmpMessageObj)[0]].contentimg;
          }
          if(tmpCUIndex > -1) {
            let otherUID = tmpCUIndex==0?users[1]:users[0];
            let isExists = self.contacts.findIndex(item => item == otherUID);
            if(isExists == -1) {
              self.getUserData(otherUID, childSnapshot.key, boardName, boardImg);
            }
          }
        });
      });
      self.myUtils.setChatHistory(this.allContacts);
      self.historyLoader.dismiss();
    });
  }

  async getUserData(uid, itemid, boardName, boardImg) {
    try {
      const userInfoSnapshot = await this.firebaseService.getUserProfile(uid);
      let isHidden = this.arrHideLists.indexOf(itemid);
      let isAllExists = this.allContacts.findIndex(x => x.itemid === itemid);
      let isContactExists = this.contacts.findIndex(x => x.itemid === itemid);
      if(isAllExists == -1) {
        this.allContacts.push({...userInfoSnapshot.val(), itemid: itemid, boardName: boardName, boardImg: boardImg, name: userInfoSnapshot.val().fname + " " + userInfoSnapshot.val().lname});
      }
      if(isHidden == -1 && isContactExists == -1) {
        this.contacts.push({...userInfoSnapshot.val(), itemid: itemid, boardName: boardName, boardImg: boardImg, name: userInfoSnapshot.val().fname + " " + userInfoSnapshot.val().lname});
      }
    } catch(err) {
      console.log(err);
    }
  }

  viewChatRoom(contactid) {
    this.stopActivityListener();
    this.navCtrl.navigateForward('/chat/' + this.contacts[contactid].itemid + "/" + this.contacts[contactid].uid);
  }

  onClickMessageControlBtn(evt, itemid) {
    evt.stopPropagation();
    this.arrHideLists.push(itemid);
    let index = this.contacts.findIndex(x=>x.itemid==itemid);
    if(index > -1) {
      this.contacts.splice(index, 1);
    }

    localStorage.setItem("hidelist", this.arrHideLists.join(","));
  }

  async onClickPopOver() {
    const popover = await this.popoverCtrl.create({
      component: ActivitypopoverPage,
      event
    });
    await popover.present();
  }

  ionViewWillLeave() {
    this.stopActivityListener();
  }

  stopActivityListener() {
    if(this.messageDataListener != null) {
      this.messageDataRef.off("value", this.messageDataListener);
      this.messageDataListener = null;
      this.messageDataRef = null;
    }
  }

}
