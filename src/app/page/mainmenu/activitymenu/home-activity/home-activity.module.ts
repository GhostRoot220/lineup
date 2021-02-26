import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from "../../../../component/component.module";
import { HomeActivityPage } from './home-activity.page';
import { ActivitypopoverPage } from '../activitypopover/activitypopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: HomeActivityPage }])
  ],
  declarations: [HomeActivityPage, ActivitypopoverPage],
  entryComponents: [ActivitypopoverPage]
})
export class HomeActivityPageModule {}
