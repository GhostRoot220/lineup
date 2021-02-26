import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ActionSheetController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { File } from '@ionic-native/file/ngx';
import { MediaCapture, CaptureVideoOptions, CaptureImageOptions, MediaFile } from '@ionic-native/media-capture/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { FirebaseService } from '../../../../services/firebase-service/firebase.service';
import { WAVEQUALITIES, MTOFRATIO } from 'src/app/constants/constants';
import { UserData } from '../../../interface/interface';
import { ShowtoastService } from 'src/app/services/showtoast/showtoast.service';
import { MyutilsService } from 'src/app/services/myutils/myutils.service';

@Component({
  selector: 'app-explore-report',
  templateUrl: './explore-report.page.html',
  styleUrls: ['./explore-report.page.scss'],
})
export class ExploreReportPage implements OnInit {
  @ViewChild('myVideo') myVideo: any;

  private locationId: string;
  private locationName: string;
  private currentUserInfo: UserData = {};
  private waveQualities = WAVEQUALITIES;

  private reportWaveQuality = '';
  private reportWaveSize = '';
  private reportTxt = '';
  private postFile = '';
  /**
     * type
     *  0: Image
     *  1: Video
     */
  private fileType = 0;
  private videoFile = {
    name: '',
    path: ''
  };

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private myUtils: MyutilsService,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private toastService: ShowtoastService,
    private file: File,
    private camera: Camera,
    private mediaCapture: MediaCapture,
    private media: Media,
    private streamingMedia: StreamingMedia,
    private changeDetector: ChangeDetectorRef,
  ) {

  }

  ngOnInit() {
    this.locationId = this.route.snapshot.paramMap.get('locationid');
    this.locationName = this.route.snapshot.paramMap.get('name');
    this.reportWaveSize = (Number(this.route.snapshot.paramMap.get('wavesize')) * MTOFRATIO).toString();
    this.reportWaveQuality = this.route.snapshot.paramMap.get('wavequality');
    this.initPage();
  }

  async initPage() {
    const pageLoader = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await pageLoader.present();
    try {
      const profileInfoSnapshot = await this.firebaseService.getUserProfile(this.firebaseService.getUID());
      this.currentUserInfo = { ...profileInfoSnapshot.val() };
      pageLoader.dismiss();
    } catch (err) {
      pageLoader.dismiss();
      console.log(err);
    }
  }

  async postReport() {
    const reportData = {
      id: '',
      uid: this.currentUserInfo.uid,
      username: this.currentUserInfo.fname + ' ' + this.currentUserInfo.lname,
      reporttxt: this.reportTxt,
      location: {
        lat: this.myUtils.currentUserLocation.lat,
        long: this.myUtils.currentUserLocation.long,
        name: this.locationName,
      },
      locationId: this.locationId,
      reporterLoc: {
        lat: this.myUtils.currentUserLocation.lat,
        long: this.myUtils.currentUserLocation.long
      },
      waveHeight: this.reportWaveSize,
      waveQuality: this.reportWaveQuality,
      createdat: firebase.database.ServerValue.TIMESTAMP,
      postfile: {
        data: '',
        type: this.fileType
      },
      review: 0
    };

    const reportLoader = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await reportLoader.present();

    try {
      await this.firebaseService.setWeatherReport(this.postFile, reportData);
      this.postFile = '';
      reportLoader.dismiss();
      this.toastService.showToast('Report is posted');
      this.navCtrl.pop();
    } catch (err) {
      reportLoader.dismiss();
      this.toastService.showToast(err.message);
    }
  }

  async onClickCameraIcon() {
    this.fileType = 0;
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'File',
      buttons: [{
        text: 'Take Picture',
        icon: 'aperture',
        handler: () => {
          this.fileType = 0;
          this.takePicture();
        }
      }, {
        text: 'Record Video',
        icon: 'videocam',
        handler: () => {
          this.fileType = 1;
          this.videoFile = {
            name: '',
            path: ''
          };
          this.captureVideo();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    try {
      const imageData = await this.camera.getPicture(options);
      this.postFile = 'data:image/jpeg;base64,' + imageData;
    } catch (err) {
      console.log(err);
    }
  }

  async captureVideo() {
    const videoLoader = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    try {
      const capturedOptions: CaptureVideoOptions = {
        limit: 1,
        quality: 0
      };
      const res = await this.mediaCapture.captureVideo(capturedOptions);
      await videoLoader.present();
      const capturedFile = res[0];
      this.videoFile = {
        name: capturedFile.name,
        path: capturedFile.fullPath
      };
      console.log(capturedFile);
      const dir = capturedFile['localURL'].split('/');
      dir.pop();
      const fromDirectory = dir.join('/');
      console.log(this.videoFile);
      this.changeDetector.detectChanges();

      const streamingOptions: StreamingVideoOptions = {
        successCallback: () => { console.log('Video played'); },
        errorCallback: (e) => { console.log('Error streaming'); },
        orientation: 'landscape',
        shouldAutoClose: true,
        controls: false
      };
      this.postFile = await this.file.readAsDataURL(fromDirectory, this.videoFile.name);
      await videoLoader.dismiss();
      this.streamingMedia.playVideo(capturedFile.fullPath, streamingOptions);
    } catch (err) {
      await videoLoader.dismiss();
      console.log(err);
    }
  }

  onClickPlayVideo() {
    const streamingOptions: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played'); },
      errorCallback: (e) => { console.log('Error streaming'); },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };

    this.streamingMedia.playVideo(this.videoFile.path, streamingOptions);
  }

}
