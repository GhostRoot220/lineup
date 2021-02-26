import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlertPerlocationPage } from './alert-perlocation.page';

const routes: Routes = [
  {
    path: '',
    component: AlertPerlocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlertPerlocationPage]
})
export class AlertPerlocationPageModule {}
