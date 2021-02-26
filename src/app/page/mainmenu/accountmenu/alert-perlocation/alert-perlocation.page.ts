import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alert-perlocation',
  templateUrl: './alert-perlocation.page.html',
  styleUrls: ['./alert-perlocation.page.scss'],
})
export class AlertPerlocationPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  saveAlertSettings() {
    this.navCtrl.navigateBack("/configure-alert");
  }

}
