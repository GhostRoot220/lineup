import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController, AlertController, NavController, Events } from '@ionic/angular';

import { FirebaseService } from '../../../../services/firebase-service/firebase.service';
import { SurfBoard } from '../../../interface/interface';
import { GalleryPage } from 'src/app/page/modal/gallery/gallery.page';
import { ShowtoastService } from 'src/app/services/showtoast/showtoast.service';

@Component({
  selector: 'app-home-shop-item-detail',
  templateUrl: './home-shop-item-detail.page.html',
  styleUrls: ['./home-shop-item-detail.page.scss'],
})
export class HomeShopItemDetailPage implements OnInit {
  private isCurrentUser = false;
  private isFavoriteProd = false;
  private arrFavProds = [];
  itemid: string;
  slideOptions: any;
  selectedItem: SurfBoard;
  private itemTitle = '';
  private detailInfoLoader = null;
  private backPage = '';

  constructor(
    private route: ActivatedRoute,
    private toastService: ShowtoastService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private altCtrl: AlertController,
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    private event: Events
    ) {
    this.slideOptions = {
      effect: 'flip'
    };

    this.selectedItem = {
      id: '',
      title: '',
      description: '',
      condition: null,
      price: 0,
      imgs: [],
      location: {
        lat: null,
        long: null,
        name: '',
        state: '',
        country: ''
      },
      ownerid: '',
      ownername: ''
    };
  }

  ngOnInit() {
    this.initPage();
  }

  async initPage() {
    this.itemid = this.route.snapshot.paramMap.get('itemid');
    this.backPage = this.route.snapshot.paramMap.get('backpage');
    this.arrFavProds = [];
    await this.checkIfFavProd();
    await this.findItem();
  }

  async checkIfFavProd() {
    this.detailInfoLoader = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await this.detailInfoLoader.present();
    try {
      const currentUserSnapshot = await this.firebaseService.getUserProfile(this.firebaseService.getUID());
      const strFavProds = currentUserSnapshot.val().favorite.products;
      if (strFavProds !== '') {
        this.arrFavProds = strFavProds.split(',');
        this.isFavoriteProd = this.arrFavProds.indexOf(this.itemid) > -1 ? true : false;
      }
    } catch (err) {
      this.detailInfoLoader.dismiss();
      console.log(err);
    }
  }

  async findItem() {
    try {
      const boardInfoSnapshot = await this.firebaseService.getSpecificBoardInfo(this.itemid);
      this.selectedItem = {...boardInfoSnapshot.val()};
      this.itemTitle = this.selectedItem.title;
      this.isCurrentUser = this.firebaseService.checkIfCurrentUser(this.selectedItem.ownerid);
      this.detailInfoLoader.dismiss();
      console.log(this.selectedItem);
    } catch (err) {
      this.detailInfoLoader.dismiss();
      console.log(err);
    }
  }

  async onClickItemImage() {
    const galleryModal = await this.modalCtrl.create({
      component: GalleryPage,
      componentProps: {
        imgs: this.selectedItem.imgs
      },
      cssClass: 'gallery-modal'
    });
    await galleryModal.present();
  }

  sendMessageToOwner() {
    this.navCtrl.navigateForward('/chat/' + this.itemid + '/' + this.selectedItem.ownerid);
  }

  async onClickItemDelete() {
    const confirmAlt = await this.altCtrl.create({
      header: 'Delete Item?',
      subHeader: '',
      message: 'Do you really want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {

          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.deleteItem();
          }
        }
      ]
    });
    await confirmAlt.present();
  }

  async deleteItem() {
    const deleteLoader = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await deleteLoader.present();
    try {
      await this.firebaseService.deleteItem(this.itemid);
      await this.firebaseService.deleteMessage(this.itemid);
      if (this.isFavoriteProd == true) {
        const index = this.arrFavProds.indexOf(this.itemid);
        if (index > -1) {
          this.arrFavProds.splice(index, 1);
        }
      }
      deleteLoader.dismiss();
      this.toastService.showToast('Successfully Deleted!');
    } catch (err) {
      deleteLoader.dismiss();
      console.log(err);
    }
  }

  async onClickSaveBtn() {
    const updateLoader = await this.loadingCtrl.create({
      message: 'Please wait...'
    })    ;
    await updateLoader.present();
    try {
      this.firebaseService.updateItemInfo(this.selectedItem);
      await updateLoader.dismiss();
      this.toastService.showToast('Updated Successfully!');
    } catch (err) {
      console.log(err);
      await updateLoader.dismiss();
      this.toastService.showToast(err.message);
    }
  }

  onToggleFavoriteBtn() {
    this.isFavoriteProd = !this.isFavoriteProd;
    if (this.isFavoriteProd == true) {
      this.arrFavProds.push(this.itemid);
    } else {
      const index = this.arrFavProds.indexOf(this.itemid);
      if (index > -1) {
        this.arrFavProds.splice(index, 1);
      }
    }
  }

  async onClickBackBtn() {
    await this.firebaseService.addFavoriteProducts(this.arrFavProds.join(','));
    this.event.publish('onfavchange');
    if (this.backPage == 'shopmain' ) {
      this.navCtrl.navigateBack('/home/shop');
    } else if (this.backPage == 'main') {
      this.navCtrl.navigateBack('/home/main');
    } else if (this.backPage == 'chat') {
      const chatUserId = localStorage.getItem('posterid');
      localStorage.removeItem('posterid');
      this.navCtrl.navigateBack('chat/' + this.itemid + '/' + chatUserId);
    }
  }

}
