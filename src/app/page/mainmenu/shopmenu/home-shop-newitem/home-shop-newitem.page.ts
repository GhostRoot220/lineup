import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';

import { FirebaseService } from '../../../../services/firebase-service/firebase.service';
import { ShowtoastService } from '../../../../services/showtoast/showtoast.service';
import { SurfBoard } from '../../../interface/interface';
import { MyutilsService } from 'src/app/services/myutils/myutils.service';


@Component({
  selector: 'app-home-shop-newitem',
  templateUrl: './home-shop-newitem.page.html',
  styleUrls: ['./home-shop-newitem.page.scss'],
})
export class HomeShopNewitemPage implements OnInit {

  @ViewChild('shopmap') shopMapRef: ElementRef;

  // private arrCondition = BOARDCONDITIONS;
  private autocompleteService: any;
  private placesService: any;
  private newItem: SurfBoard;
  private locationQuery = '';
  private places = [];
  private searchDisabled: boolean;
  private saveDisabled: boolean;
  private isvaluechanged = false;
  private selectedLocation: any = null;
  prev_marker: any = null;

  /**
   * Owner Info
   */
  private ownerName: string;
  private ownerId: string;
  private ownerAddress = '';

  /**
   * Item info
   */
  private offerTitle = '';
  private boardDescription = '';
  private boardPrice = null;
  // private boardCondition = 0;

  /**
   * selected images for board
   */
  private tmpItemImgs: string[] = ['', '', '', '', '', ''];
  private isImageSelected = false;

  constructor(
      private camera: Camera,
      private loadingCtrl: LoadingController,
      private firebaseService: FirebaseService,
      private myUtils: MyutilsService,
      private toastService: ShowtoastService,
      private router: Router) {
    this.newItem = {
      id: '',
      title: '',
      description: '',
      condition: null,
      price: 0,
      location: {
        lat: null,
        long: null,
        name: '',
        state: '',
        country: ''
      },
      imgs: [],
      ownerid: '',
      ownername: '',
      createdat: null
    };
  }

  ngOnInit() {
    this.getOwnerInfo();
  }

  async getOwnerInfo() {
    this.ownerId = this.firebaseService.getUID();
    try {
      const userInfoSnapshot = await this.firebaseService.getUserProfile(this.ownerId);
      this.ownerName = userInfoSnapshot.val().fname + ' ' + userInfoSnapshot.val().lname;
      this.ownerAddress = userInfoSnapshot.val().address;
    } catch (err) {
      console.log(err);
    }
  }

  async getFile(imgId) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    const imgSelectLoader = await this.loadingCtrl.create({
      message: 'Loading...'
    });

    try {
      const selectedImg = 'data:image/jpeg;base64,' + await this.camera.getPicture(options);
      const imgref = 'img' + imgId;
      await imgSelectLoader.present();
      await this.firebaseService.uploadBoardImage(selectedImg, this.ownerId, imgref);
      this.tmpItemImgs[imgId] = await this.firebaseService.getBoardImgUrl(this.ownerId, imgref);
      this.isImageSelected = true;
      await imgSelectLoader.dismiss();
    } catch (err) {
      imgSelectLoader.dismiss();
      console.error(err);
    }
  }

  async addNewItem() {
    if (this.isImageSelected === false) {
      alert('Please select Board Image!');
      return;
    }
    const itemSaveloader = await this.loadingCtrl.create({
      message: 'Adding new item...'
    });
    await itemSaveloader.present();

    this.newItem.ownerid = this.ownerId;
    this.newItem.ownername = this.ownerName;
    this.newItem.description = this.boardDescription;
    this.newItem.price = this.boardPrice == null ? 0 : this.boardPrice;
    this.newItem.title = this.offerTitle;
    this.newItem.location = {
      lat: this.myUtils.currentUserLocation.lat !== null ? this.myUtils.currentUserLocation.lat : 32.7,
      long: this.myUtils.currentUserLocation.long !== null ? this.myUtils.currentUserLocation.long : -117,
      name: '',
      state: '',
      country: ''
    };
    for (let i = 0; i < this.tmpItemImgs.length; i++) {
      if (this.tmpItemImgs[i] !== '') {
        this.newItem.imgs.push(this.tmpItemImgs[i]);
      }
    }

    const newKey = this.firebaseService.getNewBoardItemKey();
    this.newItem.id = newKey;
    try {
      await this.firebaseService.addNewBoardItem(newKey, this.newItem);
      await itemSaveloader.dismiss();
      this.toastService.showToast('New Item is added successfully!');
    } catch (err) {
      await itemSaveloader.dismiss();
      this.toastService.showToast(err.message);
    }
  }

  closeNewItemPage() {
    this.router.navigateByUrl('/home/shop');
  }
}
