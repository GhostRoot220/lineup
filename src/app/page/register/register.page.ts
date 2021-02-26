import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {LoadingController, Events} from '@ionic/angular';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import 'firebase/auth';

/**
 * import interface
 */
import {UserData} from '../../page/interface/interface';

/**
 * import custom services
 */
import {ShowtoastService} from '../../services/showtoast/showtoast.service';
import {MyutilsService} from 'src/app/services/myutils/myutils.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    private inputNewpwdType = 'password';
    private inputRepeatpwdType = 'password';

    private newFname = '';
    private newLname = '';
    private newEmail = '';
    private newPwd = '';
    private newRepeatPwd = '';

    constructor(
        private loadingCtrl: LoadingController,
        private router: Router,
        private toastService: ShowtoastService,
        private myUtils: MyutilsService,
        private event: Events
    ) {
    }

    ngOnInit() {
    }

    onClickEyeIcon(type) {
        if (type == 0) {
            this.inputNewpwdType = this.inputNewpwdType == 'password' ? 'text' : 'password';
        } else {
            this.inputRepeatpwdType = this.inputRepeatpwdType == 'password' ? 'text' : 'password';
        }
    }

    async createNewAccount() {

        if (this.newFname === '') {
            alert('Please input First Name!');
            return;
        }

        if (this.newLname === '') {
            alert('Please input Last Name!');
            return;
        }

        if (this.newEmail === '') {
            alert('Please input Email Address');
            return;
        }

        if (this.newPwd === '') {
            alert('Please input Password');
            return;
        }

        if (this.newRepeatPwd === '') {
            alert('Please input Password again to confirm password is correct');
            return;
        }

        if (this.newPwd !== this.newRepeatPwd) {
            alert('Passwords do not match!');
            return;
        }

        const createLoader = await this.loadingCtrl.create({
            message: 'Please wait...'
        });

        await createLoader.present();

        try {
            const userinfo = await firebase.auth().createUserWithEmailAndPassword(this.newEmail, this.newPwd);
            const currentLocation = this.myUtils.getCurrentLocation();
            if (userinfo.additionalUserInfo.isNewUser == true) {
                const userData: UserData = {
                    uid: userinfo.user.uid,
                    fname: this.newFname,
                    lname: this.newLname,
                    email: this.newEmail,
                    token: localStorage.getItem('token'),
                    password: this.newPwd,
                    phone: '',
                    profileimg: '',
                    noti: {
                        break: true,
                        product: true,
                        message: true,
                        range: 100,
                        start: '06:00',
                        end: '20:00',
                        type: '0'
                    },
                    favorite: {
                        beaches: '',
                        products: '',
                        discussions: ''
                    },
                    location: {
                        lat: currentLocation.lat ? currentLocation.lat : '',
                        long: currentLocation.long ? currentLocation.long : ''
                    },
                    review: 0,
                    adminrole: 0
                };
                await firebase.database().ref('users/' + userinfo.user.uid).update(userData);
                await createLoader.dismiss();
                this.event.publish('onAuth');
                this.router.navigateByUrl('/home/main');
            } else {
                await createLoader.dismiss();
            }
        } catch (err) {
            await createLoader.dismiss();
            let errmsg = '';
            if (err.code == 'auth/email-already-in-use') {
                errmsg = 'Email address is already in use.';
            } else {
                errmsg = err.message;
            }
            this.toastService.showToast(errmsg);
        }
    }
}
