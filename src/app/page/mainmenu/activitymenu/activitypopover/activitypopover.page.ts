import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  template: `
  <ion-list>
    <ion-item button lines='none' (click)="openHidenList()">
      <ion-label>Hidden Messages</ion-label>
    </ion-item>
  </ion-list>`
})
export class ActivitypopoverPage implements OnInit {

  constructor(private router: Router, private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  openHidenList() {
    this.router.navigateByUrl('/hidelist');
    this.popoverCtrl.dismiss();
  }

}
