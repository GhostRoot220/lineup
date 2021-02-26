import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  @Input('imgs') imgs;
  sliderOpts = {
    zoom: {
      maxRatio: 3
    }
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  closeGalleryModal() {
    this.modalCtrl.dismiss();
  }

}
