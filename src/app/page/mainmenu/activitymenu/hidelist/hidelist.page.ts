import { Component, OnInit } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
import { MyutilsService } from 'src/app/services/myutils/myutils.service';

@Component({
  selector: 'app-hidelist',
  templateUrl: './hidelist.page.html',
  styleUrls: ['./hidelist.page.scss'],
})
export class HidelistPage implements OnInit {

  private arrContacts = [];
  private arrHideLists = [];
  private arrHideItems = [];

  constructor(private navCtrl: NavController, private myUtils: MyutilsService, private event: Events) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  initPage() {
    this.arrHideLists = [];
    this.arrContacts = this.myUtils.getChatHistory();
    if(localStorage.getItem("hidelist") !== null && localStorage.getItem("hidelist") !== "") {
      const strHideList = localStorage.getItem("hidelist");
      this.arrHideLists = strHideList.split(",");
    }
    this.arrHideItems = this.arrContacts.filter(x => {
      return this.arrHideLists.indexOf(x.itemid) > -1;
    });
  }

  onClickMessageControlBtn(evt, itemid) {
    let arrIndex = this.arrHideLists.indexOf(itemid);
    let itemIndex = this.arrHideItems.findIndex(x => x.itemid == itemid);
    if(arrIndex > -1) {
      this.arrHideLists.splice(arrIndex, 1);
    }

    if(itemIndex > -1) {
      this.arrHideItems.splice(itemIndex, 1);
    }

    if(this.arrHideLists.length > 0) {
      localStorage.setItem("hidelist", this.arrHideLists.join(","));
    } else {
      localStorage.setItem("hidelist", "");
    }
  }

  onClickBackBtn() {
    this.event.publish("onchangehidelist");
    this.navCtrl.navigateBack('home/activity');
  }

}
