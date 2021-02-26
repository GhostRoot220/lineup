import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GalleryPage } from './gallery/gallery.page';
import { WritemessagePage } from './writemessage/writemessage.page';

@NgModule({
  declarations: [
    GalleryPage,
    WritemessagePage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    GalleryPage,
    WritemessagePage,
  ],
  entryComponents: [
    GalleryPage,
    WritemessagePage,
  ]
})
export class ModalModule { }
