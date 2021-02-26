import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from '../../../../component/component.module';
import { PipesModule } from '../../../../pipes/pipes.module';

import { DiscussionDetailPage } from './discussion-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DiscussionDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiscussionDetailPage]
})
export class DiscussionDetailPageModule {}
