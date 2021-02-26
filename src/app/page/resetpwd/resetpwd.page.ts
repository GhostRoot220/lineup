import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from "firebase/app";
import "firebase/auth";

/**
 * import custom services
 */
import { ShowtoastService } from "../../services/showtoast/showtoast.service";

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.page.html',
  styleUrls: ['./resetpwd.page.scss'],
})
export class ResetpwdPage implements OnInit {

  private resetEmail: string = "";

  constructor(private toastService: ShowtoastService, private loadingCtrl: LoadingController, private router: Router) { }

  ngOnInit() {
  }

  async resetPassword() {
    const resetLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await resetLoader.present();
    try {
      await firebase.auth().sendPasswordResetEmail(this.resetEmail);
      await resetLoader.dismiss();
      this.toastService.showToast("Reset email sent to your email. Please check your inbox!");
      this.router.navigateByUrl('');
    } catch(err) {
      await resetLoader.dismiss();
      let errmsg = "";
      if(err.code == "auth/user-not-found") {
        errmsg = "There is no record corresponding to this email address.";
      } else {
        errmsg = err.message
      }
      this.toastService.showToast(errmsg);
    }
  }

}
