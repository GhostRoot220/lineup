import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { DiscussionPage } from './discussion.page';
import { DiscussionCreatePage } from '../discussion-create/discussion-create.page';

const routes: Routes = [
  {
    path: '',
    component: DiscussionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiscussionPage, DiscussionCreatePage],
  entryComponents: [DiscussionCreatePage]
})
export class DiscussionPageModule {}
