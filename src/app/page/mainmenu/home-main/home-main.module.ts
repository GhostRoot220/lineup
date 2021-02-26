import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../../../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';

import { HomeMainPage } from './home-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomeMainPage }])
  ],
  declarations: [HomeMainPage]
})
export class HomeMainPageModule {}
