import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase-service/firebase.service';
import { UserData } from '../../../interface/interface';
import { ShowtoastService } from 'src/app/services/showtoast/showtoast.service';

@Component({
  selector: 'app-discussion-create',
  templateUrl: './discussion-create.page.html',
  styleUrls: ['./discussion-create.page.scss'],
})
export class DiscussionCreatePage implements OnInit {
  private isFavoritePage = false;

  txtTopic = '';
  posterInfo: UserData = {};

  constructor(
      private modalCtrl: ModalController,
      private firebaseService: FirebaseService,
      private loadingCtrl: LoadingController,
      private toastService: ShowtoastService
  ) { }

  ngOnInit() {
    this.posterInfo = {};
    this.getPosterInfo();
  }

  async getPosterInfo() {
    const cuid = this.firebaseService.getUID();
    const profileLoader = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await profileLoader.present();
    try {
      const profileSnapshot = await this.firebaseService.getUserProfile(cuid);
      this.posterInfo = profileSnapshot.val();
      profileLoader.dismiss();
    } catch (err) {
      profileLoader.dismiss();
      console.log(err);
    }
  }

  async createTopic() {
    const saveLoader = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await saveLoader.present();
    const item = {
      discussionid: '',
      discussionname: this.txtTopic,
      posterid: this.posterInfo.uid,
      postername: this.posterInfo.fname,
      createdat: null,
    };
    try {
      item.discussionid = await this.firebaseService.addDiscussionTopic(item);
      this.isFavoritePage = !this.isFavoritePage;
      const strFavorites = localStorage.getItem('favDiscussion');
      let arrFavorites = [];
      if (!this.isFavoritePage) {
        arrFavorites = strFavorites.split(',');
        const favLocIndex = arrFavorites.findIndex(x => x == item.discussionid);
        arrFavorites.splice(favLocIndex, 1);
        localStorage.setItem('favDiscussion', arrFavorites.join(','));
        this.firebaseService.addFavDiscussions(localStorage.getItem('favDiscussion'));
      } else {
        if (localStorage.getItem('favDiscussion') !== null && localStorage.getItem('favDiscussion') !== '') {
          arrFavorites = strFavorites.split(',');
          arrFavorites.push(item.discussionid);
          localStorage.setItem('favDiscussion', arrFavorites.join(','));
          this.firebaseService.addFavDiscussions(localStorage.getItem('favDiscussion'));
        } else {
          localStorage.setItem('favDiscussion', item.discussionid);
          this.firebaseService.addFavDiscussions(localStorage.getItem('favDiscussion'));
        }
      }
      saveLoader.dismiss();
      this.toastService.showToast('Topic is created successfully!');
      this.modalCtrl.dismiss(item);
    } catch (err) {
      saveLoader.dismiss();
      this.toastService.showToast(err.message);
      this.modalCtrl.dismiss(null);
    }
  }

  closeDiscussionCreate() {
    this.modalCtrl.dismiss(null);
  }

}
