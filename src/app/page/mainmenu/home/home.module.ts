import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home.router.module';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { PopoverPage } from "../home-popover/home-popover";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PopoverPage],
  entryComponents: [PopoverPage]
})
export class HomePageModule {}
