import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';

/**
 * import custom services
 */
import { FirebaseService } from 'src/app/services/firebase-service/firebase.service';
import { DiscussionCreatePage } from '../discussion-create/discussion-create.page';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
})
export class DiscussionPage implements OnInit {

  private searchKeyword = '';
  private arrDiscussions = [];
  private arrResult = [];

  constructor(
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    ) {

  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.initPage();
  }

  async initPage() {
    const discussionLoader = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await discussionLoader.present();
    const self = this;
    try {
      const discussioSnapshot = await this.firebaseService.getDiscussions();
      self.arrDiscussions = [];
      self.arrResult = [];
      discussioSnapshot.forEach(function(childSnapshot) {
        self.arrDiscussions.push({...childSnapshot.val()});
      });
      self.arrResult = self.arrDiscussions;
      discussionLoader.dismiss();
    } catch (err) {
      discussionLoader.dismiss();
      console.log(err);
    }
  }

  searchDiscussion() {
    if (this.searchKeyword != '') {
      this.arrResult = this.arrDiscussions.filter(item => item.discussionname.toLowerCase().includes(this.searchKeyword.toLowerCase()));
      console.log(this.arrResult);
    } else {
      this.arrResult = this.arrDiscussions;
    }
  }

  onClickDiscussion(discussionid, discussiontitle) {
    this.navCtrl.navigateForward('/discussion-detail/' + discussionid + '/' + discussiontitle + '/main/1');
  }

  async addDiscussion() {
    const discussionCreateModal = await this.modalCtrl.create({
      component: DiscussionCreatePage
    });
    await discussionCreateModal.present();
    discussionCreateModal.onDidDismiss()
      .then((data) => {
        if (data.data != null) {
          this.navCtrl.navigateForward('/discussion-detail/' + data.data.discussionid + '/' + data.data.discussionname + '/main/0');
        }
      });
  }

}
