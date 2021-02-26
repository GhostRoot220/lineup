import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from 'src/app/services/firebase-service/firebase.service';
import { WAVEQUALITIES } from 'src/app/constants/constants';
import { UserData } from '../../interface/interface';
import { Events, LoadingController } from '@ionic/angular';
import { MyutilsService } from 'src/app/services/myutils/myutils.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.page.html',
  styleUrls: ['./home-main.page.scss'],
})
export class HomeMainPage implements OnInit {

  private currentUserId = '';
  private arrWaveQualities = WAVEQUALITIES;

  /**
   * Weather Reports
   */
  private weatherReportdataRef = null;
  private weatherReportdataListener = null;
  private weatherReports: ReportsInfo[];

  /**
   * Board Reports
   */
  private boardDataRef = null;
  private boardDataListener = null;
  private allNewSurfBoards = [];

  /**
   * Recent Discussions
   */
  private discussionDetailRef = null;
  private discussionDetailListener = null;
  private arrDiscussions = [];

  /**
   * User Info
   */
  private userInfo: UserData = {};
  private arrFavBeachesId = [];

  /**
   * Event Listener
   */
  authListener = null;

  private countLoader = 0;
  private dataLoader = null;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private event: Events,
    private loadingCtrl: LoadingController,
    private  myUtils: MyutilsService
    ) {
    this.authListener = this.event.subscribe('onAuth', (data) => {
      console.log('Auth Called!');
      this.initPage();
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    /**
     * Init page
     */
    this.initPage();
  }

  async initPage() {
    this.countLoader = 0;
    this.currentUserId = this.firebaseService.getUID();

    /**
     * Weather
     */
    this.weatherReportdataRef = null;
    this.weatherReportdataListener = null;
    this.weatherReports = [];

    /**
     * Board
     */
    this.boardDataRef = null;
    this.boardDataListener = null;
    this.allNewSurfBoards = [];

    /**
     * Discussion
     */
    this.discussionDetailRef = null;
    this.discussionDetailListener = null;
    await this.getUserInfo();
    this.dataLoader = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.dataLoader.present();
    this.getAllLocationReports();
    this.getNewBoardItems();
    this.getDiscussionContents();
  }

  async getUserInfo() {
    const userInfoSnapshot = await this.firebaseService.getUserProfile(this.currentUserId);
    this.userInfo = userInfoSnapshot.val();
  }

  async getAllLocationReports() {
    const self = this;
    this.arrFavBeachesId = this.userInfo.favorite.beaches.split(',');
    this.weatherReportdataRef = this.firebaseService.getAllWeatherReports();
    this.weatherReportdataListener = this.weatherReportdataRef.on('value', snapshot => {
      self.weatherReports = [];
      const tmpArr = [];
      snapshot.forEach(function(childSnapshot) {
        const favIndex = self.arrFavBeachesId.indexOf(childSnapshot.key);
        if (favIndex > -1) {
          childSnapshot.forEach(function(valueSnapshot) {
            tmpArr.push({...valueSnapshot.val()});
          });
        }
      });
      tmpArr.reverse();
      tmpArr.filter(function(item) {
        const i = self.weatherReports.findIndex(x => (x.uid == item.uid));
        if (i <= -1) {
          self.weatherReports.push(item);
        }
        return null;
      });
      self.countLoader++;
      if (self.countLoader == 2) {
        self.dismissDataLoader();
      }
    });
  }

  getNewBoardItems() {
    const self = this;
    const itemRange = Number(this.userInfo.noti.range);
    this.boardDataRef = this.firebaseService.getAllSurfBoardRealtime();
    this.boardDataListener = this.boardDataRef.on('value', snapshot => {
      self.allNewSurfBoards = [];
      snapshot.forEach(function(boardSnapshot) {
        const distance = self.myUtils.distance(self.userInfo.location.lat, self.userInfo.location.long, boardSnapshot.val().location.lat, boardSnapshot.val().location.long, 'N');
        // if (itemRange >= Number(distance)) {
          self.allNewSurfBoards.push({...boardSnapshot.val()});
        // }
      });
      self.countLoader++;
      if (self.countLoader == 2) {
        self.dismissDataLoader();
      }
    });
  }

  getDiscussionContents() {
    const self = this;
    const favDiscussions = this.userInfo.favorite.discussions.split(',');
    this.discussionDetailRef = this.firebaseService.getAllDiscussionContents();
    this.discussionDetailListener = this.discussionDetailRef.on('value', snapshot => {
      this.arrDiscussions = [];
      snapshot.forEach(function(childSnapshot) {
        const isFavDiscussion = favDiscussions.indexOf(childSnapshot.key);
        if (isFavDiscussion > -1) {
          const tmpArr = [];
          childSnapshot.forEach(function(valSnapshot) {
            tmpArr.push({...valSnapshot.val(), discussionid: childSnapshot.key});
          });
          if (tmpArr.length > 0) {
            self.arrDiscussions.push(tmpArr[tmpArr.length - 1]);
          }
        }
      });
    });
  }

  onClickDiscussionItem(item) {
    this.router.navigateByUrl('/discussion-detail/' + item.discussionid + '/' + item.title + '/home/1');
  }

  dismissDataLoader() {
    if (this.dataLoader !== null) {
      this.dataLoader.dismiss();
      this.dataLoader = null;
    }
  }

  viewItemDetail(itemid) {
    this.router.navigateByUrl('/shopitemdetail/' + this.allNewSurfBoards[itemid].id + '/main');
  }

  onClickReportItem(reportIndex) {
    this.router.navigateByUrl('/locationdetail/' + this.weatherReports[reportIndex].locationId);
  }

  onClickFavBeach(beachIndex) {
    this.router.navigateByUrl('/locationdetail/' + this.arrFavBeachesId[beachIndex]);
  }

  ionViewWillLeave() {
    if (this.weatherReportdataListener !== null) {
      this.weatherReportdataRef.off('value', this.weatherReportdataListener);
      this.weatherReportdataListener = null;
      this.weatherReportdataRef = null;
    }
    if (this.boardDataListener !== null) {
      this.boardDataRef.off('value', this.boardDataListener);
      this.boardDataListener = null;
      this.boardDataRef = null;
    }
    if (this.authListener !== null) {
      this.event.unsubscribe('onAuth', this.authListener);
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
  locationId: string;
  waveHeight: string;
  waveQuality: string;
  createdat: string;
}
