import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, Events } from '@ionic/angular';
import { FirebaseService } from '../../../../services/firebase-service/firebase.service';
import { Message, UserData } from '../../../interface/interface';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.page.html',
  styleUrls: ['./discussion-detail.page.scss'],
})
export class DiscussionDetailPage implements OnInit {

  private discussionId = '';
  private discussionTitle = '';
  private backPage: string;

  private isFavDiscussion;
  private arrFavDiscussions = [];

  private currentUserid = '';
  private userInfo: UserData = {};
  private discussionCommentTxt = '';
  private detailItems: any;

  private discussionDataRef = null;
  private discussionDataListener = null;

  /**
   * 0: new discussion
   * 1: old discussion
   */
  private isnew: boolean;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private loadingCtrl: LoadingController,
    private event: Events
    ) {
    this.detailItems = [];
  }

  ngOnInit() {
    this.currentUserid = this.firebaseService.getUID();
    this.discussionId = this.route.snapshot.paramMap.get('discussionid');
    this.discussionTitle = this.route.snapshot.paramMap.get('discussiontitle');
    this.backPage = this.route.snapshot.paramMap.get('backpage');
    this.isnew = this.route.snapshot.paramMap.get('isnew') == '0' ? true : false;
  }

  ionViewWillEnter() {
    this.initPage();
  }

  async initPage() {
    this.isFavDiscussion = true;
    this.arrFavDiscussions = [];
    await this.getUserData();
    if (this.userInfo.favorite.discussions !== '') {
      await this.checkIfFavDiscussion();
    }
    this.getAllDiscussionData();
  }

  async checkIfFavDiscussion() {
    const strFavDiscussion = this.userInfo.favorite.discussions;
    this.arrFavDiscussions = strFavDiscussion.split(',');
    if (this.isnew) {
      this.arrFavDiscussions.push(this.discussionId);
    } else {
      this.isFavDiscussion = this.arrFavDiscussions.indexOf(this.discussionId) > -1 ? true : false;
    }
  }

  async getUserData() {
    const userDataSnapshot = await this.firebaseService.getUserProfile(this.currentUserid);
    this.userInfo = userDataSnapshot.val();
  }

  async getAllDiscussionData() {
    const self = this;
    const detailLoader = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await detailLoader.present();
    this.discussionDataRef = this.firebaseService.getDiscussionContentsById(this.discussionId);
    this.discussionDataListener = this.discussionDataRef.on('value', snapshot => {
      self.detailItems = [];
      snapshot.forEach(function(childsnapshot) {
        self.detailItems.push({...childsnapshot.val()});
      });
      detailLoader.dismiss();
    });
  }

  async postDiscussionComment() {
    if (this.discussionCommentTxt == '') {
      alert('Please input your text');
      return;
    } else {
      const commentItem: DiscussionComment = {
        id: '',
        posterid: this.currentUserid,
        postername: this.userInfo.fname + ' ' + this.userInfo.lname,
        content: this.discussionCommentTxt,
        createdat: '',
        title: this.discussionTitle,
        review: 0
      };
      const saveLoader = await this.loadingCtrl.create({
        message: 'Please wait...'
      });
      await saveLoader.present();

      try {
        await this.firebaseService.setDiscussionComment(this.discussionId, commentItem);
        saveLoader.dismiss();
        this.discussionCommentTxt = '';
      } catch (err) {
        saveLoader.dismiss();
        console.log(err);
      }
    }
  }

  onToggleFavoriteBtn() {
    this.isFavDiscussion = !this.isFavDiscussion;
    if (this.isFavDiscussion == true) {
      this.arrFavDiscussions.push(this.discussionId);
    } else {
      const index = this.arrFavDiscussions.indexOf(this.discussionId);
      if (index > -1) {
        this.arrFavDiscussions.splice(index, 1);
      }
    }
    this.firebaseService.addFavDiscussions(this.arrFavDiscussions.join(','));
  }

  async onClickBackBtn() {
    if (this.discussionDataListener !== null) {
      this.discussionDataRef.off('value', this.discussionDataListener);
      this.discussionDataListener = null;
      this.discussionDataRef = null;
    }
    const favLoader = await this.loadingCtrl.create({
      spinner: 'bubbles'
    });
    await favLoader.present();
    await this.firebaseService.addFavDiscussions(this.arrFavDiscussions.join(','));
    favLoader.dismiss();
    if (this.backPage == 'home') {
      this.navCtrl.navigateBack('/home/main');
    } else {
      this.event.publish('onloaddiscussion');
      this.navCtrl.navigateBack('/home/discussion');
    }
  }

}

interface DiscussionComment {
  id: string;
  posterid: string;
  postername: string;
  content: string;
  createdat: string;
  title: string;
  review: number;
}
