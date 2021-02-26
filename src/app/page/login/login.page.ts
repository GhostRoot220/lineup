import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController, NavController, Events} from '@ionic/angular';
import * as firebase from 'firebase';

/**
 * import custom services
 */
import {ShowtoastService} from '../../services/showtoast/showtoast.service';
import {FirebaseService} from 'src/app/services/firebase-service/firebase.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private usr_email = '';
    private usr_pwd = '';

    constructor(
        private router: Router,
        private loadingCtrl: LoadingController,
        private toastService: ShowtoastService,
        private firebaseService: FirebaseService,
        private navCtrl: NavController,
        private event: Events
    ) {

    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.usr_email = '';
        this.usr_pwd = '';
    }

    async login() {
        if (this.usr_email === '') {
            alert('Please input email address!');
            return;
        }
        if (this.usr_pwd === '') {
            alert('Please input password!');
            return;
        }

        const loginLoader = await this.loadingCtrl.create({
            message: 'Please wait...'
        });
        await loginLoader.present();
        try {
            await firebase.auth().signInWithEmailAndPassword(this.usr_email, this.usr_pwd);
            await loginLoader.dismiss();

            this.event.publish('onAuth');
            this.navCtrl.navigateRoot('/home/main');
        } catch (err) {
            await loginLoader.dismiss();
            let errmsg = '';
            if (err.code === 'auth/user-not-found') {
                errmsg = 'There is no record corresponding to this email address.';
            } else {
                errmsg = err.message;
            }
            this.toastService.showToast(errmsg);
        }
    }

    viewResetPwdPage() {
        this.router.navigateByUrl('/resetpwd');
    }

    viewRegisterPage() {
        this.router.navigateByUrl('/register');
    }

}
