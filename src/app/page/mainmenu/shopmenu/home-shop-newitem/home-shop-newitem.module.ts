import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeShopNewitemPage } from './home-shop-newitem.page';

const routes: Routes = [
  {
    path: '',
    component: HomeShopNewitemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeShopNewitemPage]
})
export class HomeShopNewitemPageModule {}
