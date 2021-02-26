import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase-service/firebase.service';
import { GalleryPage } from 'src/app/page/modal/gallery/gallery.page';

@Component({
  selector: 'app-reportitems',
  templateUrl: './reportitems.page.html',
  styleUrls: ['./reportitems.page.scss'],
})
export class ReportitemsPage implements OnInit {
  private arrReports = [];
  private locationid = "";
  private locationTitle =  "";

  constructor(private router: Router, private route: ActivatedRoute, private loadingCtrl: LoadingController, private modalCtrl: ModalController, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.initPage();
  }

  async initPage() {
    this.locationid = this.route.snapshot.paramMap.get("locationid");
    this.locationTitle = this.route.snapshot.paramMap.get("locationtitle");
    const dataLoader = await this.loadingCtrl.create();
    await dataLoader.present();
    var self = this;
    try {
      const reportsSnapshot = await this.firebaseService.getAllWeatherReportsForLocation(this.locationid);
      reportsSnapshot.forEach(function(valueSnapshot) {
        self.arrReports.push({...valueSnapshot.val()});
      });
      dataLoader.dismiss();
    } catch(err) {
      dataLoader.dismiss();
      console.log(err);
    }
  }

  async viewReportImage(url) {
    const galleryModal = await this.modalCtrl.create({
      component: GalleryPage,
      componentProps: {
        imgs: [url]
      },
      cssClass: 'gallery-modal'
    });
    await galleryModal.present();
  }

}
