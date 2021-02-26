import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from '../../../../component/component.module';
import { ActivityDetailPage } from './activity-detail.page';
import { ModalModule } from 'src/app/page/modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: ActivityDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ModalModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActivityDetailPage],
})
export class ActivityDetailPageModule {}
