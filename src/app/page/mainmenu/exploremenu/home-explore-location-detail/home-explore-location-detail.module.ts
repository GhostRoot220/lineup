import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeExploreLocationDetailPage } from './home-explore-location-detail.page';
import { PipesModule } from '../../../../pipes/pipes.module';
import { ModalModule } from 'src/app/page/modal/modal.module';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

const routes: Routes = [
  {
    path: '',
    component: HomeExploreLocationDetailPage
  }
];

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalModule,
    PipesModule,
    FusionChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeExploreLocationDetailPage]
})
export class HomeExploreLocationDetailPageModule {}
