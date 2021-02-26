import { Component, OnInit, Input } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ModalController } from '@ionic/angular';
import { ShowtoastService } from 'src/app/services/showtoast/showtoast.service';
import { SUPPORTEMAIL } from 'src/app/constants/constants';

@Component({
  selector: 'app-writemessage',
  templateUrl: './writemessage.page.html',
  styleUrls: ['./writemessage.page.scss'],
})
export class WritemessagePage implements OnInit {

  private reportMessage = '';
  private title = '';
  private supportEmail = SUPPORTEMAIL;
  @Input('reporttype') reporttype;

  constructor(
    private modalCtrl: ModalController,
    private emailComposer: EmailComposer,
    private toastService: ShowtoastService
    ) { }

  ngOnInit() {
    let subject = '';
    if (this.reporttype == 0) {
      subject = 'Report Abuse';
    } else if (this.reporttype == 1) {
      subject = 'Report User';
    } else if (this.reporttype == 2) {
      subject = 'Suggestions';
    } else {
      subject = 'Missing Beach?';
    }
    this.title = subject;
  }

  onClickSendBtn() {
    let subject = '';
    if (this.reporttype == 0) {
      subject = 'Report Abuse';
    } else if (this.reporttype == 1) {
      subject = 'Report User';
    } else if (this.reporttype == 2) {
      subject = 'Suggestions';
    } else {
      subject = 'Missing Beach?';
    }
    const email = {
      to: this.supportEmail,
      cc: '',
      bcc: [],
      attachments: [],
      subject: subject,
      body: this.reportMessage,
      isHtml: false
    };
    this.emailComposer.open(email);
    this.modalCtrl.dismiss();
  }

}
