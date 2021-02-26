import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController, Events} from '@ionic/angular';

import {FirebaseService} from '../../../../services/firebase-service/firebase.service';
import {SurfBoard, UserData} from '../../../interface/interface';

@Component({
    selector: 'app-home-shop',
    templateUrl: './home-shop.page.html',
    styleUrls: ['./home-shop.page.scss'],
})
export class HomeShopPage implements OnInit {

    private itemSearchQuery = '';
    private shopItems: SurfBoard[];
    private searchResults: SurfBoard[];
    private userInfo: UserData = {};
    private boardLoader = null;

    /**
     * selected segments
     *  0: All
     *  1: My Items
     *  2: Saved Items
     */
    private selectedSegment = '0';
    private arrMyItems = [];
    private arrMyFavItems = [];

    constructor(
        private router: Router,
        private firebaseService: FirebaseService,
        private loadingCtrl: LoadingController,
        private event: Events
    ) {
        this.shopItems = [];
        this.event.subscribe('onfavchange', data => {
            this.initPage();
        });
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.initPage();
    }

    async initPage() {
        this.shopItems = [];
        this.searchResults = [];
        this.arrMyItems = [];
        this.arrMyFavItems = [];
        this.selectedSegment = '0';
        await this.getUserProfile();
        this.getAllSurfBoards();
    }

    async getUserProfile() {
        this.boardLoader = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await this.boardLoader.present();
        const uid = this.firebaseService.getUID();
        try {
            const userInfoSnapshot = await this.firebaseService.getUserProfile(uid);
            this.userInfo = userInfoSnapshot.val();
        } catch (err) {
            console.log(err);
        }
    }

    async getAllSurfBoards() {
        const self = this;
        try {
            const allBoardsSnapshot = await this.firebaseService.getAllSurfBoard();
            allBoardsSnapshot.forEach(function (items) {
                self.shopItems.push({...items.val(), id: items.key});
            });
            self.searchResults = self.shopItems;
            this.boardLoader.dismiss();
        } catch (err) {
            console.log(err);
            this.boardLoader.dismiss();
        }
    }

    searchItems() {
        const keyWord = this.itemSearchQuery.toLowerCase();
        let arrItems = [];
        if (this.selectedSegment === '0') {
            arrItems = this.shopItems;
        } else if (this.selectedSegment === '1') {
            arrItems = this.arrMyItems;
        } else if (this.selectedSegment === '2') {
            arrItems = this.arrMyFavItems;
        }
        if (keyWord === '') {
            this.searchResults = arrItems;
        } else {
            if (this.shopItems.length > 0) {
                this.searchResults = [];
                for (let i = 0; i < arrItems.length; i++) {
                    const itemDescription = arrItems[i].title.toLowerCase();
                    if (itemDescription.includes(keyWord) === true) {
                        this.searchResults.push(arrItems[i]);
                    }
                }
            }
        }
    }

    viewNewSurfboardPage() {
        this.router.navigateByUrl('/home-shop-newitem');
    }

    viewItemDetailPage(itemid) {
        this.router.navigateByUrl('/shopitemdetail/' + itemid + '/shopmain');
    }

    segmentChanged() {
        const arrUserFavItems = this.userInfo.favorite.products.split(',');
        const uid = this.userInfo.uid;
        if (this.selectedSegment === '0') {
            this.searchResults = this.shopItems;
        } else if (this.selectedSegment === '1') {
            this.searchResults = this.shopItems.filter(x => x.ownerid === uid);
            this.arrMyItems = this.searchResults;
        } else if (this.selectedSegment === '2') {
            this.searchResults = this.shopItems.filter(x => arrUserFavItems.indexOf(x.id) > -1);
            this.arrMyFavItems = this.searchResults;
        }
    }

}
