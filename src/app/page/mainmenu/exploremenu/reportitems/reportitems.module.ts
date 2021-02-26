import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ModalModule } from 'src/app/page/modal/modal.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { ReportitemsPage } from './reportitems.page';

const routes: Routes = [
  {
    path: '',
    component: ReportitemsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ModalModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportitemsPage]
})
export class ReportitemsPageModule {}
