import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeShopItemDetailPage } from './home-shop-item-detail.page';
import { ModalModule } from 'src/app/page/modal/modal.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: HomeShopItemDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeShopItemDetailPage],
})
export class HomeShopItemDetailPageModule {}
