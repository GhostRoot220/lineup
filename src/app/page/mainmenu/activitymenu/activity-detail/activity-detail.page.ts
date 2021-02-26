import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';

import { Message, UserData } from '../../../interface/interface';
import { FirebaseService } from 'src/app/services/firebase-service/firebase.service';
import { MyutilsService } from 'src/app/services/myutils/myutils.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {

  private detailMessages: Message[];
  private boardInfo: any = null;
  private itemId = '';
  private chatUserId: string;
  private chatDataRef = null;
  private chatDataListener = null;

  private currentUserInfo: UserData = {};
  private messageTxt = '';
  private chatRoom = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private myUtils: MyutilsService,
    private loadingCtrl: LoadingController,
  ) {
    this.detailMessages = [];
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.initPage();
  }

  async initPage() {
    this.itemId = this.route.snapshot.paramMap.get('itemid');
    this.chatUserId = this.route.snapshot.paramMap.get('poster');
    await this.getChatHistory();
  }

  async getChatHistory() {
    const messageLoader = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await messageLoader.present();

    const cuid = this.firebaseService.getUID();
    const userProfileSnapshot = await this.firebaseService.getUserProfile(cuid);
    this.currentUserInfo = userProfileSnapshot.val();


    if (cuid >= this.chatUserId) {
      this.chatRoom = this.chatUserId + '-' + cuid;
    } else {
      this.chatRoom = cuid + '-' + this.chatUserId;
    }
    console.log(cuid, this.chatUserId, this.chatRoom);
    const self = this;

    /**
     * Get Current Board Info
     */

    try {
      const boardInfoSnapshot = await this.firebaseService.getSpecificBoardInfo(this.itemId);
      this.boardInfo = boardInfoSnapshot.val();
    } catch (err) {
      messageLoader.dismiss();
      console.log(err);
    }

    this.chatDataRef = this.firebaseService.getMessageDataRef(this.itemId, this.chatRoom);
    this.chatDataListener = this.chatDataRef.on('value', snapshot => {
      self.detailMessages = [];
      snapshot.forEach(function(chidlsnapshot) {
        self.detailMessages.push({...chidlsnapshot.val()});
      });
      if (messageLoader !== null) {
        messageLoader.dismiss();
      }
    });
  }

  onClickBoardImage() {
    this.clearDataListener();
    localStorage.setItem('posterid', this.chatUserId);
    this.router.navigateByUrl('/shopitemdetail/' + this.itemId + '/chat');
  }

  sendMessage() {
    if (this.messageTxt !== '') {
      const messageItem = {
        uid: this.firebaseService.getUID(),
        name: this.currentUserInfo.fname + ' ' + this.currentUserInfo.lname,
        photo: '',
        content: this.messageTxt,
        time: firebase.database.ServerValue.TIMESTAMP,
        contentimg: this.boardInfo.imgs[0],
        boardName: this.boardInfo.title,
        isRead: false,
        location: {
          lat: this.myUtils.currentUserLocation.lat,
          long: this.myUtils.currentUserLocation.long
        },
        review: 0
      };

      this.firebaseService.sendMessage(this.itemId, this.chatRoom, messageItem);
      this.messageTxt = '';
    }
  }

  clearDataListener() {
    if (this.chatDataListener !== null) {
      this.chatDataRef.off('value', this.chatDataListener);
      this.chatDataListener = null;
      this.chatDataRef = null;
    }
  }

  onClickBackBtn() {
    this.clearDataListener();
    this.router.navigateByUrl('/home/activity');
  }

}
